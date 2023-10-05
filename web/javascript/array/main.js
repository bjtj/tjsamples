
// slice


console.log([1,2,3]);		  // [ 1, 2, 3 ]
console.log([1,2,3].slice(0, 1)); // [ 1 ]
console.log([1,2,3].slice(0, 2)); // [ 1, 2 ]
console.log([1,2,3].slice(1, 1)); // []
console.log([1,2,3].slice(1, 2)); // [ 2 ]
console.log([1,2,3].slice(1, 6)); // [ 2, 3 ]
console.log([1,2,3].slice(1));	  // [ 2, 3 ]



let arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);                  // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr.pop());            // 6
console.log(arr);                  // [ 1, 2, 3, 4, 5 ]
