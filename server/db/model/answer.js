var db = require('../db');

var answerSchema = new db.Schema({
    date: { type: Date, required: true, default: Date.now },
    //remaindedTime:
    //TODO - timer need to be more accurate
    questionId: {type: String},
    questionIndex: {type: Number},
    rightAnswer: {type: String},
    userId: {type: String},
    userAnswer: {type: String},
    time: {type: Number}
});

var Answer = db.model('Answer', answerSchema);

module.exports = Answer;