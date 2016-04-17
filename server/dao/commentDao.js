var pg = require('pg');
var dbUtils = require('../db/dbUtils');
//server:
var conString = "postgres://root:shulamyt@localhost/postgres";

function CommentDao(){

};

CommentDao.prototype.save = function(comment){
    var promise = new Promise(function(resolve, reject) {
        pg.connect(conString, function(err, client, done) {
            if(err) {
                return console.error('error saving comment ', err);
            }
            var query = dbUtils.jsonToInsertQuery(comment, "Comment");
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

var commentDao = new CommentDao();
module.exports = commentDao;