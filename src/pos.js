'use strict';

function Pos(scanner, cart, discounter) {
	this.cart = cart;
	this.scanner = scanner;
	this.discounter = discounter;
}

Pos.prototype.scan = function(tags) {
	var o_this = this;
	tags.forEach(function (tag) {
		var newCartBook = o_this.scanner.scan(tag);
		o_this.cart.addCartBook(newCartBook);
	});
};

Pos.prototype.printReceip = function() {
	var bookCounts = [];
	this.cart.cartBooks.forEach(function(cartBook){
		bookCounts.push(cartBook.count);
	});

	var beforDiscountPay =  0;
	this.cart.cartBooks.forEach(function(cartBook){
		beforDiscountPay += cartBook.book.price * cartBook.count;
	});

	var saveMoney = this.discounter.getBigestSave(bookCounts) / 100;

	var receip = '------小龙书店------\n' +
			         '------购书清单------\n';

	this.cart.cartBooks.forEach(function(cartBook) {
		receip += '书名：' + cartBook.book.name +
		        	'，数量：' + cartBook.count +
		        	'本，单价：' + cartBook.book.price + '元\n';
	});

	receip += '--------结算--------\n' +
			      '原价:'+beforDiscountPay+'元\n' +
			      '实际支付(打折后):'+(beforDiscountPay-saveMoney) + '元	\n';

	return receip;
};

module.exports = Pos;