function one() {
  const username = "aniket";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  two(); // call
}
one();

if (true) {
  const username = "aniket";
  if (username === "aniket") {
    const website = "youtube";
//     console.log(username+website)
  }
//   console.log(website)// not acces beacuase out off scope 
 }
// console.log(username); //user name also output scope 





// imp question 
console.log(addone(5))
function addone(num){ //function 
return num+1
}

//function is declare hold in variable addtwo
console.log(addone(5))
const addtwo =function(num){ //function 
          return num +2
}