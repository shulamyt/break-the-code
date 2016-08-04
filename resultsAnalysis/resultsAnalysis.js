var pg = require('pg');
var fs = require('fs');

//var connectionUrl = "postgres://root:shulamyt@localhost/postgres";
var connectionUrl ="postgres://root:root@localhost/postgres";

var EXPERIMENTERS_TABLE_NAME = 'realExperimenter0108';
var ANSWERS_TABLE_NAME = 'realAnswer0108';

var SELECT_EXPERIMENTERS_IDS_QUERY = 'SELECT ID from ' + EXPERIMENTERS_TABLE_NAME;
var SELECT_EXPERIMENTERS_ANSWERS_QUERY = 'SELECT * from ' + ANSWERS_TABLE_NAME + ' where userId = ';

var db;
var experimenters;
var experimentersIndex = -1;

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
				reject('error getExperimentersId');
			}
			experimenters = result.rows;
			resolve(result);
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
					.then(function(answers){writeExperimenterAnswers(experimenter, answers)})
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
			}
			resolve(result.rows);
		});
	});
	return promise;
};

var writeExperimenterAnswers = function(experimenter, answers){
	var promise =  new Promise(function(resolve, reject) {
		var correct = createOutputForCorrectFile(experimenter, answers);
		//var wrong = createOutputForWrongFile();


	});
	return promise;
};

var createOutputForCorrectFile = function(experimenter, answers){
	console.log("hiii");
};

var writeToFile = function(str, fileName){
	var promise =  new Promise(function(resolve, reject) {
		fs.writeFile(fileName, str, function(){
			if (err){
				console.log(err);
			}
			else{
				resolve();
			}
		});
	});
	return promise;

	////var path = __dirname + "/../../questions/" + questionInfo.path;
	//fs.writeFile(fileName, str, function(){
	//	if (err) throw err;
	//	console.log('It\'s saved!');
	//});
	//fs.writeFile('wrong.txt', 'Hello Node.js', function(){
	//	if (err) throw err;
	//	console.log('It\'s saved!');
	//});
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

/*
var writeExperimenterResults = function(answers){
	getExperimenterAnswers().then()
	//var path = __dirname + "/../../questions/" + questionInfo.path;
	//fs.writeFile('correct.txt', 'Hello Node.js', (err) => {
	//	if (err) throw err;
	//	console.log('It\'s saved!');
	//});
	//fs.writeFile('wrong.txt', 'Hello Node.js', (err) => {
	//	if (err) throw err;
	//	console.log('It\'s saved!');
	//});

};
*/







createConnection()
	.then(fetchExperimenterIds)
	.then(handleNextExperimenter)
	.then(closeConnection);