'use strict';
var CartBook = require('./cart-book.js');
var Book = require('./book.js');

function Scanner () {

}

Scanner.prototype.scan = function(bookid) {
	var book = Book.find(bookid);
	var cartBook = new CartBook(book);
	return cartBook;
};

module.exports = Scanner;