var product = {
    id:2003,
    name:"IPHONE",
    price:96000,
    discription:{
        ram:"8gb",
        storage:"128gb",
        camera:"12mp",
        battery:"3000mah"
    },
    isAvailable:true,
    color:["black","white","red","blue","yellow"],
    body:"Steel"
}

console.log(product);
console.log(product.price);
console.log(product.name);
console.log(product.discription);
console.log(product.discription.ram);
console.log(product.discription.storage);
console.log(product.discription.battery);

console.log(product.color);
console.log(product.color[0]);
console.log(product.color[3]);


for(let i=0;i<product.color.length;i++)
{
    console.log(product.color[i]);
    
}







