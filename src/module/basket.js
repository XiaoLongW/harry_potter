'use strict';

function Basket() {
	this.basketBooks = [];
}

Basket.prototype.addBasketBook = function(newBasketBook) {
	var basketBook = newBasketBook.find(this.basketBooks);
	if (basketBook) {
		basketBook.count += 1;
	} else {
		this.basketBooks.push(newBasketBook);
	}
};

Basket.prototype.getCounts = function() {
	var bookCounts = [];
	for(var x=0;x<5;x++){
		var count = 0;
		this.basketBooks.forEach(function(oneBasketBook){
			if(oneBasketBook.book.bookid == x+1){
				count = oneBasketBook.count;
			}
		});
		bookCounts[x] = count;
	}

	return bookCounts;
};

Basket.prototype.getTotalPay = function () {
	var totalPay =  0;
	this.basketBooks.forEach(function(oneBasketBook){
		totalPay += oneBasketBook.book.price * oneBasketBook.count;
	});

	return totalPay;
};

module.exports = Basket;