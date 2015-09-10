'use strict';
var Basket = require("../src/module/basket.js");
var Book = require("../src/module/book.js");
var BasketBook = require("../src/module/basket-book.js");

describe("Basket", function(){

	var basket;
	beforeEach(function () {
		basket = new Basket();
	});

	it("should have basketBooks", function () {
		expect(basket.basketBooks).toEqual([]);
	});
	
	describe("#addBasketBook()", function () {
		it("basket's basketBooks should add one item", function () {
			var book = new Book('1', '哈利波特-第一季', 8.00);
			var basketBook = new BasketBook(book);
			basket.addBasketBook(basketBook);

			var result = [basketBook];

			expect(basket.basketBooks).toEqual(result);
		});
	});
});