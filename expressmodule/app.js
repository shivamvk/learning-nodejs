const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

//creating a server with express
// app.get("/",(req,res)=>{
//     res.send("Express server up and running!");
// });

//handling url parameters and queries
// app.get("/example/:name",(req,res)=>{
//     console.log(req.params);
//     console.log(req.query);
//     res.send("Hello " + req.params.name + ". Your age is " + req.query.age);
// });

//serving static content using express
 app.use("/public",express.static(path.join(__dirname,"static")));
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"static","index.html"));
// });

//handling post request and using body-parser module
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"static","index.html"));
});
app.post("/",(req,res)=>{
    console.log(req.body);
    //do database works
    res.send({success: true});
});

app.listen(3000);