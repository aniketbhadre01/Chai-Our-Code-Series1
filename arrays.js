//arrays declare

// const myArr=[0,1,2,3,4,5,true ,"aniket"]
// const myheros=["shaktiman" , "annabhau"]
//arryas is object those data type you can collection
//multiple store all elemente in it resizeble
//arrays not accesble using arbitary string

// right method to acess it = console.log(myArr[0]);
//zero base index

// suppose performe copy opration in javascript
// at that time  they make shallow copy or deeep copy
//shallow copy= shallow copy is the copy whose the
//sheare the same refrance as those source object

// deep copy= properities do not shear reafrance

// const myArr2 =new Array(1,2,3,4)
// console.log(myArr[1]);

//ARRAYS METHODES

const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes[3][1]);
// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// output will be get in the bracket on that time use folowing 
// get entry data from arrays
// use the concat as the marvel heroes 
// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);



// use the spread oprartor for tyhe join the and the shopwing with the all with concat


const allheroes=[...marvel_heroes,...dc_heroes]
//console.log(allheroes);
// output will be in the = [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array=[1,2,3,[4,5,6],7[6,7,[4,5,6]]]
const real_another_array =another_array.flat(Infinity);
console.log(real_another_array);

// data scrpaing use the most arrays as webbrowser 
console.log(Array.isArray("aniket"))
console.log(Array.from("aniket"))
console.log(Array.from({name:"aniket"}))//intresting case
//interview prospect ask the most 
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2,score3));
//.off return new arrays from the set of the arrys 

