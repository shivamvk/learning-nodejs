const express = require("express");
const path = require("path");

const app = express();

//creating a server with express
// app.get("/",(req,res)=>{
//     res.send("Express server up and running!");
// }).listen(3000);

//handling url parameters and queries
// app.get("/example/:name",(req,res)=>{
//     console.log(req.params);
//     console.log(req.query);
//     res.send("Hello " + req.params.name + ". Your age is " + req.query.age);
// }).listen(3000);

//serving static content using express
app.use("/public",express.static(path.join(__dirname,"static")));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"static","index.html"));
}).listen(3000);
