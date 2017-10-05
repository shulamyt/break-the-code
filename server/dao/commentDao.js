var dbUtils = require('../db/dbUtils');

function CommentDao(){};

CommentDao.prototype.save = function(comment){
    var queryStr = dbUtils.jsonToInsertQuery(comment, "Comment");
    return dbUtils.runQuery(queryStr);
};

var commentDao = new CommentDao();
module.exports = commentDao;