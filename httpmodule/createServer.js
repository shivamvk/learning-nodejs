const http = require("http");

const server = http.createServer((req,res)=>{
    //Creating a normal server
    // res.write("Hello world");
    // res.end();

    //Using the url property of req
    if (req.url === "/") {
        res.write("Hello world");
        res.end();
    } else {
        res.write("You're not authorised");
        res.end();
    }

});

server.listen(3000);