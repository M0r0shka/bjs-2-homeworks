'use strict';
function solveEquation(a, b, c) {
  let arr;
  arr = [];
  let d = Math.pow(b,2)-4*a*c;
  if (d === 0) {
      arr[0] = -b/(2*a);
  } else if (d > 0) {
      arr[0] = (-b + Math.sqrt(d))/(2*a);
      arr[1] = (-b - Math.sqrt(d))/(2*a);  
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
 /* date = new Date(date) - new Date();
  let arguments = [percent, contribution, amount, date];
  for (i = 0; i < arguments.length; i = i + 1) {
    arguments[i] = +arguments[i];
    if ((arguments[i]) = 'NaN' ) {
    console.log (`Параметр ${arguments.indexOf(arguments[i])} содержит неправильное значение ${arguments[i]}`);
    }
  }
  let s = arguments[2] - arguments[1];
  let n = date / (24*3600*1000*30);
  let p = (1/12)*(arguments[0]/100);
  let monthPayment = s * (p + (p/(((1+p)**n)-1)));
  totalAmount = (monthPayment * n).toFixed(2);
  console.log(totalAmount); */

  return totalAmount;
}
