
// print member variable 'msg'
function hello() {
    console.log(this.msg);
}


// scope a
const a = {
	msg: 'Hello A',
	hello: hello
}

// scope b
const b = {
	msg: 'Hello B',
	hello: hello
}

// scope c
const c = {
	msg: 'Hello C',
	say() {
		console.log(this.msg);
	}
}


a.hello();						// Hello A
b.hello();						// Hello B
console.log('-- c.say() --');
c.say();						// Hello C
b.say = c.say;
console.log('-- b.say() --');
b.say();						// Hello B


// scope d
const d = {
	msg: 'Hello D',
	say() {
		setTimeout(function () {
			console.log(this.msg)
		}, 100);
	},
	say2() {
		const me = this;
		setTimeout(function () {
			console.log(me.msg)	// capturing
		}, 100);
	}
}

d.say();						// undefined
d.say2();						// Hello D


