// MAXIMUM NUMBER........
let a=require("readline-sync");
let loop_time=a.question("Enter loop time ");
var maximum=0;
let list=[ ]
for (let i=1; i<=loop_time; i++){
  let number=a.question("Enter any number=" );
  list.push(number);
}
var maximum=list[0];
for (let j=0; j<list.length; j++){
  if (maximum < list[j]){
    [maximum=list[j]]
  }
}
console.log(maximum)
