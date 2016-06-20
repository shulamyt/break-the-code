function TestPlanConfiguration(){

};

TestPlanConfiguration.prototype.getConfiguration = function(){
	var configuration = {
		numOfQuestionsForPlan: 20, // how many questions we want the experimenter to solve
		questionsInfo : [
			{
				id: 1,
				path: "segments/many/four/aLogic.js",
				answer: "2",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 2,
				path: "segments/many/four/aLogicNegative.js",
				answer: "1",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 3,
				path: "segments/many/four/aLogicNegative1.js",
				answer: "2",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 4,
				path: "segments/many/four/aLogicNegative2.js",
				answer: "1",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 5,
				path: "segments/many/four/aStructure.js",
				answer: "8",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 6,
				path: "segments/many/four/b1Logic.js",
				answer: "1",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 7,
				path: "segments/many/four/bLogic.js",
				answer: "2", 
				timeForQuestion: 60,
				score: 999
			},


			{
				id: 8,
				path: "segments/many/four/bStructure.js",
				answer: "4",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 9,
				path: "segments/many/four/cLogic.js",
				answer: "1",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 10,
				path: "segments/many/four/cStructure.js",
				answer: "6",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 11,
				path: "segments/many/four/forArithmetic.js",
				answer: "2", 
				timeForQuestion: 90,
				score: 999
			},

			{
				id: 12,
				path: "segments/many/four/forArray.js",
				answer: "1",
				timeForQuestion: 90,
				score: 999
			},
//******************************three*******************************************
			{
				id: 13,
				path: "segments/many/three/aLogic.js",
				answer: "2",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 14,
				path: "segments/many/three/aLogicNegative.js",
				answer: "1",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 15,
				path: "segments/many/three/aLogicNegative1.js",
				answer: "1",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 16,
				path: "segments/many/three/aLogicNegative2.js",
				answer: "2",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 17,
				path: "segments/many/three/aStructure.js",
				answer: "4",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 18,
				path: "segments/many/three/b1Logic.js",
				answer: "1",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 19,
				path: "segments/many/three/bLogic.js",
				answer: "2", 
				timeForQuestion: 60,
				score: 999
			},


			{
				id: 20,
				path: "segments/many/three/bStructure.js",
				answer: "3",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 21,
				path: "segments/many/three/cLogic.js",
				answer: "1",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 22,
				path: "segments/many/three/cStructure.js",
				answer: "6",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 23,
				path: "segments/many/three/forArithmetic.js",
				answer: "1", 
				timeForQuestion: 90,
				score: 999
			},

			{
				id: 24,
				path: "segments/many/three/forArray.js",
				answer: "2",
				timeForQuestion: 90,
				score: 999
			},
//******************************two*******************************************			
			{
				id: 25,
				path: "segments/many/two/aLogic.js",
				answer: "1",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 26,
				path: "segments/many/two/aLogicNegative.js",
				answer: "2",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 27,
				path: "segments/many/two/aLogicNegative1.js",
				answer: "1",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 28,
				path: "segments/many/two/aLogicNegative2.js",
				answer: "2",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 29,
				path: "segments/many/two/aStructure.js",
				answer: "3",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 30,
				path: "segments/many/two/bLogic.js",
				answer: "1", 
				timeForQuestion: 60,
				score: 999
			},


			{
				id: 31,
				path: "segments/many/two/bStructure.js",
				answer: "2",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 32,
				path: "segments/many/two/forArithmetic.js",
				answer: "2", 
				timeForQuestion: 90,
				score: 999
			},

			{
				id: 33,
				path: "segments/many/two/forArray.js",
				answer: "1",
				timeForQuestion: 90,
				score: 999
			}


		]
	};
	return configuration;
};

var testPlanConfiguration = new TestPlanConfiguration();
module.exports = testPlanConfiguration;