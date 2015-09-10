'use strict';

function Basket() {
	this.basketBooks = [];
}

Basket.prototype.addBasketBook = function(newBasketBook) {
	var basketBook = newBasketBook.find(this.basketBooks);
	if (basketBook) {
		basketBook.count += 1;
	} else {
		this.basketBooks.push(newBasketBook);
	}
};

module.exports = Basket;