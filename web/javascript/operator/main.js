// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax


function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1,2,3];

console.log(sum(numbers[0], numbers[1], numbers[2]));

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));
