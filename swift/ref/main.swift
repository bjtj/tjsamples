
// ----
public class Person {
    public var name: String
    public var age: Int
    public init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    public var description: String {
        return "Name: \(name), Age: \(age)"
    }
}

let person = Person(name: "Steve", age: 10)

print(person.description)


let person2: Person = person

print(person.description)
print(person2.description)

person.age += 20

print(person.description)
print(person2.description)


// ----

public struct Animal {
    public var name: String
    public var age: Int
}


var animal = Animal(name: "Cat", age: 10)

print(animal)

var animal2 = animal

print(animal)
print(animal2)

animal.age += 5

print(animal)
print(animal2)
