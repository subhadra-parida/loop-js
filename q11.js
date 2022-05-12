// Create a loop that takes 10 numbers as input from the user.
// Then for example 10+16+9+10+56+78+98+43+21+76.. Total sum of number 417


let readline=require("readline-sync");
var number=readline.questionInt("Enter your time=")
i=0;
sum=0;
while (i<number){
    var number1=readline.questionInt("Enter any number=")
    sum=sum+number1;
    i++
console.log(sum)
}

