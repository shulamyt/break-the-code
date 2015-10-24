var fs = require('fs');
var dir = require('node-dir');
var Chance = require('chance');
var testPlanConfiguration = require('../../questions/testPlanConfiguration');

function TestPlanService(){
	//if(this=== window || this.undefind){
	//	throw new Exception("must call as constructor!");
	//}
};


TestPlanService.prototype.getTestPlanConfiguration = function(){
	var configuration = testPlanConfiguration.getConfiguration();
	return configuration;
};

TestPlanService.prototype.getQuestionPath = function(questionIndex) {
	var self = this;
	var promise = new Promise(function(resolve, reject) {
		self.getAvailableQuestions().then(function(questions){
			var questionPath = questions[questionIndex];
			resolve(questionPath);
		})
	});
	return promise;
};

TestPlanService.prototype.getTestPlan = function() {
	var self = this;
	var promise = new Promise(function(resolve, reject) {
		var configuration = self.getTestPlanConfiguration();
		var numOfQuestionsForPlan = configuration.numOfQuestionsForPlan;
		var questionsInfo = configuration.questionsInfo;
		var chance = new Chance();
		var testPlan = chance.pick(questionsInfo, numOfQuestionsForPlan);
		resolve(testPlan);
	});
	return promise;
};

var testPlanService = new TestPlanService();
module.exports = testPlanService;

