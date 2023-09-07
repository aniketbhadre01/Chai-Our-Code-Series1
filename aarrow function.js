const user = {
  username: "aniket",
  price: "999",

  welcomemessage: function () {
    console.log(`${this.username}, welcome to website`);
  },
};

// user.welcomemessage();
// user.username = "sam"; // user name change sam current context =mean value
// user.welcomemessage();
//console.log(this); aap jise time node me hai tab tak apka this reafer empty brace

//  before the browser is the one of the one thing use in the excuted

// search engine stand alone  use dinojs , node

// in the browser globel object is window object  that reasone we are the capture all of the evente of the window click ,find , feactch

// function chai(){
// let username= "aniket"
// console.log(this.username)

// console.log(this) //print inside the function using node
// }

// chai()

// function and arrow function
const chai = () => {
  let username = "aniket";
  console.log(this.username);
};

// chai();

// arrow function

() => {};

const addtwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addtwo(3, 4));

// implicite  return function

// const addtwo = (num1,num2) => (num1+num2)
// console.log(addtwo(3,4))


