'use strict';
var Pos = require('./pos');
var Scanner = require('./scanner');
var Cart = require('./cart');
var Discounter = require('./discounter');

function main(tags) {
	var cart = new Cart;
	var scanner = new Scanner;
	var discounter = new Discounter;
	var pos = new Pos(scanner, cart, discounter);

	pos.scan(tags);
	var receipt = pos.printReceip();
  console.log(receipt)
}

module.exports = main;