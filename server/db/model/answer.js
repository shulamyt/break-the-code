var db = require('../db');

var answerSchema = new db.Schema({
    date: { type: Date, required: true, default: Date.now },
    //remaindedTime:
    //TODO - timer need to be more accurate
    questionId: {type: String, required: true},
    rightAnswer: {type: String, required: true},
    userId: {type: String, required: true},
    userAnswer: {type: String}
});

var Answer = db.model('Answer', answerSchema);

module.exports = Answer;