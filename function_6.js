/*
understanding undefined value returned from a Function
Function return undefined if we donot specify return
*/
var number = 5;

function numberCalculator() {
  number += 10;
}
console.log(numberCalculator());
