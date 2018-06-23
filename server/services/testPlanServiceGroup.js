var fs = require('fs');
var dir = require('node-dir');
var Chance = require('chance');
var testPlanConfiguration = require('../../questions/testPlanConfiguration');

function TestPlanService(){};

TestPlanService.prototype.getTestPlan = function(groupNum) {
	var self = this;
	return new Promise(function(resolve, reject) {
		var testPlan = [];
		if(typeof(groupNum)!='undefined' && groupNum != ""){
			var groupConfig = self.getGroupConfig(groupNum);
		}else{
			var groupConfig = self.getRandomGroupConfig();
		}

		self.addQuestionsFromGroupConfig(groupConfig, testPlan);
		// self.addQuestionsForOtherFloor(testPlan);
		// self.addSpecialQuestions(testPlan);
		// testPlan = self.shuffle(testPlan);
		console.log(self.printTestPlan(testPlan));
		resolve(testPlan);
	});
};

TestPlanService.prototype.printTestPlan = function(testPlan){
	return "testPlan: " + testPlan.map(function(question){
		return question.id;
	});
};

TestPlanService.prototype.addSpecialQuestions = function(testPlan){
	if(this.isInTestPlan(testPlan, 19)){
		testPlan.push(this.getQuestionById(18));
	}
	if(this.isInTestPlan(testPlan, 7)){
		testPlan.push(this.getQuestionById(6));
	}
	//add "simple for": 100 or 101
	testPlan.push(this.getQuestionById(this.getRandom([100, 101])));
	//add 2 more 
	var configuration = this.getTestPlanConfiguration();
	var specialQuestions = configuration.specialQuestions;
	var ids = this.getXRandom(specialQuestions, 2);
	var questions = this.fromIdsToQuestions(ids);
	for (var i = 0; i < questions.length; i++) {
		var cloneQ = this.clone(questions[i]);
		testPlan.push(cloneQ);
	}
};


TestPlanService.prototype.getQuestionById = function(id){
	return this.findInConfig({attribute: 'id', value: id});
};

TestPlanService.prototype.isInTestPlan = function(testPlan, questionId){
	var inTestPlan = false;
	for(var i = 0 ; i<testPlan.length ; i++){
		var q = testPlan[i];
		if(q.id == questionId){
			inTestPlan = true;
			break;
		}
	}
	return inTestPlan;
};

TestPlanService.prototype.shuffle = function(array){
	var chance = new Chance();
	return chance.shuffle(array);
};

TestPlanService.prototype.getRandomGroupConfig = function(){
	var configuration = this.getTestPlanConfiguration();
	var groups = configuration.groups;
	var num = this.randomNumber(0, groups.length-1);
	return this.getGroupConfig(num);
};

TestPlanService.prototype.getGroupConfig = function(num){
	var configuration = this.getTestPlanConfiguration();
	var groups = configuration.groups;
	return groups[num];
};

TestPlanService.prototype.addQuestionsFromGroupConfig = function(groupConfig, testPlan){
	var questions = this.fromIdsToQuestions(groupConfig);
	for (var i = 0; i < questions.length; i++) {
		testPlan.push(questions[i]);
	}
};

TestPlanService.prototype.getTestPlanConfiguration = function(){
	return testPlanConfiguration.getConfiguration();
};

TestPlanService.prototype.clone = function(a){
	return JSON.parse(JSON.stringify(a));
};

TestPlanService.prototype.fromIdsToQuestions = function(questionIds){
	var questions = [];
	for(var i = 0; i<questionIds.length; i++){
		var id = questionIds[i];
		var question = this.findInConfig({attribute: 'id', value: id});
		questions.push(this.clone(question));
	}
	return questions;
};

TestPlanService.prototype.findInConfig = function(criteria){
	var configuration = this.getTestPlanConfiguration();
	var questionsInfo = configuration.questionsInfo;
	for(var i = 0; i<questionsInfo.length; i++){
		var question = questionsInfo[i];
		if(question[criteria.attribute] == criteria.value){
			return question;
		}
	}
};

TestPlanService.prototype.randomNumber = function(min, max){
	var chance = new Chance();
	return chance.integer({min: min, max: max});
};

TestPlanService.prototype.getRandom = function(array){
	return this.getXRandom(array, 1);
};

TestPlanService.prototype.getXRandom = function(array, x){
	var chance = new Chance();
	return chance.pick(array, x);
};

TestPlanService.prototype.addQuestionsForOtherFloor = function(testPlan){
	var floors = ['segments/many/four/', 'segments/many/two/'];
	for(var i = 0; i<floors.length; i++){
		var floor = floors[i];
		var maxIterationsForFindQuestion = 100;
		for (var j = 0; j < maxIterationsForFindQuestion; j++) {
			if(testPlan.length == 0 || testPlan.length == 1) {
				console.log("ERROR: testPlan too short: " + testPlan.length);
				return;
			}
			else if(testPlan.length == 2){
				var index = 0;
			}
			else{
				var index = this.randomNumber(0, testPlan.length - 2);
			}
			var firstQuestion = testPlan[index];
			var secondQuestion = testPlan[index + 1];
			var firstQuestionInFloor = this.getQuestionInFloor(firstQuestion, floor);
			var secondQuestionInFloor = this.getQuestionInFloor(secondQuestion, floor);
			if(firstQuestionInFloor && secondQuestionInFloor){
				testPlan.push(firstQuestionInFloor);
				testPlan.push(secondQuestionInFloor);
				break;
			}
		}
	};
};

TestPlanService.prototype.getQuestionInFloor = function(q, floor){
	var pathArr = q.path.split('/');
	var fileName = pathArr[pathArr.length - 1];
	var newPath = floor + fileName;
	return this.findInConfig({attribute: 'path', value: newPath});
};

var testPlanService = new TestPlanService();
module.exports = testPlanService;

