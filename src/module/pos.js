'use strict';

function Pos(scanner, basket, discounter) {
	this.basket = basket;
	this.scanner = scanner;
	this.discounter = discounter;
}

Pos.prototype.scan = function(tags) {
	var o_this = this;
	tags.forEach(function (tag) {
		var newBasketBook = o_this.scanner.scan(tag);
		o_this.basket.addBasketBook(newBasketBook);
	});
};

Pos.prototype.printReceip = function() {
	var bookCounts = [];
	this.basket.basketBooks.forEach(function(basketBook){
		bookCounts.push(basketBook.count);
	});

	var beforDiscountPay =  0;
	this.basket.basketBooks.forEach(function(basketBook){
		beforDiscountPay += basketBook.book.price * basketBook.count;
	});

	var saveMoney = this.discounter.getBigestSave(bookCounts) / 100;

	var receip = '------小龙书店------\n' +
			         '------购书清单------\n';

	this.basket.basketBooks.forEach(function(basketBook) {
		receip += '书名：' + basketBook.book.name +
		        	'，数量：' + basketBook.count +
		        	'本，单价：' + basketBook.book.price + '元\n';
	});

	receip += '--------结算--------\n' +
			      '原价:'+beforDiscountPay+'元\n' +
			      '实际支付(打折后):'+(beforDiscountPay-saveMoney) + '元	\n';

	return receip;
};

module.exports = Pos;