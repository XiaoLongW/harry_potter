'use strict';
var __ = require('underscore');
var _ = require('lodash');

function Discounter (totalPay) {
  this.rate = [25, 20, 10, 5, 0];
  this.totalType = totalPay;
}

Discounter.prototype.discount = function(bookCounts,totalMoney) {
  var saveMax = this.getBigestSave(bookCounts) / 100;
  var afterDiscounterPay = totalMoney - saveMax;
  return afterDiscounterPay;
};

Discounter.prototype.getSaveArray = function(bookCounts, bookCountsBackup, saveMoneys) {
  for(var i = 1; i <= this.totalType; i++) {
    if(bookCounts[this.totalType - i] >= 1) {
      for(var k = 0; k < this.totalType; k++) {
        bookCountsBackup[k] = bookCounts[k];
      }

      for(var j = 0; j <= this.totalType - i; j++) {
        bookCountsBackup[j] = bookCountsBackup[j] - 1;
      }

      saveMoneys[i - 1] = (this.totalType - i + 1) * 8 * this.rate[i - 1] + this.getBigestSave(bookCountsBackup);
    }
  }
};

Discounter.prototype.getBigestSave = function(bookCounts) {
  var bookCountsBackup = [];
  var saveMoneys = [];
  for(var i=0; i < this.totalType; i++) {
    saveMoneys[i] = 0;
  }

  if(_.every(bookCounts,0)) {
    return 0;
  }

  bookCounts.sort(function(a, b) {
    return b - a;
  });

  this.getSaveArray(bookCounts, bookCountsBackup, saveMoneys);

  return __.max(saveMoneys, function(maxSave){
    return maxSave;
  });
};

module.exports = Discounter;
