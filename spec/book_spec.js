'use strict';
var Book = require("../src/model/book.js");

describe("Book", function(){

	it("should have bookid name and price", function () {
		var book = new Book('1', '重构', 25.00);

		expect(book.bookid).toBe('1');
		expect(book.name).toBe('重构');
		expect(book.price).toBe(25.00);
	});

	describe("#find()", function () {
		it("should return book <<哈利波特-第一季>>", function () {
			var result = new Book('1', '哈利波特-第一季', 8.00);

			expect(Book.find('1')).toEqual(result);
		});
	});
});