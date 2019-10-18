//Readline is an interface which extends EventEmitter
const readLine = require('readline');
const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

var a = Math.floor(Math.random() * 10 + 1);
var b = Math.floor(Math.random() * 10 + 1);
var sum = a+b;
 
rl.question(`What is the sum of ${ a } and ${ b }?\n`,(userInput)=>{
    if(userInput.trim() == sum){
        rl.close();
    } else{ 
        rl.setPrompt("Incorrect answer! Please try again.\n");
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim() == sum){
                rl.close();
            } else{
                rl.setPrompt("Incorrect answer! Please try again.\n");
                rl.prompt();
          }
        });
    }
});

rl.on("close",()=>{
    console.log("Correct Answer! \n")
    console.log("Thanks for playing.");
});   