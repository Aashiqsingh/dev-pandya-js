function lasvegas(amount,fname){

    return fname + " your picnic confirm in lasvegas with package " + amount
}

function singapore(amount,fname){
    return fname + " your picnic confirm in singapore with package " + amount
}

function tokyo(amount,fname){
    return fname + " your picnic confirm in tokyo with package " + amount
}

function goa(amount,fname){
    return fname + " your picnic confirm in goa with package " + amount
}

var budget = 3000;
var first_name = "Dev"
var flag;

if(budget > 3500)
{
    flag = lasvegas(budget,first_name)
}
else if(budget > 3000)
{
    flag = singapore(budget,first_name)
}
else if(budget > 2500)
{
    flag = tokyo(budget,"aashiq")
}
else if(budget > 2000)
{
    flag = goa(budget,first_name)
}
else{
    console.log("Not enough money for a picnic in any of these locations.")
}
console.log(flag);
