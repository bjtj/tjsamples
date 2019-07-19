// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString


function Dog(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
}

var theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');

console.log(theDog.toString());

Dog.prototype.toString = function() {
    var ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
    return ret;
}

console.log(theDog.toString());

class Person { constructor(name) { this.name = name; } }

const person = new Person('Steve');
console.log(person.name);
