import Foundation
import Socket

class EchoServer {
    static let bufferSize = 4096

    let port: Int
    var serverSocket: Socket? = nil
    var running = true
    var remoteSockets = [Int32: Socket]()
    let lockQueue = DispatchQueue(label: "lockqueue")

    init(port: Int) {
        self.port = port
    }

    deinit {
        for socket in remoteSockets.values {
            socket.close()
        }
        self.serverSocket?.close()
    }

    func run() {
        let queue = DispatchQueue.global(qos: .userInteractive)
        queue.async { [unowned self] in
            do {
                try self.serverSocket = Socket.create(family: .inet6)

                guard let socket = self.serverSocket else {
                    print("Unable to unwrap socket...")
                    return
                }

                try socket.listen(on: self.port)

                print("Listening on port: \(socket.listeningPort)")

                repeat {
                    let newSocket = try socket.acceptClientConnection()
                    print("Accepted connection from: \(newSocket.remoteHostname) on port \(newSocket.remotePort)")
                    print("Socket Signature: \(String(describing: newSocket.signature?.description))")

                    self.addNewConnection(socket: newSocket)
                } while self.running
            } catch let error {
                guard let socketError = error as? Socket.Error else {
                    print("Unexpected error...")
                    return
                }
                if self.running {
                    print("Error reported:\n \(socketError.description)")
                }
            }
        }
        dispatchMain()
    }

    func addNewConnection(socket: Socket) {
        lockQueue.sync { [unowned self, socket] in
            self.remoteSockets[socket.socketfd] = socket
        }

        let queue = DispatchQueue.global(qos: .default)
        queue.sync { [unowned self, socket] in
            var shouldKeepRunning = true
            var readData = Data(capacity: EchoServer.bufferSize)
            do {
                try socket.write(from: "Hello, type 'QUIT' to end session\nor 'SHUTDOWN' to stop server.\n")
                repeat {
                    let bytesRead = try socket.read(into: &readData)
                    if bytesRead > 0 {
                        guard let response = String(data: readData, encoding: .utf8) else {
                            print("Error decoding response...")
                            readData.count = 0
                            break
                        }
                        if response.hasPrefix("SHUTDOWN") {
                            print("Shutdown requested by connection at \(socket.remoteHostname):\(socket.remotePort)")
                            self.shutdownServer()
                            return
                        }
                        print("Server received from connection at \(socket.remoteHostname):\(socket.remotePort): \(response)")

                        let reply = "Server response: \n\(response)\n"
                        try socket.write(from: reply)

                        if (response.uppercased().hasPrefix("QUIT") ||
                              response.uppercased().hasPrefix("SHUTDOWN")) &&
                             (!response.hasPrefix("QUIT") &&
                                !response.hasPrefix("SHUTDOWN")) {
                            try socket.write(from: "If you want to QUIT or SHUTDOWN, please type the name in all caps. 😃\n")
                        }

                        if response.hasPrefix("QUIT") || response.hasSuffix("QUIT") {
                            shouldKeepRunning = false
                        }
                    }

                    if bytesRead == 0 {
                        shouldKeepRunning = false
                        break
                    }

                    readData.count = 0
                } while shouldKeepRunning

                print("Socket: \(socket.remoteHostname):\(socket.remotePort) closed...")
                socket.close()

                self.lockQueue.sync { [unowned self, socket] in
                    self.remoteSockets[socket.socketfd] = nil
                }
            } catch let error {
                guard let socketError = error as? Socket.Error else {
                    print("Unexpected error by connection at \(socket.remoteHostname):\(socket.remotePort)...")
                    return
                }
                if self.running {
                    print("Error reported by connection at \(socket.remoteHostname):\(socket.remotePort):\n \(socketError.description)")
                }
            }
        }
    }

    func shutdownServer() {
        print("\nShutdown in progress...")
        running = false

        for socket in remoteSockets.values {
            socket.close()
        }
        serverSocket?.close()

        DispatchQueue.main.sync {
            exit(0)
        }
    }
}

let port = 5000
let server = EchoServer(port: port)
print("Swift Echo Server Sample")
print("Connect with a command line window by entering 'telnet ::1 \(port)'")
server.run()
