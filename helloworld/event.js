const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on('help',()=>{
    console.log("help event occured");
});

eventEmitter.emit('help');

eventEmitter.on('sumEvent',(a,b)=>{
    console.log(a+b);
});

eventEmitter.emit('sumEvent',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let shivam = new Person("Shivam Bhasin");
console.log(shivam.name);

shivam.on("walk",()=>{
    console.log("Shivam is walking");
});

shivam.emit('walk');