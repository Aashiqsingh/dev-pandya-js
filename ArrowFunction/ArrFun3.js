const pngHandler = (option)=> option + " file submission is correct"


const jpgHandler = (option)=>  option + " file submission is correct"

const gifHandler = (option)=> option + " file submission is correct"



var file = "abc.gif";
var flag;
if(file.endsWith(".jpg")){
    flag = jpgHandler(file)
}
else if(file.endsWith(".png")){
    flag = pngHandler(file)
}
else if(file.endsWith(".gif")){
    flag = gifHandler(file)
}
console.log(flag);
