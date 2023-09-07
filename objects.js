

//objects declear by the 2 method 1.litral 2.constractor

//singleton = made from the constractor make singalton 

//actual declare use litrals singlton not form 


Object. litrals = declartaion 
const mysum= Symbol("key1")// symmbol
const jsuser ={
          name:"aniket", //key and value 
          age: 23,
          [mysum]:"mykey1",
          location:"parbhani",
          email:"aniketbhadre777@gmail.com",
          isloogedin : false ,
          lastloginidays:["monday" ,"saturday"]
}
//object 
// console.log(jsuser.email);
// console.log(jsuser[email]); 
// console.log(jsuser[mysym]);

// jsuser.email= "aniketbhadre55@gmail.com" // change the value of the email 
// Object.freeze(jsuser)
// jsuser.email="aniketbhadre55gmail.com"
// console.log(jsuser);

// const jsuser=["hello js user"]

jsuser.greeting=function(){
          console.log("hello js usere")
}
jsuser.greetingtwo = function(){
          console.log("hello js user" `${this.name}`);

 console.log(jsuser.greeting());
 console.log(jsuser.greetingtwo());         
}