'use strict';

function Cart() {
	this.cartBooks = [];
}

Cart.prototype.addCartBook = function(newCartBook) {
	var cartBook = newCartBook.find(this.cartBooks);
	if (cartBook) {
		cartBook.count += 1;
	} else {
		this.cartBooks.push(newCartBook);
	}
};

module.exports = Cart;