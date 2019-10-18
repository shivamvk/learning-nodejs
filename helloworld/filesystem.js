const fs = require("fs");

fs.writeFile("Example.txt", "Hey there", (err) => {
    if(err)
        console.log(err);
    else
        console.log("File successfully created");
});

fs.readFile("Example.txt",'utf8',(err,file)=>{
    if(err)
        console.log(err);
    else   
        console.log(file);
});
fs.mkdir("./filesystemdir",(err)=>{});
fs.writeFile("./filesystemdir/a.txt","a file", (err)=>{});
fs.writeFile("./filesystemdir/b.txt", "b file", (err)=>{});

fs.readdir("./filesystemdir", (err,files)=>{
    if(err)
        console.log(err);
    else
        for(let file of files){
            fs.unlink("./filesystemdir/" + file, (err)=>{
                if (err) {
                    console.log(err);
                } else {
                    console.log("Files deleted succesfull!");
                }
            });
        }
});

fs.rmdir("filesystemdir",(err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("Directory removed");
    }
});