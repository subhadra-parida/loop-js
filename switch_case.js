// var a=require("readline-sync");
// let month=a.question("Enter any number=");

let readline=require("readline-sync");
var month=readline.questionInt("Enter any number=")

switch (month%2==0){
    case "true":
        console.log("You can work.")
        break
    case "false":
        console.log("You can't work.")
        break
}

