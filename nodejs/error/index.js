

class MyError extends Error {
  constructor(code, msg) {
    super(msg);
    this.code = code;
    this.msg = msg;
  }
}


(async () => {

  try {
    throw new Error('error message');
  } catch (err) {
    console.log('ERROR OCCURED!');
    console.log('--------------');
    console.dir(err);
    console.log(err.message);
  }
  
  try {
    throw new MyError(10, 'my error');
  } catch (err) {
    console.log('ERROR OCCURED!');
    console.log('--------------');
    console.dir(err);
    console.log(err.message);
  }
})();
