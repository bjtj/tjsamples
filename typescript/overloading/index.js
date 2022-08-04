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
console.log('');
console.log('[CALL add]');
console.log('---');
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
console.log('');
console.log('[CALL findEmployees]');
console.log('---');
findEmployees('John', 10);
// findEmployees('My John', 'my location'); // <--- ERROR: `index.ts(49,26): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.`
findEmployees('My John', 12, 'my location');
function foo(name, _opts, _callback) {
    console.log("NAME: ".concat(name));
    var opts = _opts;
    var callback = _callback;
    if (!_callback) {
        opts = null;
        callback = _opts;
    }
    if (opts) {
        console.log("OPTS => ".concat(JSON.stringify(opts)));
        callback();
    }
    else {
        callback();
    }
}
console.log('');
console.log('[CALL foo]');
console.log('---');
foo('my name', function () {
    console.log('done');
});
foo('my name', { key: 'value' }, function () {
    console.log('done');
});
