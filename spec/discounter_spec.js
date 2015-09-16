'use strict';
var Discounter = require("../src/model/discounter.js");

describe("Discounter", function(){
	var discounter;
	beforeEach(function () {
		discounter = new Discounter(5);
	});

	it("should have rate", function () {
		expect(discounter.rate).toEqual([25, 20, 10, 5, 0]);
	});

	describe("#disCount()", function () {
		it("should return is 8", function () {
			var books = [1, 0, 0, 0, 0];
			var totalPay = 1 * 8;
			expect(discounter.discount(books, totalPay)).toBe(8);
		});

		it("should return is 15.2", function () {
			var books = [1, 1, 0, 0, 0];
			var totalPay = 2 * 8;
			expect(discounter.discount(books, totalPay)).toBe(15.2);
		});

		it("should return is 21.6", function () {
			var books = [1, 1, 1, 0, 0];
      var totalPay = 3 * 8;
			expect(discounter.discount(books, totalPay)).toBe(21.6);
		});

		it("should return is 25.6", function () {
			var books = [1, 1, 1, 1, 0];
			var totalPay = 4 * 8;
			expect(discounter.discount(books, totalPay)).toBe(25.6);
		});

		it("should return is 30", function () {
			var books = [1, 1, 1, 1, 1];
			var totalPay = 5 * 8;
			expect(discounter.discount(books, totalPay)).toBe(30);
		});

		it("should return is 51.2", function () {
			var books = [2, 2, 2, 1, 1];
			var totalPay = 8 * 8;
			expect(discounter.discount(books, totalPay)).toBe(51.2);
		});
	});


});