// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

// [ 'Dec', 'Feb', 'Jan', 'March' ]


var array1 = [1,30,4,21];
array1.sort();
console.log(array1);

// [ 1, 21, 30, 4 ]


var numbers = [41,20,5,1,3];
numbers.sort(function(a,b) {
    return a - b;
});
console.log(numbers);

// [ 1, 3, 5, 20, 41 ]


let arr2 = [3,2,1,5];
let arr2_sorted = arr2.slice().sort();

console.log(arr2);                // [ 3, 2, 1, 5 ]
console.log(arr2_sorted);         // [ 1, 2, 3, 5 ]

let strarr = [...new Array(15)].map((n, i) => `str${i}`).sort();
console.log(strarr);

strarr.sort((a, b) => {
  let n1 = parseInt(a.substring('str'.length));
  let n2 = parseInt(b.substring('str'.length));
  return n1 - n2;
});
console.log(strarr);
