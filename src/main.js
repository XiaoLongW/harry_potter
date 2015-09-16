'use strict';
var Pos = require('./model/pos');
var Scanner = require('./model/scanner');
var Basket = require('./model/basket');
var Discounter = require('./model/discounter');

function main(tags) {
	var basket = new Basket();
	var scanner = new Scanner();
	var discounter = new Discounter(5);
	var pos = new Pos(scanner, basket, discounter);

	pos.scan(tags);
	var receipt = pos.printReceip();
  console.log(receipt)
}

module.exports = main;