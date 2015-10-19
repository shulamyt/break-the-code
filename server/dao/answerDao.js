var pg = require('pg');
var dbUtils = require('../db/dbUtils');
var conString = "postgres://x:y@localhost/postgres";

function AnswerDao(){

};

AnswerDao.prototype.save = function(answer){
    var promise = new Promise(function(resolve, reject) {
        pg.connect(conString, function(err, client, done) {
            if(err) {
                return console.error('error fetching client from pool', err);
            }
            var query = dbUtils.jsonToInsertQuery(answer, "Answer", ['questionId', 'rightAnswer', 'userAnswer'], null, null);
            client.query(query, function(err, result) {
                done();
                if(err) {
                    return console.error('error running query', err);
                }else{
                    resolve(result);
                }
            })
        });
    });
    return promise;
};

var answerDao = new AnswerDao();
module.exports = answerDao;