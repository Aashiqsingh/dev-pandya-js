var language = ["hindi","marathi","gujarati","english","punjabi","french","tamil"];


// filter : it will return new array with modified data

// var x = language.filter((lang)=>{
//     return lang.startsWith("e")
// })

// console.log(x);


// filter : data delete 

var deleteLang = "punjabi";

var x = language.filter((lang)=>{
    return lang != deleteLang;
})

console.log(x);

// console.log(language);



