/*Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function sum(a, b) {
  let result;

  a === b ? result = (a + b) * 3 : result = a + b

  return result;
}

console.log(sum(5, 5)); */

/*2)
Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

let checker = (a, b) => {
  let result;
  if (a === 50 || b === 50) {
    result = "true";
  } else if (a + b === 50) {
    result = "true";
  } else {
    result = "false";
  }

  return result;
}

console.log(checker(25, 25)) */

/* 3)
Write a JavaScript program to remove a character at the specified position of a given string and return the new string. 


let myName = "Hafeez"

console.log(myName.substring(1, 4))
console.log(myName.substring(1)) */

/* 4)
 Write a JavaScript program to find the largest of three given integers. 

 function largestInteger(a, b, c) {
   let result;

   if (a > b && a > c) {
     result = "a:" + " " + a;
   } else if ( b > c && b > a ) {
     result = "b" + " " + a;
   } else if (c > b && c > a ) {
     result = "c" + " " + c;
   } else {
     result = "the same"
   }

   return result;
 }

 console.log(largestInteger(10, 20, 30)) */

 /* 5)
Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive. */