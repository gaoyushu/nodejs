#!/usr/bin/node

const Dog = require('./02-dog');

var keji = new Dog('keji', 4);
var hashiqi = new Dog('hashiqi', 9);

keji.on('bark', onBark);
hashiqi.on('bark', onBark);

function onBark(){
  console.log('%s barked! energy: %s', this.getName(), this.getEnergy());
}
