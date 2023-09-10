 const coding = ["javascript", "pythone", "java", "rubey"];

coding.forEach(function (item) {
  console.log(item);
});

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const mynum=[1,2,3,4,5,6,7,8,9]

const newnums = mynum.filter((num)=>{
return num > 4
})

console.log(newnums);
// whwen you oprn scope always use the return keyword