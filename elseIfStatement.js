function elseIftest(num) {
  if (num >= 1) {
    return "The given value is positive";
  } else if (num <= -1) {
    return "The given number is negative";
  } else {
    return "The given number is zero";
  }
}
console.log(elseIftest(1));
