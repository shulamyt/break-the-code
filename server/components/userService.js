var UserModel = require('../db/model/user');
module.exports = function (app) {
    app.post('/createUser', function (req, res) {

        var user = new UserModel({
            age: req.body.age
        });
        user.save(function (err, user) {
            if (err) {
                return next(err);
            }
            res.json(201, user);
        })

    });
};