// Code your solution here!

let myString = 'pizza';
console.log(myString[0]);

 
myString = 'izza';
console.log(myString[0]);

 
myString = 'zza';

function printString(string) {
  let substring;
 
  // Print out the current first character in the string.
  console.log(string[0]);
 
  // Store the remainder of the string in the 'substring' variable.
  substring = string.substring(1, string.length);
 
  // Invoke printString() from within, passing in the remainder of the previous string.
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