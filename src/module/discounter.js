'use strict';

function Discounter () {
	this.rate = [25, 20, 10, 5, 0];
}

Discounter.prototype.discount = function(bookCounts,totalMoney) {
	var saveMoney = this.getBigestSave(bookCounts) / 100;
	var afterDiscounterPay = totalMoney - saveMoney;
	return afterDiscounterPay;
};
//函数太长
Discounter.prototype.getBigestSave = function(bookCounts) {
	var bookCountsBackup = [];//叫backup不能让人理解到底是干嘛的
	var saveMoney = [];
	for(i=0; i<5; i++) {
		saveMoney[i] = 0;
	}

	if(!bookCounts[0] && !bookCounts[1] && !bookCounts[2] && !bookCounts[3] && !bookCounts[4]) {
		return 0;
	}//这是一个every，参见：https://lodash.com/docs#every

	bookCounts.sort(function(a, b) {
		return b - a;
	});//为什么要sort一下？

	for(var i = 1; i <= 5; i++) {//为啥循环5遍？
		if(bookCounts[5-i] >= 1) {//5就是一个magic number， magic number用的太多了。这里用了4个5。是一个含义吗?是一个含义为什么不抽个变量出来表明他的含义？
			for(var k = 0; k < 5; k++) {
				bookCountsBackup[k] = bookCounts[k];
			}

			for(var j = 0; j <= 5 - i; j++) {
				bookCountsBackup[j] = bookCountsBackup[j] - 1;
			}

			saveMoney[i - 1] = (5 - i + 1) * 8 * this.rate[i - 1] + this.getBigestSave(bookCountsBackup);//这个递归还真是让人难以在脑子里模拟是怎么运算的。
		}
	}

	return Math.max.apply(null, saveMoney);//用法太trickey了，不到万不得已不要用apply和call，你可以用underscore的max替代Math.max
};

module.exports = Discounter;