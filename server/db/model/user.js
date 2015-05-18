var db = require('../db');

var userSchema = new db.Schema({
    creationDate: { type: Date, required: true, default: Date.now },
    age: { type: Number},
    gender: {type: String},
    hasRelevantDegree: {type: Boolean},
    testPlan: {type: Array, required: true}
    //title:  String,
    //author: String,
    //body:   String,
    //comments: [{ body: String, date: Date }],
    //date: { type: Date, default: Date.now },
    //hidden: Boolean,
    //meta: {
    //    votes: Number,
    //    favs:  Number
    //}
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