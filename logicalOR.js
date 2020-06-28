
function logicalOR(num)
{
  if (num / 2 || num / 3)
  {
    return "The number is divisible by either 2 or 3 0r by both";
  }
  return "The number isn't divisible by 2 0r 3";
}
console.log(logicalOR(6))
