//HOW DOES JS CODE EXCUTE + CALL SATCK 

// JAVASCRIPT EXCECUTION CONTEXT =

// GLOBEL EXCUTION CONTEXT (THIS VALUE)
//FUNCTION EXCUTION CONTEXT 

// EVAL EXCUTION CONTEXT GLOBEL OBJECT PROPERTY 

// PHASE
// MEMORY CREATION PHASE = VARIABLE THOSE DECLARED MEMORY ALLOCATED FOR THOSE ONLY
//EXCUTION PHASE 

let val1=10;
let val2=5;

function addnum(num1 , num2){
          let total =num1+num2
   return total
}
let result1 = addnum(val1, val2)
let result2 =addnum(10,2)

// 2) memory phase =  variable collected and stored

// val1= undefinde first 
// val2= also undefined

// addnum =defination function goes 
// addnum(num1 , num2){
//           let total =num1+num2 this 

// let result1 = addnum(val1, val2)
// let result2 =addnum(10,2) undefind

// first cycle end 


// 2) seconde cycle 

// excution phase 

// val1=10
// val2=5
// add num make another excutional context  
// new variable enviremente + excution thread 

// as the new excution context are ready that reasone repeated memorey creation phase and excution phase reapted it self 
// and those also delted after the work parat globel me jayga 


// CALL -STACK

// globel excution first 

// suppope take one() excuted in goes globel excution=and after remove it

// under function you call another function

// in globel excution one() add two() , three() which first goes out  
// so here last in first out method run 
