'use strict';
var Discounter = require("../src/module/discounter.js");//应该是model而不是module，一个是模型，一个是模块

//测试用例太少
describe("Discounter", function(){
	var discounter;
	beforeEach(function () {
		discounter = new Discounter();
	});

	it("should have rate", function () {
		expect(discounter.rate).toEqual([25, 20, 10, 5, 0]);
	});

	describe("#disCount()", function () {
		it("should return is 0", function () {
			var books = [1, 0, 0, 0, 0];
			var totalPay = 1 * 8;
			expect(discounter.discount(books, 8)).toBe(8);
		});

		it("should return is 0.8", function () {
			var books = [1, 1, 0, 0, 0];
			var totalPay = 2 * 8;
			expect(discounter.discount(books, totalPay)).toBe(15.2);
		});

		it("should return is 2.4", function () {
			var books = [1, 1, 1, 0, 0];
      var totalPay = 3 * 8;//为什么这个往前缩了？
			expect(discounter.discount(books, totalPay)).toBe(21.6);
		});

		it("should return is 6.4", function () {
			var books = [1, 1, 1, 1, 0];
			var totalPay = 4 * 8;
			expect(discounter.discount(books, totalPay)).toBe(25.6);
		});

		it("should return is 10", function () {
			var books = [1, 1, 1, 1, 1];
			var totalPay = 5 * 8;
			expect(discounter.discount(books, totalPay)).toBe(30);
		});


		//我给你写了一个会废的测试，但是我没搞明白为什么他会死循环。
		it("should return is 12.8", function () {
			var books = [12, 12, 12, 6, 6];
			var totalPay = (12+12+12+6+6) * 8;
			expect(discounter.discount(books, totalPay)).toBe(48*(8*(1-0.20)));
		});
	});


});