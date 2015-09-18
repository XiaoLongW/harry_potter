'use strict';

function Book(bookid, name, price) {
  this.bookid = bookid;
  this.name = name;
  this.price = price;
}

Book.find = function(bookid) {
  var Util = require('./../helper/util.js');
  var allBooks = Util.loadAllBooks();

  var book;
  allBooks.forEach(function (oneBook) {
    if (oneBook.bookid == bookid) {
      book = oneBook;
    }
  });

  return book;
};

module.exports = Book;
