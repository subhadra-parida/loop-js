// MAGIC NUMBER OR NOT........
let a=require("readline-sync");
let num=a.question("Enter any number=");
for (i=1; i<=num; i++){
    if (num%9==1){
        console.log(num,"IS a magic number.")
    }
    else{
        console.log(num,"IS not a magic number.")
    }
}
