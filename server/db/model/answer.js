var db = require('../db');

var answerSchema = new db.Schema({
    questionId: {type: String, required: true},
    correctAnswer: {type: String, required: true},
    answer: {type: String, required: true}
});

var Answer = db.model('Answer', answerSchema);

module.exports = Answer;