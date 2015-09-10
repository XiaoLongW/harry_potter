'use strict';
var BasketBook = require('./basket-book.js');
var Book = require('./book.js');

function Scanner () {

}

Scanner.prototype.scan = function(bookid) {
	var book = Book.find(bookid);
	var basketBook = new BasketBook(book);
	return basketBook;
};

module.exports = Scanner;