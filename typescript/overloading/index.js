// # TypeScript Function Overloading
// 
// <https://howtodoinjava.com/typescript/function-overloading/>
function add(first, second, third, fourth) {
    if (first !== undefined && second !== undefined && third !== undefined) {
        return first + second + third;
    }
    else {
        return first + second;
    }
}
var r1 = add(1, 2, 3);
var r2 = add(1, 2);
// const r3 = add(1, 2, 3, 4); // <--- ERROR: `index.ts(17,25): error TS2554: Expected 2-3 arguments, but got 4.`
console.log(r1);
console.log(r2);
// ----
// 3. Function Overloading Example
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
function findEmployees(name, age, location) {
    var employee = [];
    if (age != undefined && location != undefined) {
        // find employees by name, age and location
        console.log('find employees by name, age and location');
    }
    else {
        // find employees by name and age
        console.log('find employees by name and age');
    }
    return employee;
}
findEmployees('John', 10);
// findEmployees('My John', 'my location'); // <--- ERROR: `index.ts(49,26): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.`
findEmployees('My John', 12, 'my location');
