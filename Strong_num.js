const n=require("readline-sync");
var num=n.question("enter any number= ");
temp=num
sum=0
rem=0
while (num>0){
    fact=1
    i=1
    rem=num%10
    while (i<=rem){
        fact=fact*i
        i++
    }
    sum=sum+fact
    num=num.math.floor10;
    if (sum==temp){
        console.log(temp,"Is a strong number.")
    }
    else{
        console.log(temp,"Is not a strong number.")
    }
}