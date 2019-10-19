const express = require('express');

const app = express();
app.set("view engine", "ejs");

app.get("/search",(req,res)=>{
    console.log(req.query.q);
    res.render("index",{
        data: {
            searchQuery: req.query.q,
            searchResults: [
                'hey 1',
                'hey 2',
                'hey 3'
            ]
        }
    });
});

app.listen(3000);