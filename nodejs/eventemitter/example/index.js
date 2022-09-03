// https://itnext.io/the-observer-pattern-in-nodejs-c0cfffb4744a

const { EventEmitter } = require('events');

class ObservableValue extends EventEmitter {

  constructor(value = null) {
    super();
    this._value = value;
  }

  get value() {
    return _value;
  }

  set(newval) {
    this._value = newval;
    this.emit('updated', newval);
  }
}

(() => {
  let value = new ObservableValue();
  value.on('updated', (val) => {
    console.log(`new value: ${val}`);
  });

  value.set('hello');
  value.set('world');
})();
