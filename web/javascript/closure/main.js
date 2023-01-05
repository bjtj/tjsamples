function genClosure(i) {
    return function () { 
        i++;
        return i;
    }
}


var closure1 = genClosure(0);
console.log(closure1());
console.log(closure1());
console.log(closure1());

var closure2 = genClosure(100);
console.log(closure2());
console.log(closure2());
console.log(closure2());

console.log(closure1());

var i = 10;
var closure3 = genClosure(i);
console.log(closure3());
console.log(closure3());

console.log(i);
