import { questionInt, question } from "readline-sync";
import { Calculator } from "./calculator";
console.log("Hello User!");
while (true){
    let a=questionInt("first number:   ");
    let b=questionInt("second number:   ");
    let operation=question("operation choose one of them: '+', '-', '*', '/',  :");
    let cal=new Calculator(a,b);
    if (operation=="+"){
        console.log( cal.add());
    }
    else if(operation=="-"){
        console.log(cal.minus());
    }


    else if(operation=="*"){
        console.log(cal.multiply());
    }

    else if(operation=="/"){
        console.log(cal.divide());
    }
    else{
        console.log("you wrote incorrect operation!!!   :");
    }

    let ok=question("Do you want to continue Calculator App ('yes'/'not'?    :");
    if (ok=="no"){
        break
    }

}