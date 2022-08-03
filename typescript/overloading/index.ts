// # TypeScript Function Overloading
// 
// <https://howtodoinjava.com/typescript/function-overloading/>

// 2. Syntax

function add(first: number, second: number): number;    //Overload signature with two parameters
function add(first: number, second: number, third:number): number;  //Overload signature with three parameters
function add(first: number, second: number, third?: number, fourth?: number): number {  //Implementation signature
  if (first !== undefined && second !== undefined && third !== undefined) {
    return first + second + third;
  } else {
    return first + second;
  }
}

const r1 = add(1, 2, 3);
const r2 = add(1, 2);
// const r3 = add(1, 2, 3, 4); // <--- ERROR: `index.ts(17,25): error TS2554: Expected 2-3 arguments, but got 4.`

console.log(r1);
console.log(r2);

// ----

// 3. Function Overloading Example

class Employee {}

function findEmployees(name: string): Employee[]; //Overload Signature 1
function findEmployees(name: string, age: number): Employee[]; //Overload Signature 2
function findEmployees(name: string, age: number, location: string): Employee[]; //Overload Signature 3
function findEmployees(name: string, age?: number, location?: string): Employee[] { //Implementation Signature

	let employee: Employee[] = [];

  if(age != undefined && location != undefined) {
    // find employees by name, age and location
    console.log('find employees by name, age and location');
  } else {
    // find employees by name and age
    console.log('find employees by name and age');
  }

	return employee;
}

findEmployees('John', 10);
// findEmployees('My John', 'my location'); // <--- ERROR: `index.ts(49,26): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.`
findEmployees('My John', 12, 'my location');
