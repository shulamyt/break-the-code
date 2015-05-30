var db = require('../db');

var answerSchema = new db.Schema({
    date: { type: Date, required: true, default: Date.now },
    //remaindedTime:
    //TODO - timer need to be more accurate
    questionId: {type: String, required: true},
    correctAnswer: {type: String, required: true},
    answer: {type: String, required: true}
});

var Answer = db.model('Answer', answerSchema);

module.exports = Answer;