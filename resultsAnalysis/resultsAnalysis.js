var dbUtils = require('../server/db/dbUtils');
var fs = require('fs');

var EXPERIMENTERS_TABLE_NAME = 'Experimenter';
var ANSWERS_TABLE_NAME = 'Answer';
var QUESTIONNAIRE_TABLE_NAME = 'Questionnaire';

var TITELS = ["four/aLogic","four/aLogicNegative", "four/aLogicNegative1", "four/aLogicNegative2",
	"four/aStructure", "four/b1Logic", "four/bLogic", "four/bStructure", "four/cLogic", "four/cStructure",
	"four/forArithmetic", "four/forArray", "three/aLogic", "three/aLogicNegative", "three/aLogicNegative1",
	"three/aLogicNegative2", "three/aStructure", "three/b1Logic", "three/bLogic", "three/bStructure",
	"three/cLogic", "three/cStructure", "three/forArithmetic", "three/forArray", "two/aLogic",
	"two/aLogicNegative", "two/aLogicNegative1", "two/aLogicNegative2", "two/aStructure", "two/bLogic",
	"two/bStructure", "two/forArithmetic", "two/forArray", "special/forArr0", "special/forArr1",
	"special/forArr2", "special/forArr3","special/forArr4","special/forArr5","special/forArr6"];

var EXPERIMENTERS_TITELS = ["id",
    "start",
    "timestamp",
    "age",
    "gender",
    "selftaught",
    "bafinised",
    "bastarted",
    "bastudied",
    "mafinised",
    "mastarted",
    "mastudied",
    "phdfinised",
    "phdstarted",
    "phdstudied",
    "yearsofexperience",
    "programminglanguages",
    "assessselfprogrammingskills",
    "firsttime",
    "testplanid"];

var QUESTIONNAIRE_TITELS = [
    "id",
	"tooLong",
    "wasEngaging",
    "feelingOfChallenge",
    "howOthersDid",
    "importantToGetHighScore",
    "careIfSucceeded",
    "answerQuickly",
    "answerCorrectly",
    "checkedBeforeSubmitting",
    "notClearWhatToDo",
    "withoutReadingTheInstructions",
    "otherWillEnjoy",
    "wasFun"
];

var END_OF_LINE_CSV =  "\r\n";
var CORRECT_FILE_NAME = 'correct.csv';
var WRONG_FILE_NAME = 'wrong.csv';
var EXPERIMENTERS_FILE_NAME = 'experimenters.csv';
var QUESTIONNAIRE_FILE_NAME = 'questionnaire.csv';

var SELECT_EXPERIMENTERS_QUERY = 'SELECT * from ' + EXPERIMENTERS_TABLE_NAME;
var SELECT_EXPERIMENTERS_ANSWERS_QUERY = 'SELECT * from ' + ANSWERS_TABLE_NAME + ' where userId = ';
var SELECT_QUESTIONNAIRE_QUERY = 'SELECT * from ' + QUESTIONNAIRE_TABLE_NAME + ' where userId = ';

var experimenters;
var experimentersIndex = -1;

var correctFileStream;
var wrongFileStream;
var experimentersFileStream;
var questionnaireFileStream;


var fetchExperimenters = function(){
	var promise = new Promise(function(resolve, reject) {
        dbUtils.runQuery(SELECT_EXPERIMENTERS_QUERY).then(
            function (result) {
                experimenters = result;
                resolve(result);
            }
        );
	});
	return promise;
};

var handleNextExperimenter = function(){
	var promise =  new Promise(function(resolve, reject) {
		getNextExperimenter().then(function(experimenter){
			console.log("experimenter " + experimenter.id + " is handle");
			if(experimenter != null){
				getExperimenterAnswers(experimenter).then(function(answers){
					if(answers != null && answers.length > 0) {
                        console.log("experimenter " + experimenter.id + " answers are added");
                        writeExperimenterAnswers(experimenter, answers);
					}
				})
				.then(getExperimenterQuestionnaire.bind(null, experimenter))
				.then(function(questionnaire){
					writeExperimenterQuestionnaire(experimenter, questionnaire);
				})
				.then(handleNextExperimenter);
			}
			else{
				console.log("No more experimenters :)");
				resolve();
			}
		});
	});
	return promise;
};

var getExperimenterAnswers = function(experimenter){
	var promise =  new Promise(function(resolve, reject) {
        dbUtils.runQuery(SELECT_EXPERIMENTERS_ANSWERS_QUERY + experimenter.id).then(
            function (result) {
                resolve(result);
            }
		);
	});
	return promise;
};

var getExperimenterQuestionnaire = function(experimenter){
    return new Promise(function(resolve, reject) {
        dbUtils.runQuery(SELECT_QUESTIONNAIRE_QUERY + experimenter.id).then(
            function (result) {
                console.log("experimenter " + experimenter.id + " questionnaire get from db");
                resolve(result);
            }
        );
    });
};


var writeExperimenterQuestionnaire = function(experimenter, questionnaire){
	var questionnaireCvs = createCsvOutputForQuestionnaire(questionnaire);
    questionnaireFileStream.write(questionnaireCvs);
};

var writeExperimenterAnswers = function(experimenter, answers){
	var experimenterCvs = createCsvOutputForExperimenter(experimenter);
	var correctCvs = createCsvOutputForRanges(experimenter, answers, function(ans){return ans.rightanswer == ans.useranswer});
	var wrongCvs   = createCsvOutputForRanges(experimenter, answers, function(ans){return ans.rightanswer != ans.useranswer});
	experimentersFileStream.write(experimenterCvs);
	correctFileStream.write(correctCvs);
	wrongFileStream.write(wrongCvs);
};

var createCsvOutputForExperimenter = function(experimenter, answers){
	var csv = "";
	for(var i = 0; i < EXPERIMENTERS_TITELS.length; i++){
		var field = EXPERIMENTERS_TITELS[i];
		var value = experimenter[field];
		if(typeof(value)!='undefined'){
			if(Array.isArray(value)){
				csv = csv + '"' + value.toString() + '"';
			}
			else{
				csv = csv + value;
			}
		}
		csv = csv + ',';
	}
	csv += END_OF_LINE_CSV;
	return csv;
};

var createCsvOutputForQuestionnaire = function(questionnaire){
	var csv = "";
	for(var i = 0; i < QUESTIONNAIRE_TITELS.length; i++){
		var field = QUESTIONNAIRE_TITELS[i];
		var value = questionnaire[field];
		if(typeof(value)!='undefined'){
			csv = csv + value;
		}
		csv = csv + ',';
	}
	csv += END_OF_LINE_CSV;
	return csv;
};

var getAnswerDurationByIndicator = function(answers, indicator, questionId){
	var duration = "";
	var filteredAnswers = answers.filter(function(ans){
		return ans.questionid == questionId;
	});
	if(filteredAnswers.length > 0) {
		var answer = filteredAnswers[0];
		if (indicator(answer)) {
			duration = answer.duration;
		}
	}
	return duration;
};


var createCsvOutputForRanges = function(experimenter, answers, indicator){
	var output = experimenter.id;
	for(var questionId = 1; questionId <= 33; questionId++){
		output = output + ',' + getAnswerDurationByIndicator(answers, indicator, questionId);
	}

	for(var questionId = 100; questionId <= 106; questionId++){
		output = output + ',' + getAnswerDurationByIndicator(answers, indicator, questionId);
	}
	output += END_OF_LINE_CSV;
	return output;
};


var writeToFile = function(str, fileName){
	var promise =  new Promise(function(resolve, reject) {
		fs.writeFile(fileName, str, function(err){
			if (err){
				console.log(err);
			}
			else{
				resolve();
			}
		});
	});
	return promise;
};

var getNextExperimenter = function(){
	var promise =  new Promise(function(resolve, reject) {
		experimentersIndex ++ ;
		if(experimentersIndex < experimenters.length){
			resolve(experimenters[experimentersIndex]);
		}
		else{
			resolve(null);
		}
	});
	return promise;
};

var prepareFiles = function(){
	var promise =  new Promise(function(resolve, reject) {
		correctFileStream = fs.createWriteStream(CORRECT_FILE_NAME, {'flags': 'a'});
		wrongFileStream = fs.createWriteStream(WRONG_FILE_NAME, {'flags': 'a'});
		experimentersFileStream = fs.createWriteStream(EXPERIMENTERS_FILE_NAME, {'flags': 'a'});
        questionnaireFileStream = fs.createWriteStream(QUESTIONNAIRE_FILE_NAME, {'flags': 'a'});
        console.log("files are ready!");
		resolve();
	});
	return promise;
};

var closeFiles = function(){
	var promise =  new Promise(function(resolve, reject) {
		correctFileStream.end();
		wrongFileStream.end();
		resolve();
	});
	return promise;
};

var createCsvFromJsonKeys = function(json){
	var array = Object.keys(json);
	var csv = createCsvFromArray(array);
	return csv;
};


var createCsvFromArray = function(array){
	var csv = array.join();
	csv += END_OF_LINE_CSV;
	return csv;
};

var addTitlesToAnswerFiles = function(){
	var csvTitles = "," + createCsvFromArray(TITELS);
	correctFileStream.write(csvTitles);
	wrongFileStream.write(csvTitles);
};

var addTitlesToExperimentersFile = function(){
	var csvTitles = createCsvFromArray(EXPERIMENTERS_TITELS);
	experimentersFileStream.write(csvTitles);
};

var addTitlesToQuestionnaire = function(){
	var csvTitles = createCsvFromArray(QUESTIONNAIRE_TITELS);
	questionnaireFileStream.write(csvTitles);
};

var addTitles = function(){
	return new Promise(function(resolve, reject) {
		addTitlesToAnswerFiles();
		addTitlesToExperimentersFile();
        addTitlesToQuestionnaire();
        console.log("files have titles");
		resolve();
	});
};

Promise.all([
	prepareFiles()
]).then(fetchExperimenters)
	.then(addTitles)
	.then(handleNextExperimenter)
	.then(closeFiles);