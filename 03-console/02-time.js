#!/usr/bin/node

// 控制台基准测试
// 对耗时任务运行的时间进行采样

// console.time 和 console.timeEnd 是一对 关键字要一致
console.time('test');
longTask();
console.timeEnd('test');

function longTask(){
  var n;
  for(var i = 0; i < 10000; i++){
    for(var j = 0; j < 10000; j++){
      n = i *j;
    }
  }
  return n;
}
