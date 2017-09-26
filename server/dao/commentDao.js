var dbUtils = require('../db/dbUtils');
var pool = require('../db/pool');

function CommentDao(){};

CommentDao.prototype.save = function(comment){
    var queryStr = dbUtils.jsonToInsertQuery(comment, "Comment");
    return dbUtils.runQuery(pool, queryStr);
};

var commentDao = new CommentDao();
module.exports = commentDao;