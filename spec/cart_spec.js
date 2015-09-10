'use strict';
var Cart = require("../src/cart.js");
var Book = require("../src/book.js");
var CartBook = require("../src/cart-book.js");

describe("Cart", function(){

	var cart;
	beforeEach(function () {
		cart = new Cart();
	});

	it("should have cartBooks", function () {
		expect(cart.cartBooks).toEqual([]);
	});
	
	describe("#addCartBook()", function () {
		it("cart's cartBooks should add one item", function () {
			var book = new Book('1', '哈利波特-第一季', 8.00);
			var cartBook = new CartBook(book);
			cart.addCartBook(cartBook);

			var result = [cartBook];

			expect(cart.cartBooks).toEqual(result);
		});
	});
});