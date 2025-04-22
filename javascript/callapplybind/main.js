
function hi() {
    console.log('hi');
}

hi.call();
hi.apply();

function hello() {
    console.log(this.msg);
}

function A() {
    this.msg = 'hello';
}


A.prototype.hello = function () {
	console.log('-*- hello() -*-');
    hello();
	console.log('-*- hello.call(this) -*-');
	hello.call(this);
	console.log('-*- hello.apply(this) -*-');
	hello.apply(this);

	
	this.foo1 = hello.bind(this);
	this.foo2 = hello;
}

new A().hello();

function B() {
    this.msg = 'Hello B';
}


var a = new A();
a.hello();
console.log('-*- foo1() -*-');
var foo1 = a.foo1;
foo1();
console.log('-*- foo2() -*-');
var foo2 = a.foo2;
foo2();
console.log('-*- foo3() -*-');
var foo3 = a.foo2.bind(a);
foo3();

var b = new B();
console.log('-*- foo4() -*-');
var foo4 = a.foo2.bind(b);
foo4();


// 
function Person(name) { this.msg = `Hello ${name}`; }
hello.call(new Person('TJ'));

function hi(name) {
    console.log(`Hi, ${name}`);
}

hi.call(null, 'TJ');				// Hi, TJ
hi.apply(null, ['TJ']);				// Hi, TJ
hi.bind(new Person('TJ'))('Steve'); // Hi, Steve
