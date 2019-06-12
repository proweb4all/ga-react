"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.sponsors = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;

var calcCash = function calcCash(own, everyCash) {
  var total = own || 0;
  return everyCash.reduce(function (total, item) {
    return total + item;
  }, total);
};

var money = calcCash(null, sponsors.cash);
exports.money = money;