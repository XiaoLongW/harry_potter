'use strict';

function Discounter () {
	this.rate = [25, 20, 10, 5, 0];
}

Discounter.prototype.discount = function(bookCounts,totalMoney) {
	var saveMoney = this.getBigestSave(bookCounts) / 100;
	var afterDiscounterPay = totalMoney - saveMoney;
	return afterDiscounterPay;
};

Discounter.prototype.getBigestSave = function(bookCounts) {
	var bookCountsBackup = [];
	var saveMoney = [];
	for(i=0; i<5; i++) {
		saveMoney[i] = 0;
	}

	if(!bookCounts[0] && !bookCounts[1] && !bookCounts[2] && !bookCounts[3] && !bookCounts[4]) {
		return 0;
	}

	bookCounts.sort(function(a, b) {
		return b - a;
	});

	for(var i = 1; i <= 5; i++) {
		if(bookCounts[5-i] >= 1) {
			for(var k = 0; k < 5; k++) {
				bookCountsBackup[k] = bookCounts[k];
			}

			for(var j = 0; j <= 5 - i; j++) {
				bookCountsBackup[j] = bookCountsBackup[j] - 1;
			}

			saveMoney[i - 1] = (5 - i + 1) * 8 * this.rate[i - 1] + this.getBigestSave(bookCountsBackup);
		}
	}

	return Math.max.apply(null, saveMoney);
};

module.exports = Discounter;