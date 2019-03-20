// Code your solution here!

let myString = 'pizza';
console.log(myString[0]);

 
myString = 'izza';
console.log(myString[0]);

 
myString = 'zza';

function printString(string) {
  let substring;
 
 
  console.log(string[0]);
 
 
  substring = string.substring(1, string.length);
 
  
  printString(substring);
}
 
printString("pizza");


function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}