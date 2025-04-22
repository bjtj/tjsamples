let arr = [];

console.log(arr.concat(1,2,3)); // [ 1, 2, 3 ]

arr = arr.concat(7);

console.log(arr.concat([1,2,3])); // [ 7, 1, 2, 3 ]

arr = arr.concat([4,5,6]); // [ 7, 4, 5, 6 ]

console.log(arr.concat(9, 10, [11, 12])); // [ 7, 4, 5, 6, 9, 10, 11, 12 ]

console.log(arr.concat(9, 10, [11, [12, 13]])); // [ 7, 4, 5, 6, 9, 10, 11, [ 12, 13 ] ]

