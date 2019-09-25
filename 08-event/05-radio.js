#!/usr/bin/node

function Radio(station) {
  var _listeners = {};
  // 里面放的数据是键值对 举例如下
  //'play': [fn1, fn2, fn3],
  //'stop': []
  // }

  setTimeout(() => {
    emit('open', station);
  }, 0);

  setTimeout(() => {
    emit('stop', station);
  }, 5000);
 
  // 自写emit方法
  function emit(evt, arg){
    if(typeof(_listeners[evt]) == 'undefined'){
      console.error('Error: %s not defined', evt);
      process.exit(1);
    }
    _listeners[evt].forEach((fn) => {
      fn.call(this, arg);
    });
  }

  this.on = (evt, fn) => {
    if(typeof(_listeners[evt]) == 'undefined'){
      _listeners[evt] = [];
    }

    _listeners[evt].push(fn);
  
  };

}


module.exports = Radio;
