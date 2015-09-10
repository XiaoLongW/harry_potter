'use strict';
var CartBook = require("../src/cart-book.js");
var Book = require("../src/book.js");

describe("Book", function(){

	it("should have book and count", function () {
		var book = new Book('1', '哈利波特-第一季', 8.00);
		var cartBook = new CartBook(book);

		expect(cartBook.book).toBe(book);
		expect(cartBook.count).toBe(1);
	});

	describe("#find()", function () {
		it("should not be found", function () {
			var book = new Book('1', '哈利波特-第一季', 8.00);
			var cartBook = new CartBook(book);

			expect(cartBook.find([])).toBe(undefined);
		});

		it("should be found", function () {
			var book_1 = new Book('1', '哈利波特-第一季', 8.00);
			var cartBook_1 = new CartBook(book_1);

			var book_2 = new Book('2', '哈利波特-第二季', 8.00);
			var cartBook_2 = new CartBook(book_2);

			expect(cartBook_1.find([cartBook_1, cartBook_2])).toBe(cartBook_1);
		});
	});
});
