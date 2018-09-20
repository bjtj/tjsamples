import Foundation

// https://medium.com/@nimjea/grand-central-dispatch-in-swift-fdfdd8b22d52

// DispatchQueue.main.async {
// }

// sync
func syncWork() {

    print("sync work")
    
    let northZone = DispatchQueue(label: "perform_task_with_team_north")
    let southZone = DispatchQueue(label: "perform_task_with_team_south")

    northZone.sync {
        for number in 1...3 { print("North \(number)") }
    }
    southZone.sync {
        for number in 1...3 { print("South \(number)") }
    }
}

syncWork()

// async
func asyncWork() {

    print("async work")
    
    let northZone = DispatchQueue(label: "perform_task_with_team_north")
    let southZone = DispatchQueue(label: "perform_task_with_team_south")

    northZone.async {
        for number in 1...3 { print("North \(number)") }
    }
    southZone.async {
        for number in 1...3 { print("South \(number)") }
    }
}

asyncWork()

// background
DispatchQueue.global(qos: .background).async {
    print("background -- 1")
    DispatchQueue.main.async {
        print("main")
    }
    print("background -- 2")
}

// delay
let deadlineTime = DispatchTime.now() + .seconds(1)
DispatchQueue.main.asyncAfter(deadline: deadlineTime) {
    print("Deadline!")
}



// dispatch group

func task(delay: UInt32, code: () -> ()) {
    print("sleep \(delay)")
    sleep(delay)
    print("sleep \(delay) -- done")
    code()
}


DispatchQueue.global(qos: .background).async {

    let dispatchGroup = DispatchGroup()

    dispatchGroup.enter()
    DispatchQueue(label: "queue1").async {
        task(delay: 2) { dispatchGroup.leave() }
    }

    DispatchQueue(label: "queue2").async {
        dispatchGroup.enter()
        task(delay: 1) { dispatchGroup.leave() }
    }

    dispatchGroup.notify(queue: .main) {
        print("all work done")
    }
}


dispatchMain()
