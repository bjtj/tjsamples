import Foundation

DispatchQueue.global(qos: .userInitiated).async {
    print("start")
    DispatchQueue.main.async {
        print("hello")
    }
}

print("bye")
sleep(1)

DispatchQueue.global(qos: .background).async {
    print("hi")
}

// https://medium.com/@danielgalasko/a-background-repeating-timer-in-swift-412cecfd2ef9
class RepeatingTimer {

    let timeInterval: TimeInterval

    init(timeInterval: TimeInterval) {
        self.timeInterval = timeInterval
    }

    deinit {
        timer.setEventHandler {}
        timer.cancel()
        resume()
        eventHandler = nil
    }

    private lazy var timer: DispatchSourceTimer = {

        let t = DispatchSource.makeTimerSource()
        t.schedule(deadline: .now() + self.timeInterval, repeating: self.timeInterval)
        t.setEventHandler(handler: { [weak self] in
                              self?.eventHandler?()
                          })
        return t
    }()

    var eventHandler: (() -> Void)?

    private enum State {
        case suspended
        case resumed
    }

    private var state: State = .suspended

    func resume() {
        if state == .resumed {
            return
        }

        state = .resumed
        timer.resume()
    }

    func suspend() {
        if state == .suspended {
            return
        }
        state = .suspended
        timer.suspend()
    }

}


let t = RepeatingTimer(timeInterval: 3)
t.eventHandler = {
    print("Timer Fired")
}
t.resume()

let wait = 10
print("sleep \(wait) seconds...")
sleep(10)

print("Done")
