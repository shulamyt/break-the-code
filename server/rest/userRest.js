var UserModel = require('../db/model/user');
var testPlanService = require('./../services/testPlanService');

module.exports = function (app) {
    app.post('/user', function (req, res) {
        var testPlan = testPlanService.getTestPlan();

        var user = {};
        user.testPlan = testPlan;
        if(req && req.body){
            user.age = req.body.age;
            user.gender = req.body.gender;

            user.yearsOfExperience = req.body.yearsOfExperience;
            user.programmingLanguages = req.body.programmingLanguages;
            user.assessSelfProgrammingSkills = req.body.assessProgrammingSkills;
            user.firstTime = !req.body.notFirstTime;

            if(req.body.degree){
                user.selfTaught = req.body.degree.selfTaught;
                if(req.body.degree.BA){
                    user.baFinised = req.body.degree.BA.finised;
                    user.baStarted = req.body.degree.BA.started;
                    user.baStudied = req.body.degree.BA.studied;
                }
                if(req.body.degree.MA){
                    user.maFinised = req.body.degree.MA.finised;
                    user.maStarted = req.body.degree.MA.started;
                    user.maStudied = req.body.degree.MA.studied;
                }
                if(req.body.degree.PhD) {
                    user.phdFinised = req.body.degree.PhD.finised;
                    user.phdStarted = req.body.degree.PhD.started;
                    user.phdStudied = req.body.degree.PhD.studied;
                }
            }
        }
        var userModel = new UserModel(user);

        userModel.save(function (err, user) {
            if (err) {
                return next(err);
            }
            res.status(201).json(user);
        })

    });
};