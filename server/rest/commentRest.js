var commentDao = require('./../dao/commentDao');

module.exports = function (app) {
    app.post('/services/comment', function (req, res) {
        var comment = {};
        comment.userId = req.body.userId;

        commentDao.save(comment).then(function () {
            res.status(201).json(comment);
        });
    });
};
