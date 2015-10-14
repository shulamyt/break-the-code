var fs = require('fs');
var dir = require('node-dir');

function TestPlanService(){
	//if(this=== window || this.undefind){
	//	throw new Exception("must call as constructor!");
	//}
	this.availableQuestions = this.setAvailableQuestions();
	this.testPlanConfiguration = this.setTestPlanConfiguration();
};

TestPlanService.prototype.getAvailableQuestions = function(){
	return this.availableQuestions;
};

TestPlanService.prototype.getTestPlanConfiguration = function(){
	return this.testPlanConfiguration;
};

TestPlanService.prototype.setAvailableQuestions = function(){
	var promise = new Promise(function(resolve, reject) {
		var questionsDirPath = __dirname + "/../../questions/";
		dir.files(questionsDirPath, function(err, files) {
			if (err){
				reject("problem");
			}else{
				resolve(files);
			}
		});
    });
    return promise;
};

TestPlanService.prototype.setTestPlanConfiguration = function(){
	var promise = new Promise(function(resolve, reject) {
		var testPlanConfigurationPath = __dirname + "/../../questions/testPlanConfiguration.js";
		fs.readFile(testPlanConfigurationPath, 'utf8', function(err, file){
			if(err != null){
				reject("problem");
			}else{
				var configuration = JSON.parse(file);
				resolve(configuration);	
			}
			
		});
    });
    return promise;
};

TestPlanService.prototype.getRandomQuestionIndex = function(availableQuestions){
	var index = Math.floor(Math.random()*availableQuestions.length + 1);
	return index;
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
		var questionID;
		var testPlan = [];
		var availableQuestions;
		var testPlanConfiguration;
		self.getAvailableQuestions().then(function(questions){
			availableQuestions = questions;
			return self.getTestPlanConfiguration();
		}).then(function(configuration){
			testPlanConfiguration = configuration;
			var numOfQuestions = configuration.numOfQuestions || 20;
			while(testPlan.length < numOfQuestions) {
				var questionIndex = self.getRandomQuestionIndex(availableQuestions);
				if(testPlan.indexOf(questionIndex) == -1) {
					testPlan.push(questionIndex);
				}
			}
			resolve(testPlan);
		});
	});
	return promise;
};

var testPlanService = new TestPlanService();
module.exports = testPlanService;

