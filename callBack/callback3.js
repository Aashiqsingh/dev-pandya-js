function add(a,b)
{
    return "Addition = " + (a+b)
    
}

function subtract(a,b){
    return "Subtraction = " + a-b
}

function multiply(a,b){
    return "Multiplication = " + a*b
}

function divide(a,b){
    return "divide = ",a/b
    
}

// cb -- callback 
function addCall(x,y,cb){
    // var x = cb(x,y)
    // console.log(x);

    return cb(x,y);
    
}

var a = 10;
var b = 8;

var x = addCall(a,b,add)
console.log(x);
