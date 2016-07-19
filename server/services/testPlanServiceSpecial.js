var fs = require('fs');
var dir = require('node-dir');
var Chance = require('chance');
var testPlanConfiguration = require('../../questions/testPlanConfiguration');

function TestPlanService(){};

TestPlanService.prototype.getTestPlan = function() {
	var self = this;
	var promise = new Promise(function(resolve, reject) {
		var testPlan = [];
		self.addMainQuestions(testPlan);
		self.addQuestionsForOtherFloor(testPlan);
		// self.addSpecialQuestions();
		console.log("testPlan: " + testPlan.map(function(question){
			return question.id;
		}));
		resolve(testPlan);
	});
	return promise;
};

TestPlanService.prototype.addMainQuestions = function(testPlan){
	for(var i = 0 ; i < 8 ; i ++){
		var nextQuestion = this.getNextQuestion(testPlan);
		if(nextQuestion){
			testPlan.push(nextQuestion);
		}else{
			return;
		}
	}
};

TestPlanService.prototype.getNextQuestion = function(testPlan){
	var nextQuestion;
	if(testPlan.length == 0){
		nextQuestion = this.getRandomQuestionFromConfig();
	}
	else{
		var lastQuestion = testPlan[testPlan.length - 1];
		if(typeof(lastQuestion.nextQuestions) == 'undefined' || lastQuestion.nextQuestions.length == 0){
			nextQuestion = this.getRandomQuestionFromConfig();
		}else {
			var maxIterationsForFindQuestion = 100;
			for (var i = 0; i < maxIterationsForFindQuestion; i++) {
				var nextQuestions = this.getQuestionsThatAreNotInTestPlanYet(lastQuestion.nextQuestions, testPlan);
				if (!nextQuestions || nextQuestions.length == 0) {
					nextQuestion = this.getRandomQuestionFromConfig();
				}
				else {
					var nextQuestionId = this.getRandom(nextQuestions);
					nextQuestion = this.findInConfig({attribute: 'id', value: nextQuestionId});
				}
				if (!this.isInTestPlan(testPlan, nextQuestion)) {
					break;
				}
			}
		}
	}
	return nextQuestion;
};

TestPlanService.prototype.getQuestionsThatAreNotInTestPlanYet = function(questions, testPlan){
	var self = this;
	var filtered = questions.filter(function(q){
		return !self.isInTestPlan(testPlan, q);
	});
	return filtered;
};

TestPlanService.prototype.isInTestPlan = function(testPlan, question){
	testPlan.forEach(function(q){
		if(q.id == question.id){
			return true;
		}
	});
	return false;
};

TestPlanService.prototype.getRandomQuestionFromConfig = function(){
	var configuration = this.getTestPlanConfiguration();
	var questionId = this.getRandom(configuration.mainQuestions);
	var q = this.findInConfig({attribute: 'id', value: questionId});
	return q;
};

TestPlanService.prototype.getRandom = function(array){
	var chance = new Chance();
	return chance.pick(array, 1);
};

TestPlanService.prototype.getTestPlanConfiguration = function(){
	var configuration = testPlanConfiguration.getConfiguration();
	return configuration;
};

TestPlanService.prototype.addQuestionsForOtherFloor = function(testPlan){
	var floors = ['segments/many/four/', 'segments/many/two/'];
	var self = this;
	floors.forEach(function(floor){
		var maxIterationsForFindQuestion = 100;
		for (var i = 0; i < maxIterationsForFindQuestion; i++) {
			var index = self.randomNumber(0, testPlan.length - 2);
			var firstQuestion = testPlan[index];
			var secondQuestion = testPlan[index + 1];
			var firstQuestionInFloor = self.getQuestionInFloor(firstQuestion, floor);
			var secondQuestionInFloor = self.getQuestionInFloor(secondQuestion, floor);
			if(firstQuestionInFloor && secondQuestionInFloor){
				testPlan.push(firstQuestionInFloor);
				testPlan.push(secondQuestionInFloor);
				break;
			}
		}
	});
};

TestPlanService.prototype.getQuestionInFloor = function(question, floor){
	var pathArr = question.path.split('/');
	var fileName = pathArr[pathArr.length - 1];
	var newPath = floor + fileName;
	return this.findInConfig({attribute: 'path', value: newPath});
};

TestPlanService.prototype.findInConfig = function(criteria){
	var configuration = this.getTestPlanConfiguration();
	var question = configuration.questionsInfo.find(function(q){
		return (q[criteria.attribute] == criteria.value);
	});
	return question;
};

TestPlanService.prototype.randomNumber = function(min, max){
	var chance = new Chance();
	return chance.integer({min: min, max: max});
};



var testPlanService = new TestPlanService();
module.exports = testPlanService;

