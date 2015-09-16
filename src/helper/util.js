'use strict';
var Book = require('../model/book.js');

function Utils() {

}

Utils.loadAllBooks = function() {
	return [
		new Book('1', '哈利波特-第一季', 8.00),
		new Book('2', '哈利波特-第二季', 8.00),
		new Book('3', '哈利波特-第三季', 8.00),
		new Book('4', '哈利波特-第四季', 8.00),
		new Book('5', '哈利波特-第五季', 8.00)
	];
};

module.exports = Utils;