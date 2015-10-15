var UserModel = require('../db/model/user');
var testPlanService = require('./../services/testPlanService');
var questionService = require('./../services/questionService');

module.exports = function (app) {
    app.post('/user', function (req, res) {
        testPlanService.getTestPlan().then(function(testPlan){
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

            userModel.save(function (err, userSaved) {
                if (err) {
                    return next(err);
                }
                else{
                    questionService.getQuestions(user.testPlan).then(function(questions){
                        var userSavedJson = JSON.parse(JSON.stringify(userSaved));
                        var userJson = user;
                        userJson.questions = questions;
                        userJson._id = userSavedJson._id;
                        res.status(201).json(userJson);
                    });

                }

            });
        });
    });
};