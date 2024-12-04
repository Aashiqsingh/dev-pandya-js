const lasvegas = (option)=>{
    console.log(option.fname + " You tour lasvegas with package " + option.amount);
    
}

const boston = (option)=>{
    console.log(option.fname + " You tour Boston with package " + option.amount);
    
}

const paris = (option)=>{
    console.log(option.fname + " You tour Paris with package " + option.amount);
    
}

const travel = (file,cb)=>{
    cb(
        {
            fname:"dev",
            amount:file,
            size:"1000kb"
        }
    )
}

var budget = 2001;
if(budget > 3000)
{
    travel(budget,lasvegas)
}
else if(budget > 2000)
{
    travel(budget,boston)
}
else if(budget > 1000){
    travel(budget,paris)
}