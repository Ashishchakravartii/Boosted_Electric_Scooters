const express = require("express");
const app= express();

app.get("/",function(req,res,next){
    res.sendFile(__dirname+ "/index.html");
})
app.get("/shop",function(req,res,next){
    res.sendFile(__dirname+ "/shop.html");
})

app.listen(3000,()=>{
    console.log("Server Running")
})
