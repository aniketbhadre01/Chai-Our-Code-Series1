// singlton aur declare  with object  help ofcontructor

// const tinderuser = new Object()  singlton object
// it give you empty object {}

const tinderuser = {}; //this also give same output but this was non singlton obuject
tinderuser.id = "123abc";
tinderuser.name = "aniket bhader";
tinderuser.isloggedin = false;
//console.log(tinderuser);

const regularuser = {
  email: "aniketbhaadre@gmail.com",
  fullname: {
    username: {
      firstname: "aniket",
      lastname: " bhader",
    }
  }
};
console.log(regularuser.fullname.username.firstname)

const obj1 ={1: "a" ,2: "b"}
const obj2={3: "a" , 4: "b"}

//const obj3 =Object.assign({}, obj1 , obj2)
const obj3={...obj1,...obj2} //simple use spraed oprator
console.log(obj3);


