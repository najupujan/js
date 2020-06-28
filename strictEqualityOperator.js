/*
3 === 3 true
3 === '3' false
*/
function testFunction(val)
{
  if (val === 10)
  {
    return "value is ten";
  }
  return "value isn't ten";
}
console.log(testFunction(10))
