
let arr = [1,2,3,4,5,6]

print(arr.filter { x in x % 2 == 0 })

print(arr.indices.filter { i in i % 2 == 0 })

let indices = [1, 4, 5]

// print(arr.indices.filter { indices.contains($0) })

print(indices.map { arr[$0] })
