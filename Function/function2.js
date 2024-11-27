function add(a,b,c)
{
    return a + b + c;
}

function sub(a,b)
{
    console.log("Subtrcat = ",a-b);
    
}

function mul(x,y)
{
    return x * y;
}

function div()
{
    let num1 = 12;
    let num2 = 5;

    console.log("Divide = ",num1/num2);
    
}

var choice = parseInt(prompt("1 for Add \n2 for sub \n3 for mul \n4 for div \n\n\n Enter your choice"))

switch(choice){

    case 1:
        let a = parseInt(prompt("Enter first number "))
        let b = parseInt(prompt("Enter second number "))
        let c = parseInt(prompt("Enter third number "))
        let x = add(a,b,c)
        console.log("Addition = ",x);
        break;

    case 2:
        sub(10,5);
        break;

    case 3:
        console.log("Multiplication = ",mul(6,5));
        break;

    case 4:
        div();
        break;

    default:
        console.log("Invalid choice");

    
        
        
}