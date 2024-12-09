const jpgHandler = (option)=>{

    console.log(option.fname," Jpg file handling ",option.size);
    
}

const pngHandler = (option)=>{
    console.log(option.fname," Png file handling ",option.size);
}

const gifHandler = (option)=>{
    console.log(option.fname," Gif file handling ",option.size);
}

const pdfHandler = (option)=>{
    console.log(option.fname," Pdf file handling ",option.size);
}

const Handler = (file,cb)=>{
    cb({fname:file,size:"1000kb"})
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