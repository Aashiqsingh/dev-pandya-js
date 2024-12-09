const jpgHandler = (option)=>{

    return option.fname + " Jpg file handling " + option.size
    
}

const pngHandler = (option)=>{
    return option.fname+" Png file handling "+option.size
}

const gifHandler = (option)=>{
    return option.fname + " Gif file handling " + option.size
}

const pdfHandler = (option)=>{
    return option.fname + " Pdf file handling " + option.size
}

const Handler = (file,cb)=>{
    return cb({fname:file,size:"1000kb"})
    
}

var fileName = "xyz.png";
var flag;
if(fileName.endsWith("jpg"))
{
    flag = Handler(fileName,jpgHandler)
}
else if(fileName.endsWith(".png")){
    flag = Handler(fileName,pngHandler)
}
else if (fileName.endsWith(".gif")){
    flag = Handler(fileName,gifHandler)
}
else if(fileName.endsWith(".pdf")){
    flag = Handler(fileName,pdfHandler)
}

console.log(flag);
