function demo(){
    console.log("Demo function called..");
    
}

function test(x)
{
    // console.log(x);
    x()
    
}

// test(10)
// test("ram")
// test(12.3)
// test(true)

test(demo)