const joi = require('joi');

const arrayStrings = ["apple", "banana", "cat", "dog"];
const arrayObjects = [
    {name: "Shivam Bhasin"},
    {name: "Virat Kohli"},
    {name: "Ayush Jindal"},
];

const userInput = {
    personalInfo : {
        name: "Apoorv Singhal",
        address: "Punjabi bagh",
        city: "dl"
    },
    preferences: arrayObjects
};

const personalInfoSchema = joi.object().keys({
    name: joi.string().trim().required(),
    address: joi.string().trim().required(),
    city: joi.string().trim().length(2).required()
});

//for preferences : arrayString
//const preferencesSchema = joi.array().items(joi.string());

//for preferences : arrayObject
const preferencesSchema = joi.array().items(joi.object().keys({
    name : joi.string().trim()
}));

const schema = joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

joi.validate(userInput, schema, (err,result)=>{
    if(err){
        console.log(err);
    } else{
        console.log(result);
    }
});