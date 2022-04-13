'use strict';
function solveEquation(a, b, c) {
  let arr = [];
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
  date = new Date(date) - new Date();
  percent = +percent;
  if (isNaN(percent)) {
    console.log (`Параметр "percent" содержит неправильное значение ${percent}`);
     }
  contribution = +contribution;
  if (isNaN(contribution)) {
    console.log (`Параметр "contribution" содержит неправильное значение ${contribution}`);
     }
  amount = +amount;
  if (isNaN(amount)) {
    console.log (`Параметр "amount" содержит неправильное значение ${amount}`);
     }
  date = +date;
  if (isNaN(date)) {
    console.log (`Параметр "date" содержит неправильное значение ${date}`);
     }
  let s = amount - contribution;
  let n = Math.ceil(date / (24*3600*1000*30.5));
  let p = (1/12)*(percent/100);
    //console.log(s);
    //console.log(n);
    //console.log(p);
  let monthPayment = s * (p + (p/(((1+p)**n)-1)));
    //console.log(monthPayment);
  totalAmount = Number((monthPayment * n).toFixed(2));
    //console.log(totalAmount);

  return totalAmount;
}
