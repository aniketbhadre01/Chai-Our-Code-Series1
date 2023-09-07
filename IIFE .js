// immeditely invoked function expressions (IIFE)

// immeditely excutive function

// from globel scope scope pollute that reasone use iife

// function chai() {
//   console.log(`db connected`);  normal function written as
// }
// chai();

// (function chai() {
//   console.log(`connecting db`);
// })()()();

// globel scope pollution se problem hoti hai kai baar globel scope ke variable hai or decleration ke poolution ko hatane ke liye IIFE use kiya

// arrow function

// (function chai() {
//   console.log(`say jay lahuji`);

// })();  //END KARNA IS MOST IMP

// ( function aurcode()  {
//           console.log(`DB CONNECTED TWO`);
// }) ();

((name) => {
  console.log(`DBconnected two ${name}`);
})(`hitesh`);
 // EXAMPLE UNNAMED IIFE 


//   ( 
//           function name is IIFE 
//  )

