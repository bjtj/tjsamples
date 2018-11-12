// http://es6-features.org/#ClassDefinition
// http://es6-features.org/#ClassInheritance

class Animal {
    constructor(name) {
	this.name = name;
    }
}

class Person extends Animal {
    constructor (name, age) {
	super(name)
	this.age = age;
    }
}

var person = new Person("Steve", 16);

console.log("Name: " + person.name);
console.log("Age: " + person.age);
