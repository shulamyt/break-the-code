function TestPlanConfiguration(){

};

TestPlanConfiguration.prototype.getConfiguration = function(){
	var configuration = {
		// the following are temporary data !
		numOfQuestionsForPlan: 2, // how many questions we want the experimenter to solve
		questionsInfo : [
			{
				id: 1,
				path: "questionsJS/array/equals.js",
				answer: "gibberish",
				timeForQuestion: 7,
				score: 100
			},

			{
				id: 2,
				path: "questionsJS/array/indexOf.js",
				answer: "gibberish",
				timeForQuestion: 7,
				score: 200
			},

			{
				id: 3,
				path: "questionsJS/array/swap.js",
				answer: "gibberish",
				timeForQuestion: 7,
				score: 300
			},

			{
				id: 4,
				path: "questionsJS/common/common.js",
				answer: "gibberish",
				timeForQuestion: 7,
				score: 400
			},

			{
				id: 5,
				path: "questionsJS/heap/add.js",
				answer: "gibberish",
				timeForQuestion: 7,
				score: 500
			}
		]

	};
	return configuration;
};

var testPlanConfiguration = new TestPlanConfiguration();
module.exports = testPlanConfiguration;