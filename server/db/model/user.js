var db = require('../db');

var userSchema = new db.Schema({
    creationDate: {type: Date, required: true, default: Date.now },
    age: {type: Number},
    gender: {type: String},

    selfTaught: {type: Boolean},

    baFinised: {type: Boolean},
    baStarted: {type: Number},
    baStudied: {type: String},

    maFinised: {type: Boolean},
    maStarted: {type: Number},
    maStudied: {type: String},

    phdFinised: {type: Boolean},
    phdStarted: {type: Number},
    phdStudied: {type: String},

    yearsOfExperience:{type: Number},
    programmingLanguages: {type: Array},
    assessSelfProgrammingSkills:{type: Number},
    firstTime:{type: Boolean},

    testPlan: {type: Array, required: true}
});



var User = db.model('User', userSchema);
    //{
    //id :  { type: ObjectId, required: true, default: ObjectId()},
    //name: { type: 'String', required: true },
    //age:  { type: 'Double', required: true }
    //creationDate: { type: Date, required: true, default: Date.now },
    //yearsOfProgrammingExperience: {type: Double, required: true},
    //knowSoftwareLanguages: {type: Array}

//});
module.exports = User;