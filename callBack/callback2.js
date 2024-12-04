function add(a,b)
{
    console.log("Addition = ",a+b);
    
}

function subtract(a,b){
    console.log("Subtraction = ",a-b);
}

function multiply(a,b){
    console.log("Multiplication = ",a*b);
}

function divide(a,b){
    console.log("divide = ",a/b);
    
}

// cb -- callback 
function addCall(x,y,cb){
    cb(x,y)
}

var a = 10;
var b = 8;

addCall(a,b,subtract)