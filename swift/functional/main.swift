

print("=== forEach ===")

let arr = [1,2,3,4,5]

arr.forEach {
    print($0)
}

print("=== filter ===")

let filtered_arr = arr.filter {
    $0 % 2 == 0
}


filtered_arr.forEach {
    print($0)
}

print("=== map ===")

let mapped_arr = arr.map {
    return "** \($0) **"
}

mapped_arr.forEach {
    print($0)
}
