"use strict";

const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

function myGetPositiveIncomeAmount(arr) {
  let sum = 0;
  arr.forEach(item => {
    if (item.amount > 0) sum += item.amount;
  });

  return sum;
}

function myGetTotalIncomeAmount(arr) {
  if (arr.some(item => item.amount < 0)) {
    let sum = 0;
    arr.forEach(item => sum += item.amount);
    return sum;
  } else {
    getPositiveIncomeAmount(arr);
  }
}

const getPositiveIncomeAmount = (data) => {
  return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
};

const getTotalIncomeAmount = (data) => {
  return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
};

// console.log(getPositiveIncomeAmount(funds));
// console.log(getTotalIncomeAmount(funds));
