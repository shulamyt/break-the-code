function TestPlanConfiguration(){

};

TestPlanConfiguration.prototype.getConfiguration = function(){
	var configuration = {
		specialQuestions : [102, 103, 104, 105, 106],
		groups:[
			[13, 14, 15, 16], //al, an, an1, an2
			[17, 22, 20, 13, 19, 21], //as, cs, bs, al, bl, cl
			[17, 22, 23, 24]  //as, cs, f*, f[]
		],
		questionsInfo : [
			{
				id: 1,
				path: "segments/four/aLogic.js",
				answer: "2",
				nextQuestions: [5, 2, 3, 4],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 2,
				path: "segments/four/aLogicNegative.js",
				answer: "1",
				nextQuestions: [1, 3, 4],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 3,
				path: "segments/four/aLogicNegative1.js",
				answer: "1",
				nextQuestions: [1, 2, 4],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 4,
				path: "segments/four/aLogicNegative2.js",
				answer: "2",
				nextQuestions: [1, 2, 3],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 5,
				path: "segments/four/aStructure.js",
				answer: "8",
				nextQuestions: [1, 8, 10, 11, 12],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 6,
				path: "segments/four/b1Logic.js",
				answer: "1",
				nextQuestions: [7],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 7,
				path: "segments/four/bLogic.js",
				answer: "2",
				nextQuestions: [6, 9, 8, 1], 
				timeForQuestion: 60,
				score: 999
			},


			{
				id: 8,
				path: "segments/four/bStructure.js",
				answer: "4",
				nextQuestions: [7, 9, 5],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 9,
				path: "segments/four/cLogic.js",
				answer: "1",
				nextQuestions: [7, 1, 10],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 10,
				path: "segments/four/cStructure.js",
				answer: "6",
				nextQuestions: [9, 8, 5, 11, 12],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 11,
				path: "segments/four/forArithmetic.js",
				answer: "2", 
				nextQuestions: [5, 10, 12],
				timeForQuestion: 90,
				score: 999
			},

			{
				id: 12,
				path: "segments/four/lpay.js",
				answer: "1",
				nextQuestions: [5, 10, 11],
				timeForQuestion: 90,
				score: 999
			},
//******************************three*******************************************
			{
				id: 13,
				path: "segments/three/aLogic.js",
				nextQuestions: [17, 14, 15, 16],
				answer: "2",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 14,
				path: "segments/three/aLogicNegative.js",
				answer: "1",
				nextQuestions: [13, 15, 16],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 15,
				path: "segments/three/aLogicNegative1.js",
				answer: "1",
				nextQuestions: [13, 14, 16],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 16,
				path: "segments/three/aLogicNegative2.js",
				answer: "2",
				nextQuestions: [13, 14, 15],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 17,
				path: "segments/three/aStructure.js",
				answer: "4",
				nextQuestions: [13, 20, 22, 23, 24],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 18,
				path: "segments/three/b1Logic.js",
				answer: "1",
				nextQuestions: [19],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 19,
				path: "segments/three/bLogic.js",
				answer: "1",
				nextQuestions: [18, 21, 20, 13], 
				timeForQuestion: 60,
				score: 999
			},


			{
				id: 20,
				path: "segments/three/bStructure.js",
				answer: "3",
				nextQuestions: [19, 21, 17],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 21,
				path: "segments/three/cLogic.js",
				answer: "1",
				nextQuestions: [19, 13, 22],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 22,
				path: "segments/three/cStructure.js",
				answer: "6",
				nextQuestions: [21, 20, 17, 23, 24],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 23,
				path: "segments/three/forArithmetic.js",
				answer: "1", 
				nextQuestions: [17, 22, 24],
				timeForQuestion: 90,
				score: 999
			},

			{
				id: 24,
				path: "segments/three/lpay.js",
				answer: "2",
				nextQuestions: [17, 22, 23],
				timeForQuestion: 90,
				score: 999
			},
//******************************two*******************************************			
			{
				id: 25,
				path: "segments/two/aLogic.js",
				answer: "1",
				nextQuestions: [26, 27, 28, 29, 30, 33],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 26,
				path: "segments/two/aLogicNegative.js",
				answer: "2",
				nextQuestions: [25, 27, 28],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 27,
				path: "segments/two/aLogicNegative1.js",
				answer: "1",
				nextQuestions: [25, 26, 28],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 28,
				path: "segments/two/aLogicNegative2.js",
				answer: "2",
				nextQuestions: [25, 26, 27],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 29,
				path: "segments/two/aStructure.js",
				answer: "3",
				nextQuestions: [25, 31, 32, 33],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 30,
				path: "segments/two/bLogic.js",
				answer: "1",
				nextQuestions: [25, 31], 
				timeForQuestion: 60,
				score: 999
			},


			{
				id: 31,
				path: "segments/two/bStructure.js",
				answer: "2",
				nextQuestions: [29, 30],
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 32,
				path: "segments/two/forArithmetic.js",
				answer: "2",
				nextQuestions: [33, 25, 29], 
				timeForQuestion: 90,
				score: 999
			},

			{
				id: 33,
				path: "segments/two/lpay.js",
				answer: "1",
				nextQuestions: [32, 29, 25],
				timeForQuestion: 90,
				score: 999
			},
//******************************special*******************************************		
			{
				id: 100,
				path: "loop/lp0.js",
				answer: "abcde",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 101,
				path: "loop/lp1.js",
				answer: "abcde",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 102,
				path: "loop/lp2.js",
				answer: "abcd",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 103,
				path: "loop/lp3.js",
				answer: "bcde",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 104,
				path: "loop/lp4.js",
				answer: "bcd",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 105,
				path: "loop/lp5.js",
				answer: "edcba",
				timeForQuestion: 60,
				score: 999
			},

			{
				id: 106,
				path: "loop/lp6.js",
				answer: "edcb",
				timeForQuestion: 60,
				score: 999
			}
		]
	};
	return configuration;
};

var testPlanConfiguration = new TestPlanConfiguration();
module.exports = testPlanConfiguration;