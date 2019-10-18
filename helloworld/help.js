const sum = (a,b) => a+b;
const PI = 3.14;
class Help{
    constructor(){
        console.log("Help.js");
    }
}
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.Help = Help;