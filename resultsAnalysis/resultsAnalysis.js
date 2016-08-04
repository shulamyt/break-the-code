var pg = require('pg');
var fs = require('fs');

var remoteConnectionUrl = "postgres://root:shulamyt@localhost/postgres";
var connectionUrl = remoteConnectionUrl;

var EXPERIMENTERS_TABLE_NAME = 'realExperimenter0408';
var ANSWERS_TABLE_NAME = 'realAnswer0408';

var CORRECT_FILE_NAME = 'correct.csv';
var WRONG_FILE_NAME = 'wrong.csv';

var SELECT_EXPERIMENTERS_IDS_QUERY = 'SELECT ID from ' + EXPERIMENTERS_TABLE_NAME;
var SELECT_EXPERIMENTERS_ANSWERS_QUERY = 'SELECT * from ' + ANSWERS_TABLE_NAME + ' where userId = ';

var db;
var experimenters;
var experimentersIndex = -1;

var correctFileStream;
var wrongFileStream;

var createConnection = function(){
	var promise = new Promise(function(resolve, reject) {
		pg.connect(connectionUrl, function(err, client, done) {
			if (err) {
				console.log(err);
			}
			else {
				console.log("Connection open!");
				db = client;
				resolve(client);
			}
		});
	});
	return promise;
};

var closeConnection = function(what){
	var promise =  new Promise(function(resolve, reject) {
		db.end(function (err) {
			if (err) {
				console.log(err);
			}
			else {
				console.log("Connection closed :)");
				resolve();
			}
		});
	});
	return promise;
};

var fetchExperimenterIds = function(){
	var promise = new Promise(function(resolve, reject) {
		db.query(SELECT_EXPERIMENTERS_IDS_QUERY, function (err, result) {
			if (err) {
				console.log(err);
			}else {
				experimenters = result.rows;
				resolve(result);
			}
		});	
	});

	return promise;
};

var handleNextExperimenter = function(){
	var promise =  new Promise(function(resolve, reject) {
		getNextExperimenter().then(function(experimenter){
			if(experimenter != null){
				getExperimenterAnswers(experimenter)
					.then(function(answers){
						if(answers != null && answers.length > 0) {
							writeExperimenterAnswers(experimenter, answers);
						}
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
		db.query(SELECT_EXPERIMENTERS_ANSWERS_QUERY + experimenter.id, function (err, result) {
			if (err) {
				console.log(err);
			}else {
				resolve(result.rows);
			}
		});
	});
	return promise;
};

var writeExperimenterAnswers = function(experimenter, answers){
	var correct = createCsvOutputForRanges(experimenter, answers, function(ans){return ans.rightAnswer == ans.userAnswer});
	var wrong   = createCsvOutputForRanges(experimenter, answers, function(ans){return ans.rightAnswer != ans.userAnswer});
	correct += "\r\n";
	wrong += "\r\n";
	correctFileStream.write(correct);
	wrongFileStream.write(wrong);
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

Promise.all([
	createConnection(),
	prepareFiles()
]).then(fetchExperimenterIds)
	.then(handleNextExperimenter)
	.then(closeFiles)
	.then(closeConnection);