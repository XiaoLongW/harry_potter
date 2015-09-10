'use strict';

function CartBook(book) {
	this.book = book;
	this.count = 1;
}

CartBook.prototype.find = function(cartBooks) {
	var o_this = this;
	var cartBook = undefined;

	cartBooks.forEach(function (oneCartBook) {
		if (oneCartBook.book.bookid == o_this.book.bookid) {
			cartBook = oneCartBook;
		}
	});
	return cartBook;
};

module.exports = CartBook;
