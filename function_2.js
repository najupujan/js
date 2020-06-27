var myGlobalVar = 10;

function fun1() {
  oopsGLobal = 5;
}

function Checker() {
  var output = "";
  if (typeof myGLobalVar != "undefined") {
    output += "My globalvaris " + myGlobalVar;

  }
  if (typeof oopsGLobal != "undefined") {
    output += "My oopsGlobal " + oopsGLobal;

  }
  console.log(output);
}
Checker();
