const pngHandler = (option)=>{
    return option + " file submission is correct"
}

const jpgHandler = (option)=>{
    return option + " file submission is correct"
}

const gifHandler = (option)=>{
    return option + " file submission is correct"
}


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
