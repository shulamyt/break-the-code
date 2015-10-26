function TestPlanConfiguration(){

};

TestPlanConfiguration.prototype.getConfiguration = function(){
	var configuration = {
		// the following are temporary data !
		numOfQuestionsForPlan: 2, // how many questions we want the experimenter to solve
		questionsInfo : [
			//{
			//	id: 1,
			//	path: "questionsJS/array/equals.js",
			//	answer: "false",
			//	timeForQuestion: 15, // took me 24:50, and I was wrong
			//	score: 999
			//},

			//{
			//	id: 2,
			//	path: "questionsJS/array/frequency.js",
			//	answer: "2",
			//	timeForQuestion: 13, // took me 12:09
			//	score: 999
			//},

			//{
			//	id: 3,
			//	path: "questionsJS/array/indexOf.js",
			//	answer: "2",
			//	timeForQuestion: 15, // took me 15:63
			//	score: 999
			//},

			//{
			//	id: 4,
			//	path: "questionsJS/array/lastIndexOf.js",
			//	answer: "4",
			//	timeForQuestion: 16, // took me 14:62
			//	score: 999
			//},

			//{
			//	id: 5,
			//	path: "questionsJS/array/swap.js",
			//	answer: "x r b p r", //how to write this output ???
			//	timeForQuestion: 30, //took me 31:34
			//	score: 999
			//},


			//{
			//	id: 7,
			//	path: "questionsJS/common/for_if_return_numeric.js",
			//	answer: "1252523453", // how to write this output ???
			//	timeForQuestion: 42, // took me 41
			//	score: 999
			//},

			//{
			//	id: 8,
			//	path: "questionsJS/common/while_if_powerOfTwo.js",
			//	answer: "5",
			//	timeForQuestion: 25, // took me 23:09 and I was wrong (answered 4)
			//	score: 999
			//},

			//{
			//	id: 9,
			//	path: "questionsJS/elseif/1/if_else_false.js",
			//	answer: "134", // how to write this output ???
			//	timeForQuestion: 7, // took me 6:19
			//	score: 999
			//},

			//{
			//	id: 10,
			//	path: "questionsJS/elseif/1/if_else_true.js",
			//	answer: "124",
			//	timeForQuestion: 7, // took me 5:59
			//	score: 999
			//},

			//{
			//	id: 11,
			//	path: "questionsJS/elseif/1/if_elseif_else_false_false.js",
			//	answer: "145",
			//	timeForQuestion: 9, // took me 8:38
			//	score: 999
			//},

			//{
			//	id: 12,
			//	path: "questionsJS/elseif/1/if_elseif_else_false_true.js",
			//	answer: "135",
			//	timeForQuestion: 8, // took me 7:22
			//	score: 999
			//},

			//{
			//	id: 13,
			//	path: "questionsJS/elseif/1/if_elseif_else_true_false.js",
			//	answer: "125",
			//	timeForQuestion: 7, // took me 6:25
			//	score: 999
			//},

			//{
			//	id: 14,
			//	path: "questionsJS/elseif/1/if_elseif_else_true_true.js",
			//	answer: "125",
			//	timeForQuestion: 7, // took me 5:94
			//	score: 999
			//},

			//{
			//	id: 15,
			//	path: "questionsJS/elseif/1/if_if_false.js",
			//	answer: "134",
			//	timeForQuestion: 7, // took me 6:47
			//	score: 999
			//},

			//{
			//	id: 16,
			//	path: "questionsJS/elseif/1/if_if_true.js",
			//	answer: "124",
			//	timeForQuestion: 8, // took me 7:00
			//	score: 999
			//},

			//{
			//	id: 17,
			//	path: "questionsJS/elseif/4/if_else_and_false_false.js",
			//	answer: "134",
			//	timeForQuestion: 7, // took me 5:41
			//	score: 999
			//},

			//{
			//	id: 18,
			//	path: "questionsJS/elseif/4/if_else_and_false_true.js",
			//	answer: "134",
			//	timeForQuestion: 7, // took me 5:16
			//	score: 999
			//},

			//{
			//	id: 19,
			//	path: "questionsJS/elseif/4/if_else_and_true_true.js",
			//	answer: "124",
			//	timeForQuestion: 7, // took me 5:91
			//	score: 999
			//},

			//{
			//	id: 20,
			//	path: "questionsJS/elseif/6/if_else_or_false_false.js",
			//	answer: "134",
			//	timeForQuestion: 8, // took me 6:34
			//	score: 999
			//},

			//{
			//	id: 21,
			//	path: "questionsJS/elseif/6/if_else_or_false_true.js",
			//	answer: "124",
			//	timeForQuestion: 6, // took me 4:25
			//	score: 999
			//},

			{
				id: 22,
				path: "questionsJS/elseif/6/if_else_or_true_true.js",
				answer: "124",
				timeForQuestion: 6, // took me 4:84
				score: 999
			},

		//	{
		//		id: 23,
		//		path: "questionsJS/elseif/7/if_else_or_var_false_false.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 24,
		//		path: "questionsJS/elseif/7/if_else_or_var_false_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 24,
		//		path: "questionsJS/elseif/7/if_else_or_var_true_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 25,
		//		path: "questionsJS/elseif/8/if_elseif_else_var_false_false.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 26,
		//		path: "questionsJS/elseif/8/if_elseif_else_var_false_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 27,
		//		path: "questionsJS/elseif/8/if_elseif_else_var_true_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 28,
		//		path: "questionsJS/elseif/9/if_else_and_var_false_negative_false.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 29,
		//		path: "questionsJS/elseif/9/if_else_and_var_false_negative_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 30,
		//		path: "questionsJS/elseif/9/if_else_and_var_negative_false_false.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 31,
		//		path: "questionsJS/elseif/9/if_else_and_var_negative_false_negative_false.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 32,
		//		path: "questionsJS/elseif/9/if_else_and_var_negative_false_negative_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 33,
		//		path: "questionsJS/elseif/9/if_else_and_var_negative_false_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 34,
		//		path: "questionsJS/elseif/9/if_else_and_var_negative_true_negative_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 35,
		//		path: "questionsJS/elseif/9/if_else_and_var_negative_true_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 36,
		//		path: "questionsJS/elseif/9/if_else_and_var_true_negative_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 37,
		//		path: "questionsJS/elseif/9/if_else_or_var_false_negative_false.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 38,
		//		path: "questionsJS/elseif/9/if_else_or_var_false_negative_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 39,
		//		path: "questionsJS/elseif/9/if_else_or_var_negative_false_false.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 40,
		//		path: "questionsJS/elseif/9/if_else_or_var_negative_false_negative_false.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 41,
		//		path: "questionsJS/elseif/9/if_else_or_var_negative_false_negative_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 42,
		//		path: "questionsJS/elseif/9/if_else_or_var_negative_false_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 43,
		//		path: "questionsJS/elseif/9/if_else_or_var_negative_true_negative_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 44,
		//		path: "questionsJS/elseif/9/if_else_or_var_negative_true_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 45,
		//		path: "questionsJS/elseif/9/if_else_or_var_true_negative_true.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 46,
		//		path: "questionsJS/elseif/depth/3/if_and.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 47,
		//		path: "questionsJS/elseif/depth/3/if_and_all_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 48,
		//		path: "questionsJS/elseif/depth/3/if_and_one_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 49,
		//		path: "questionsJS/elseif/depth/3/if_and_separate.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 50,
		//		path: "questionsJS/elseif/depth/3/if_and_separate_all_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 51,
		//		path: "questionsJS/elseif/depth/3/if_and_separate_one_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 52,
		//		path: "questionsJS/elseif/depth/3/if_or.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 53,
		//		path: "questionsJS/elseif/depth/3/if_or_all_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 54,
		//		path: "questionsJS/elseif/depth/3/if_or_one_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 55,
		//		path: "questionsJS/elseif/depth/3/if_or_separate.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 56,
		//		path: "questionsJS/elseif/depth/3/if_or_separate_all_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 57,
		//		path: "questionsJS/elseif/depth/3/if_or_separate_one_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 58,
		//		path: "questionsJS/elseif/depth/5/if_and.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 59,
		//		path: "questionsJS/elseif/depth/5/if_and_all_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 60,
		//		path: "questionsJS/elseif/depth/5/if_and_one_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 61,
		//		path: "questionsJS/elseif/depth/5/if_and_separate.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 62,
		//		path: "questionsJS/elseif/depth/5/if_and_separate_all_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 63,
		//		path: "questionsJS/elseif/depth/5/if_and_separate_one_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 64,
		//		path: "questionsJS/elseif/depth/5/if_or.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 65,
		//		path: "questionsJS/elseif/depth/5/if_or_all_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 66,
		//		path: "questionsJS/elseif/depth/5/if_or_one_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 67,
		//		path: "questionsJS/elseif/depth/5/if_or_separate.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 68,
		//		path: "questionsJS/elseif/depth/5/if_or_separate_all_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 69,
		//		path: "questionsJS/elseif/depth/5/if_or_separate_one_negative.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 70,
		//		path: "questionsJS/elseif/depth/options.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},
        //
		//	{
		//		id: 71,
		//		path: "questionsJS/heap/add.js",
		//		answer: "gibberish",
		//		timeForQuestion: 999,
		//		score: 999
		//	},

		]
	};
	return configuration;
};

var testPlanConfiguration = new TestPlanConfiguration();
module.exports = testPlanConfiguration;