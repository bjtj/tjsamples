import Foundation
import Socket

class Server {
    var done = false
    func run() throws {

        var socket: Socket? = nil
        try socket = Socket.create(family: .inet, type: .datagram, proto: .udp)

        print("[server] listen()")
        var readData = Data(capacity: 1024)
        let group = in_addr(s_addr: inet_addr("239.255.255.250"))
        let interface = in_addr(s_addr: inet_addr("0.0.0.0"))
        var mreq = ip_mreq(imr_multiaddr: group, imr_interface: interface)
        setsockopt((socket?.socketfd)!, Int32(IPPROTO_IP), IP_ADD_MEMBERSHIP,
                   &mreq, socklen_t(MemoryLayout<ip_mreq>.size))

        while done == false {
            let ret = try socket?.listen(forMessage: &readData, on: 1900)
            print("[server] \(String(describing: ret!.bytesRead))")
            print("[server] \(String(data: readData, encoding: .utf8)!)")
        }

        print("[server] close()")
        socket?.close()
    }
}

class Client {

    func run() throws {
        var socket: Socket? = nil
        try socket = Socket.create(family: .inet, type: .datagram, proto: .udp)
        try socket?.setReadTimeout(value: UInt(3000))
        try socket?.setWriteTimeout(value: UInt(300))
        print("[client] write()")
        let ssdp_addr = Socket.createAddress(for: "239.255.255.250", on: 1900)
        let msg = "M-SEARCH * HTTP/1.1\r\n" +
          "HOST: 239.255.255.250:1900\r\n" +
          "MAN: \"ssdp:discover\"\r\n" +
          "MX: 3\r\n" +
          "ST: ssdp:all\r\n" +
          "USER-AGENT: OS/x.x UPnP/1.1 App/x.x\r\n\r\n"
        try socket?.write(from: msg.data(using: .utf8)!, to: ssdp_addr!)

        print("[client] readDatagram()")
        var readData = Data(capacity: 1024)
        let ret = try socket?.readDatagram(into: &readData)
        print("[client] \(String(describing: ret!.bytesRead))")
        print("[client] \(String(data: readData, encoding: .utf8)!)")

        print("[client] close()")
        socket?.close()
    }
}

let server = Server()
let client = Client()

let queue = DispatchQueue.global(qos: .userInteractive)
queue.async {() in
    try? server.run()
}

sleep(1)

queue.async {() in
    try? client.run()
}

dispatchMain()
