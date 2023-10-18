"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  if(d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  } else if(d === 0) {
    arr[0] = -b/(2*a);    
  }
  return arr;
}

console.log(solveEquation(5,-6,1));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let P = percent / 12 / 100;
  let S = amount - contribution;
  let paymentMonth = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let totalAmount = paymentMonth * countMonths;
  return Math.round(totalAmount * 100) / 100;
}

console.log(calculateTotalMortgage(10,1000,50000,12));