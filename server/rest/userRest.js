var UserModel = require('../db/model/user');
var testPlanService = require('./../services/testPlanService');

module.exports = function (app) {
    app.post('/user', function (req, res) {
        var testPlan = testPlanService.getTestPlan();
        var user = new UserModel({
            age: req.body.age,
            testPlan: testPlan
        });

        user.save(function (err, user) {
            if (err) {
                return next(err);
            }
            res.status(201).json(user);
        })

    });
};