#!/usr/bin/node

const user = {
  name: 'Alex',
  age: 17,
};

const log = console.log;

// 三种占位符
// %s 字符串类型
// %d 整数类型
// %j 对象类型
log('-----三种占位符-----')
log('name: %s', user.name);
log('age: %d', user.age);
log('user: %j', user);

// 四种输出方式
log('-----四种输出方式-----');
// 1.占位符输出
// 2.逗号间隔 多变量输出
// 3.拼接字符串输出
// 4.模板字符串输出
log('name: %s', user.name);
log('user: ', user.name, user.age);
log('name: ' + user.name);
log('name: ${user.name}');

console.error('Error：something wrong!');
