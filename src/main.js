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
	var receipt = pos.printReceip();
  console.log(receipt)
}

module.exports = main;