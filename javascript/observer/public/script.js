function _nn(obj) {
  return obj != undefined && obj != null;
}

export function Observable(value = null) {
  this._value = value;
  this._handlers = {};
}

Observable.prototype.on = function (eventname, handler) {
  this._handlers[eventname] = [this._handlers[eventname], [handler]].flat().filter(_nn);
};

Observable.prototype.removeListener = function(eventname, handler) {
  this._handlers[eventname] = this._handlers[eventname].filter(i => i != handler);
}

Observable.prototype.emit = function(eventname, ...args) {
  let handlers = this._handlers[eventname];
  if (handlers) {
    handlers.forEach(handler => {
      handler.apply(null, args);
    });
  }
}

Observable.prototype.get = function() {
  return this._value;
};

Observable.prototype.set = function(newval) {
  this._value = newval;
  this.emit('updated', newval);
};

export function applyObservable(dom, observable) {
  observable.on('updated', (newval) => {
    dom.innerHTML = newval;
  });
  dom.innerHTML = observable.get();
}


