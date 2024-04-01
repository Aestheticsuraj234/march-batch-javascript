// // rest operator 
// function sum(...others){
//     return others.reduce((acc,curr) => acc + curr);
// }

// console.log(sum(1,2,3,4,5,6,7,8,9)); // 6


// let array = [1,2,3,4,5,6,7,8,9 , 10];

// let [a,b,c , ...restData] = array


// const person = {
//     name: 'John',
//     age: 30,
//     country: 'USA',
//     profession: 'Engineer'
//   };
 
// //   console.log(person.age);

// const {name , age , country} = person;

// const {...others} = person

// console.log(others);


// // console.log("UserData:" , names , age , country);



// *spread operator

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];


// const arr3 = [...arr1 , ...arr2];

// console.log(arr3);


// const original = [1, 2, 3];
// const copy = [...original];
// console.log(copy); // Output: [1, 2, 3]\


// function multiply(x, y, z) {
//     return x * y * z;
//   }
  
//   const args = [2, 3, 4];
//   console.log(multiply(...args)) // Output: 24

  const original = { x: 1, y: 2 };
const clone = { ...original};
console.log(clone); // Output: { x: 1, y: 2 }