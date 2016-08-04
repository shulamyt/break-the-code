var pg = require('pg');
var fs = require('fs');

//var connectionUrl = "postgres://root:shulamyt@localhost/postgres";
var connectionUrl ="postgres://root:root@localhost/postgres";

var EXPERIMENTERS_TABLE_NAME = 'realExperimenter04082';
var ANSWERS_TABLE_NAME = 'realAnswer04082';

var CORRECT_FILE_NAME = 'correct.txt';
var WRONG_FILE_NAME = 'wrong.txt';

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
				console.log("experimenter id = " + experimenter.id);
				getExperimenterAnswers(experimenter)
					.then(function(answers){
						if(answers != null && answers.length > 0) {
							writeExperimenterAnswers(experimenter, answers);
						}
					})
					.then(handleNextExperimenter);
			}
			else{
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
	var correct = createCsvOutput(experimenter, answers, function(ans){return ans.rightAnswer == ans.userAnswer});
	var wrong   = createCsvOutput(experimenter, answers, function(ans){return ans.rightAnswer != ans.userAnswer});
	correct += "\r\n";
	wrong += "\r\n";
	correctFileStream.write(correct);
	wrongFileStream.write(wrong);
};

var createCsvOutput = function(experimenter, answers, indicator){
	var output = experimenter.id;
	for(var questionId = 0; questionId <= 33; questionId++){
		output = output + ',';
		var filteredAnswers = answers.filter(function(ans){
			return ans.questionid == questionId;
		});
		if(filteredAnswers.length > 0) {
			var answer = filteredAnswers[0];
			if (indicator(answer)) {
				output = output + answer.duration;
			}
		}
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