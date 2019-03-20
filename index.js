// Code your solution here!

let myString = 'pizza';
console.log(myString[0]);

 
myString = 'izza';
console.log(myString[0]);

 
myString = 'zza';



function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}