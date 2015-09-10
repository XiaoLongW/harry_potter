'use strict';
var BasketBook = require("../src/module/basket-book.js");
var Book = require("../src/module/book.js");

describe("BasketBook", function(){

	it("should have book and count", function () {
		var book = new Book('1', '哈利波特-第一季', 8.00);
		var basketBook = new BasketBook(book);

		expect(basketBook.book).toBe(book);
		expect(basketBook.count).toBe(1);
	});

	describe("#find()", function () {
		it("should not be found", function () {
			var book = new Book('1', '哈利波特-第一季', 8.00);
			var basketBook = new BasketBook(book);

			expect(basketBook.find([])).toBe(undefined);
		});

		it("should be found", function () {
			var book_1 = new Book('1', '哈利波特-第一季', 8.00);
			var basketBook_1 = new BasketBook(book_1);

			var book_2 = new Book('2', '哈利波特-第二季', 8.00);
			var basketBook_2 = new BasketBook(book_2);

			expect(basketBook_1.find([basketBook_1, basketBook_2])).toBe(basketBook_1);
		});
	});
});
