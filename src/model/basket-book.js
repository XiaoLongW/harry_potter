'use strict';

function BasketBook(book) {
	this.book = book;
	this.count = 1;
}

BasketBook.prototype.find = function(BasketBooks) {
	var o_this = this;
	var BasketBook = undefined;

	BasketBooks.forEach(function (oneBasketBook) {
		if (oneBasketBook.book.bookid == o_this.book.bookid) {
			BasketBook = oneBasketBook;
		}
	});

	return BasketBook;
};

module.exports = BasketBook;
