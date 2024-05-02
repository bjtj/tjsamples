// CLASSES
class Customer(name: String) {
    val customerKey = name.uppercase()
}

class PersonHasPets(val pets: MutableList<Pet> = mutableListOf())

class Pet {
    constructor(owner: PersonHasPets) {
        owner.pets.add(this)
    }
}

class Person(val name: String) {
    val children: MutableList<Person> = mutableListOf()
    constructor(name: String, parent: Person) : this(name) {
        parent.children.add(this)
    }
}

// DATA CLASS
data class User(val name: String, val age: Int)


// ABSTRACT CLASSES
open class Polygon {
    open fun draw() {
        println("Polygon::Draw()")
    }
}

class Triangle: Polygon() {
    override fun draw() {
        println("Triangle::draw()")
    }
}

abstract class Animal {
    open fun hello() {
        println("Animal::hello()")
    }
    abstract fun move()
}

class Duck : Animal() {
    override fun move() {
        println("Duck::move()")
    }
}

// SUPER
open class Base {
    open fun hello() {
        println("Base::hello()")
    }
}

class Impl: Base() {
    override fun hello() {
        super.hello()
        println("Impl::hello()")
    }
}

// OVERRIDING RULES
open class Rectangle {
    open fun draw() {
        println("Rectangle::draw()")
    }
}

interface Shape {
    fun draw() {
        println("Shape::draw()")
    }
}

class Square() : Rectangle(), Shape {
    override fun draw() {
        super<Rectangle>.draw()
        super<Shape>.draw()
    }
}

fun main() {

    // CLASSES
    val customer = Customer("Mary")
    println(customer)             // Customer@f6f4d33
    println(customer.customerKey) // MARY

    val owner = PersonHasPets()
    Pet(owner)
    println(owner.pets.count()) // 1

    val parent = Person("Jane")
    Person("Mark", parent)

    println("parent name: ${parent.name}") // parent name: Jane
    println("child name: ${parent.children.get(0).name}") // child name: Mark

    // DATA CLASS
    val user = User("Steve", 12)
    println(user.toString())    // User(name=Steve, age=12)

    // ABSTRACT CLASSES
    Triangle().draw()           // Triangle::draw()
    Duck().move()               // Duck::move()

    // SUPER
    Impl().hello()              // Base::hello()
                                // Impl::hello()

    // OVERRIDING RULES
    Square().draw()             // Rectangle::draw()
                                // Shape::draw()
}
