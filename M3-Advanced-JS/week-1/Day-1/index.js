/*
//let animalsArray = [];

//pre-populated array

const animalsArray = ["dog", "cat", "snake"];



// Accessing the last element of the array

const lastElement = animalsArray.length - 1;
console.log(lastElement)

// Adding Elements to the end of an array

animalsArray.push("parrot");
console.log(animalsArray);

// Adding element to the beginning of an array

animalsArray.unshift("Lion");
console.log(animalsArray);

//updating an array

animalsArray[2] = "Duck"
console.log(animalsArray);

//removing element from the end of an Array

animalsArray.pop();
console.log(animalsArray);

//removing element from the beginning of an array

animalsArray.shift();
console.log(animalsArray);

//another way of removing using the delete

delete animalsArray[3];
console.log(animalsArray); 

const myAnimalArray = ["dog", "cat", "fish", "lizard", "whale", "cheetah"];

for (let i = 0; i<myAnimalArray.length; i++)
console.log(myAnimalArray[i]);

const myAnimalArray = ["dog", "cat", "fish", "lizard", "whale", "cheetah"];

myAnimalArray.forEach(function(animal){
  console.log(animal)
})

console.log(myAnimalArray); 


let human = {
  name: "hafeez",
  age: 25,
  sex: "male",
  status: "single",
}

human.education = "masters"

human.status = "in a relationship"

delete human.sex;

Object.keys(human);

console.log(Object.keys(human)) 


let human = {
  name: "hafeez",
  age: 25,
  sex: "male",
  status: "single",
}

for (let i in human) {
  console.log(i)
} 

// Verify if a key is in an object 

console.log("name" in human) */

let books = [
  {
    title: "Eloquent Javascript",
    author: 'Marijn Haverbeke',
  },

  {
    title: "Think and grow rich",
    author: "Napoleon hill"
  }

]

console.log(books[1].title)