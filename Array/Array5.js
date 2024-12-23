var language = ["hindi","marathi","gujarati","english","punjabi","french","tamil"];


language.forEach((language)=>{
    if(language.includes("i")){
        console.log(language);
        
    }
    
})


// map : it will return new array with same length 


var x = language.map((lang)=>{
    return lang.includes("i")
})

console.log(x);



// var x = language.map((lang)=>{
//     return lang.toUpperCase()
// })

// console.log(x);
