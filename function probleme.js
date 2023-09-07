// function calculatecartprice(...num1){
//    return num1
// }

// console.log(calculatecartprice(200,400,500))

//online shoping cart logic spraed oprator...rest oprator

// interview procpect imp question

function valueofthecart(val1, val2, ...num1) {
  return num1;
}
console.log(valueofthecart(200, 300, 400, 500));
//[ 400, 500 ] why this value show
// 200 goes on val1 ,300 goes on val2 , other rest come formate arrya


// object pass
const user = {
  username: "aniket",
  price: "199",
};
function handleobject(anyobject) {
  console.log(`usernameis${anyobject}`, `price is${anyobject.price}`);
}

handleobject(user);


// Array pass


const mynewarrays =[200,300,400,500]

function returnsecondvalue(getarray){
          return getarray[1]
}

console.log(returnsecondvalue(mynewarrays));