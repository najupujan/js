function projectOne(num) {
  if (num == 0) {
    return "zero";
  } else if (num <= -1) {
    return "negative";
  } else if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "medium";
  } else if (num < 20) {
    return "large";
  } else if (num >= 20) {
    return "huge";
  }
}
console.log(projectOne(20));
