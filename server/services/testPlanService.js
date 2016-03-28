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
		console.log("before change: " + testPlan.map(function(question){
			return question.id;
		}));
		self.addExtraQuestions(testPlan, questionsInfo);
		console.log("after change: " + testPlan.map(function(question){
			return question.id;
		}));
		resolve(testPlan);
	});
	return promise;
};

TestPlanService.prototype.getQuestionsInfoMap = function(questionsInfo) {
	var questionsInfoMap = new Map();
	questionsInfo.forEach(function(question){
		questionsInfoMap.set(question.id, question);
	});
	return questionsInfoMap;
};

TestPlanService.prototype.addExtraQuestions = function(testPlan, questionsInfo) {
	var index = 0;
	var questionsInfoMap = this.getQuestionsInfoMap(questionsInfo);
	while (index < testPlan.length){
		index = this.addQuestion(index, testPlan, questionsInfoMap);
		index = index + 1;
	}
	return testPlan;
};

TestPlanService.prototype.removeQuestion = function(questionId, testPlan) {
	for(var i in testPlan){
		var question = testPlan[i];
		if(question.id === questionId){
			testPlan.splice(i, 1);
			return i;
		}
	}
};

TestPlanService.prototype.addQuestion = function(index, testPlan, questionsInfoMap){
	var currentQuestion = testPlan[index];
	var nextQuestionId = currentQuestion.nextQuestionId;
	if(typeof(nextQuestionId)!=='undefined' && nextQuestionId !== null){
		var removedIndex = this.removeQuestion(nextQuestionId, testPlan);
		if(typeof(removedIndex) !== 'undefined' && removedIndex < index){
			index = index - 1;
		}
		var nextQuestion = questionsInfoMap.get(nextQuestionId);
		index = index + 1;
		testPlan.splice(index, 0, nextQuestion);
		this.addQuestion(index, testPlan, questionsInfoMap);
		return index;
	}
	return index;
};

var testPlanService = new TestPlanService();
module.exports = testPlanService;

