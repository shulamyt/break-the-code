function TestPlanConfiguration(){

};

TestPlanConfiguration.prototype.getConfiguration = function(){
	var configuration = {
		numOfQuestionsForPlan: 2, // how many questions we want the experimenter to solve
		questionsInfo : [
			{
				id: 1,
				path: "segments/many/four/aLogic.js",
				answer: "2",
				timeForQuestion: 40,
				score: 999
			},

			{
				id: 2,
				path: "segments/many/four/aLogicNegative.js",
				answer: "1",
				timeForQuestion: 40,
				score: 999
			},

			{
				id: 3,
				path: "segments/many/four/aStructure.js",
				answer: "8",
				timeForQuestion: 40,
				score: 999
			},

			{
				id: 4,
				path: "segments/many/four/b1Logic.js",
				answer: "1",
				timeForQuestion: 40,
				score: 999
			},

			{
				id: 5,
				path: "segments/many/four/bLogic.js",
				answer: "2", 
				timeForQuestion: 40,
				score: 999
			},


			{
				id: 6,
				path: "segments/many/four/bStructure.js",
				answer: "4",
				timeForQuestion: 40,
				score: 999
			},

			{
				id: 7,
				path: "segments/many/four/cLogic.js",
				answer: "1",
				timeForQuestion: 40,
				score: 999
			},

			{
				id: 8,
				path: "segments/many/four/cStructure.js",
				answer: "6",
				timeForQuestion: 40,
				score: 999
			},

			{
				id: 9,
				path: "segments/many/four/forArithmetic.js",
				answer: "2", 
				timeForQuestion: 40,
				score: 999
			},

			{
				id: 10,
				path: "segments/many/four/forArray.js",
				answer: "1",
				timeForQuestion: 40,
				score: 999
			}

		]
	};
	return configuration;
};

var testPlanConfiguration = new TestPlanConfiguration();
module.exports = testPlanConfiguration;