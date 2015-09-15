'use strict';
var Pos = require('./module/pos');
var Scanner = require('./module/scanner');
var Basket = require('./module/basket');
var Discounter = require('./module/discounter');

function main(tags) {
	var basket = new Basket();
	var scanner = new Scanner();
	var discounter = new Discounter();
	var pos = new Pos(scanner, basket, discounter);

	pos.scan(tags);
	var receipt = pos.printReceip();//这里还是太拘泥于pos机的模式了，这个题目里并没有那些东西。反而给自己加大了难度
  console.log(receipt)//缩进
}

module.exports = main;