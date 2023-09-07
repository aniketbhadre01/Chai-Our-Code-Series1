// scope let, const , var

// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);

// if (true) {
// let a = 10; // A is not define good thing 
// const b = 20; //b also not define 
// var c = 30; // but c is excuted that reasone var not use mainly 
// }


// suppose we take the function 

let a =300 
 
if(true){
let a = 10;  // function scope jise time tak under hai
const b = 20;
console.log("inner:", a);
}

console.log(a) // global scope out side off the bracket 

// inner: 10
// 300

// browesr right click check scope through node the scope is diffrent