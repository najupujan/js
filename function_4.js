/* It is possible to have local and global variable with the same name
localvariable takes precident over the global variable
*/
var myName = "ramesh";
function namePrinter()
{
  var myName = "kamena";
  return myName;
}
console.log(namePrinter());
console.log(myName);
