type user = {
  _id: string;
  name: string;
};

interface userInterface extends user {
}

class User implements user {
  _id: string;
  name: string;
  constructor(id='', name='') {
    this._id = id;
    this.name = name;
  }
}

// class X implements userInterface {}
// ^^^ main.ts(18,7): error TS2420: Class 'X' incorrectly implements interface 'userInterface'.
// ^^^   Type 'X' is missing the following properties from type 'user': _id, name

console.log(`${JSON.stringify(new User())}`);
// console.log(`${JSON.stringify(new User(1))}`);
// ^^^ main.ts(19,40): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(`${JSON.stringify(new User('1'))}`);
console.log(`${JSON.stringify(new User('2', 'steve'))}`);
