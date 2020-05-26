/*
NUMBER 1 ---- GLOBAL SCOPING YOUR VARIBLE THEN USING IT AS A PARAMETER AND ARGUMENT IN YOUR FUNCTION

let a = 5;
let b = 6;

const sum = () => {
  var result;
  result = a+b;
  return result;
}

console.log(sum())


//NUMBER 1B

const sum = (a,b) => {
  var result;
  result = a+b;
  return result;
}

console.log(sum(5,6));



//NUMBER 2

const checkForInteger = (a, b) => {
  if ((a === 50 || b === 50) || a+b === 50) {
    console.log("true")
  } else {console.log(false)}
}
console.log(checkForInteger(30, 20))



//NUMBER 3

const removeLetter = (a) => {
  let result;
  let myName = a;
  result = myName.substring(1, 3)
  return result;
} 
console.log(removeLetter("hafeez"))



//NUMBER 4 

const largestInteger = (a,b,c) => {
  if (a > b && a > c) {
    console.log(`a - ${a} is larger`)
  } else if (b > a && b > c) {
    console.log(`b - ${b} is larger`)
  } else if (c > a && c > b) {
    console.log(`c - ${c} is larger`)
  }
}
  console.log(largestInteger(20,30,40))


//NUMBER 5

const range = (a, b) => {
  if (a >= 40 && a <= 60 || a >= 70 && a <= 100) {
    console.log(true)
  } else {
    console.log(false)
  }

  if (b >= 40 && b <= 60 || b >= 70 && b <= 100) {
    console.log(true)
  } else {
    console.log(false)
  }
}

console.log(range(40, 75));


//NUMBER 6

const newString = (string) => {
  let result;
  result = string.substring(2);
  return result + result + result + result;
}

console.log(newString("hafeezy"))



//NUMBER 7

const newString = (string) => {
  if(string.substring(0, 3) === "Los" ||string.substring(0,3) === "New") {
    console.log(string)
  } else {
    console.log("blank")
  }
}

console.log(newString("Nigeria"))


//NUMBER 8
let newArray = [27, 47, 67]; 

const sum = (a, b, c) => {
  let result; 
  result = a+b+c;
  return result;
} 

console.log(sum(newArray[0], newArray[1], newArray[2]))

*/

//NUMBER 9

let array = [
  45,
  22
]

const testArray = () => {
  for (let i = 0; i<array.length; i++) {
    if (array[i]=== 1 || array[i] === 3) {
      console.log("true")
    } else {
      console.log("false")
    }
  }
    
}

console.log(testArray())



