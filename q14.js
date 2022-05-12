// For this program you need to initialize with 50, and try to use decrement and run loop.
// Program may run like this. Everytime by using readline sync we will take an input.
// Koi bhi number daaliye > 10
// Koi bhi number daaliye > 16
// Koi bhi number daaliye > 9
// Koi bhi number daaliye > 10
// Koi bhi number daaliye > 56
// Koi bhi number daaliye > 78
// Koi bhi number daaliye > 98
// Koi bhi number daaliye > 43
// Koi bhi number daaliye > 21
// Koi bhi number daaliye > 76
let readline=require("readline-sync");
var number=readline.questionInt("Enter your time=")
i=0;
sum=0;
while (i<number){
    var number1=readline.questionInt("Koi bhi number daliye > ")
    sum=sum+number1;
    i++
console.log(sum)
}
