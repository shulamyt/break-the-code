var userDao = require('../dao/userDao');
var testPlanService = require('./../services/testPlanServiceGroup');
var questionService = require('./../services/questionService');

module.exports = function (app) {
    //update
    app.put('/user', function (req, res) {
        var user = {};
        if(req && req.body){
            user.start = true;
            user.id = req.body.id;
            user.age = parseInt(req.body.age);
            user.gender = req.body.gender;

            user.yearsOfExperience = parseInt(req.body.yearsOfExperience);
            user.programmingLanguages = req.body.programmingLanguages;
            user.assessSelfProgrammingSkills = parseInt(req.body.assessProgrammingSkills);
            user.firstTime = !req.body.notFirstTime;

            if(req.body.degree){
                user.selfTaught = req.body.degree.selfTaught||false;
                if(req.body.degree.BA){
                    user.baFinished = req.body.degree.BA.finished||false;
                    user.baStarted = parseInt(req.body.degree.BA.started);
                    user.baStudied = parseInt(req.body.degree.BA.studied);
                }
                if(req.body.degree.MA){
                    user.maFinished = req.body.degree.MA.finished||false;
                    user.maStarted = parseInt(req.body.degree.MA.started);
                    user.maStudied = parseInt(req.body.degree.MA.studied);
                }
                if(req.body.degree.PhD) {
                    user.phdFinished = req.body.degree.PhD.finished||false;
                    user.phdStarted = parseInt(req.body.degree.PhD.started);
                    user.phdStudied = parseInt(req.body.degree.PhD.studied);
                }
            }
        }
        if(user.id != undefined) {
            userDao.update(user);
            console.log('update user.id = ' + user.id);
        }
    });
    //create
    app.post('/user', function (req, res) {
        testPlanService.getTestPlan(req.body.groupNum).then(function(testPlan){
            var user = {};
            user.id = new Date().getTime();
            user.testPlan = testPlan;
            var testPlanId = [];
            for(var i in testPlan){
                testPlanId.push(testPlan[i].id);
            }
            user.testPlanId = testPlanId;
            questionService.addQuestions(user.testPlan).then(function(){
                    userDao.save(user);
                    console.log('create user.id = ' + user.id);
                    res.status(201).json(user);
            });
        });
    });
};