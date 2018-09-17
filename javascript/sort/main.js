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
