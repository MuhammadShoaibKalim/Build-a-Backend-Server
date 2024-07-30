const express=require("express");
const app =express();
const port = 3600;

app.get( "/Home",(req, res)=>{
      res.send("This is empty response..!!");
});
app.get("/ShaibiCode", (req, res)=>{
    res.send("Hi there in ShaibiCode and Solution");
});
app.listen (port,()=>{
    console.log(`ShaibiCode and Solution is running on ${port}`);
});