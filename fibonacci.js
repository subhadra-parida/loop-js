// FIBONACCI NUMBER
let a=require("readline-sync");
let num=a.question("Enter any number=");
a=0
b=1
c=a+b
while (c<=num){
    console.log(c);
    a=b;
    b=c;
    c=a+b
}