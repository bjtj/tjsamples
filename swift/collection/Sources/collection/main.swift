import Foundation

let text = "Buffalo buffalo buffalo buffalo."
if let firstSpace = text.index(of: " ") {
    print(text[..<firstSpace])
}

// accessing individual elements
print("\(text.startIndex)")
let firstChar = text[text.startIndex]
print(firstChar)

// accessing slices of a collection
let firstWord = text.prefix(while: { $0 != " "})
print(firstWord)

// slices share indices
var absences = [0, 2, 0, 4, 0, 3, 1, 0]

let secondHalf = absences.suffix(absences.count / 2)
if let i = secondHalf.indices.max(by: {secondHalf[$0] < secondHalf[$1] }) {
    print("Highest second-half absences: \(absences[i])")
}

// slices inherit collection semantics

absences[7] = 2
print(absences)
print(secondHalf)

// traversing a collection

let word = "Swift"
for character in word {
    print(character)
}

for i in word.indices {
    print(word[i])
}


// https://developer.apple.com/documentation/swift/array/2908681-map

let cast = ["Vivien", "Marlon", "Kim", "Karl"]
let lowercaseNames = cast.map { $0.lowercased() }
print(lowercaseNames)
let letterCounts = cast.map { $0.count }
print(letterCounts)

// https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/CollectionTypes.html

// Creating an Empty Array

var someInts = [Int]()
print("someInts is of type [Int] with \(someInts.count) items.")

someInts.append(3)
print("\(someInts)")
someInts = []
print("\(someInts)")

// Creating an Array with a Default Value

var threeDouble = Array(repeating: 0.0, count: 3)


// Creating an Array by Adding Two Arrays Together

var anotherTreeDoubles = Array(repeating: 2.5, count: 3)
print("\(anotherTreeDoubles)")

var sixDoubles = threeDouble + anotherTreeDoubles
print("\(sixDoubles)")


// Creating an Array with an Array Literal

var shoppingList: [String] = ["Eggs", "Milk"]
print("\(shoppingList)")

// Accessing and Modifying an Array

print("The shopping list contains \(shoppingList.count) items.")

if shoppingList.isEmpty {
    print("The shopping list is empty.")
} else {
    print("The shopping list is not empty.")
}

shoppingList.append("Flour")
print("\(shoppingList)")


shoppingList += ["Baking Powder"]
print("\(shoppingList)")
shoppingList += ["Chocolate Spread", "Cheese", "Butter"]
print("\(shoppingList)")


var firstItem = shoppingList[0]
print("\(firstItem)")


shoppingList[0] = "Six eggs"
print("\(shoppingList[0])")


shoppingList[4...6] = ["Bannas", "Apples"]
print(shoppingList)

shoppingList.insert("Maple Syrup", at: 0)
print(shoppingList)

let mapleSyrup = shoppingList.remove(at: 0)
print(mapleSyrup)
print(shoppingList)

let apples = shoppingList.removeLast()
print(apples)
print(shoppingList)

// Iterating Over an Array

for item in shoppingList {
    print(item)
}

for (index, value) in shoppingList.enumerated() {
    print("Item \(index + 1): \(value)")
}


// Sets

var letters = Set<Character>()
print("letters is of type Set<Character> with \(letters.count) items.")


letters.insert("a")
letters = []

// Creating a Set with an Array Literal

var favoriteGenres: Set<String> = ["Rock", "Classical", "Hip hop"]
// var favoriteGenres: Set = ["Rock", "Classical", "Hip hop"]

// Accessing and Modifying a Set

print("I have \(favoriteGenres.count) favorite music genres.")

if favoriteGenres.isEmpty {
    print("As far as music goes, I'm not picky.")
} else {
    print("I have particular music preferences.")
}


favoriteGenres.insert("Jazz")

if let removedGenres = favoriteGenres.remove("Rock") {
    print("\(removedGenres)? I'm over it")
} else {
    print("I never much cared for that.")
}


if favoriteGenres.contains("Funk") {
    print("I get up on the good foot.")
} else {
    print("It's too funky in here.")
}


// Iterating Over a Set

for genre in favoriteGenres {
    print("\(genre)")
}

for genre in favoriteGenres.sorted() {
    print("\(genre)")
}


// Fundamental Set Operations
//
// intersection
// symmetricDifference
// union
// subtracting

let oddDigits: Set = [1,3,5,7,9]
let eventDigits: Set = [0,2,4,6,8]
let singleDigitPrimeNumbers: Set = [2,3,5,7]

print(oddDigits.union(eventDigits).sorted())
print(oddDigits.intersection(eventDigits).sorted())
print(oddDigits.subtracting(singleDigitPrimeNumbers).sorted())
print(oddDigits.symmetricDifference(singleDigitPrimeNumbers).sorted())

// Set Membership and Equality

let houseAnimals: Set = ["🐶", "🐱"]
let farmAnimals: Set = ["🐮", "🐔", "🐑", "🐶", "🐱"]
let cityAnimals: Set = ["🐦", "🐭"]

print(houseAnimals.isSubset(of: farmAnimals))
print(farmAnimals.isSuperset(of: houseAnimals))
print(farmAnimals.isDisjoint(with: cityAnimals))

// Dictionaries


var airports: [String:String] = ["YYZ": "Toronto Pearson", "DUB": "Dublin"]

print(airports)

airports["LHR"] = "London"
airports["LHR"] = "London Heathrow"

if let oldValue = airports.updateValue("Dublin Airport", forKey: "DUB") {
    print("The old value for DUB was \(oldValue).")
}

airports["APL"] = "Apple International"
airports["APL"] = nil

if let removedValue = airports.removeValue(forKey: "DUB") {
    print("The removed airport's name is \(removedValue).")
} else {
    print("The airports dictionary does not contain a value for DUB.")
}

// Iterating Over a Dictionary


for (airportCode, airportName) in airports {
    print("\(airportCode): \(airportName)")
}

for airportCode in airports.keys {
    print("Airport code: \(airportCode)")
}

for airportName in airports.values {
    print("Airport name: \(airportName)")
}


let airportCodes = [String](airports.keys)
print(airportCodes)
let airportNames = [String](airports.values)
print(airportNames)

print(airports.keys)
print(airports.values)
