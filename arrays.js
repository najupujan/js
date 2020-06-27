var ourArray = ["ramdai", "rameshdai", 4.3, 4];
console.log(ourArray);
console.log(ourArray[1]);
var nestedArray = [
  ["hari", 3],
  ["ramesh", 4]
];
console.log(nestedArray);
nestedArray[1] = ["ramdai", "rameshdai", 4.3, 4];
console.log(nestedArray);
var superNested = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [
    [10, 11, 12], 13, 14,
  ]
]
var myDate = superNested[0][1];
console.log(myDate);
superNested.push(["dog", "cat", "deer"]); //same as append(python) in list
console.log(superNested);
var lastRemovedData = superNested.pop(); //remove the last data
console.log(lastRemovedData);
var firstRemovedData = superNested.shift(); //remove the first element
console.log(firstRemovedData);
superNested.unshift(["door", "window", "brick"]);
console.log(superNested);
