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
    var x = cb({fname:file,size:"1000kb"})
    console.log(x);
    
}

var fileName = "xyz.png";

if(fileName.endsWith("jpg"))
{
    Handler(fileName,jpgHandler)
}
else if(fileName.endsWith(".png")){
    Handler(fileName,pngHandler)
}
else if (fileName.endsWith(".gif")){
    Handler(fileName,gifHandler)
}
else if(fileName.endsWith(".pdf")){
    Handler(fileName,pdfHandler)
}