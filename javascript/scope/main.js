// using ECMA 6


const f1 = false;
const f2 = false;


var msg = "???";

function foo() {
    msg = "wow";
    var msg = "hello";
    console.log(msg);
}

function bar() {
    tmp = "wow";
    var tmp = "hello";
    console.log(tmp);
}

console.log(" == call foo()");
foo();

console.log(" == call bar()");
bar();

console.log(msg);


function baz() {
    greet = "hello";		// ReferenceError: greet is not defined
    let greet = "hi";
    console.log(greet);
}

if (f1) {
    console.log(" == call baz()");
    baz();
}


function zoo() {
    const x = 1;
    x = 2;			// TypeError: Assignment to constant variable.
}

if (f2) {
    console.log(" == call zoo()");
    zoo();
}
