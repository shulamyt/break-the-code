function TestPlanConfiguration(){

};

TestPlanConfiguration.prototype.getConfiguration = function(){
	var configuration = {
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

			//{
			//	id: 22,
			//	path: "questionsJS/elseif/6/if_else_or_true_true.js",
			//	answer: "124",
			//	timeForQuestion: 6, // took me 4:84
			//	score: 999
			//},

			//{
			//	id: 23,
			//	path: "questionsJS/elseif/7/if_else_or_var_false_false.js",
			//	answer: "134",
			//	timeForQuestion: 9, // took me 8:16
			//	score: 999
			//},

			//{
			//	id: 24,
			//	path: "questionsJS/elseif/7/if_else_or_var_false_true.js",
			//	answer: "124",
			//	timeForQuestion: 6, // took me 5:19
			//	score: 999
			//},

			//{
			//	id: 24,
			//	path: "questionsJS/elseif/7/if_else_or_var_true_true.js",
			//	answer: "124", // how to write this output ???
			//	timeForQuestion: 6, // took me 5:71
			//	score: 999
			//},

			//{
			//	id: 25,
			//	path: "questionsJS/elseif/8/if_elseif_else_var_false_false.js",
			//	answer: "145", // how to write this output ???
			//	timeForQuestion: 9, // took me 8:09
			//	score: 999
			//},

			//{
			//	id: 26,
			//	path: "questionsJS/elseif/8/if_elseif_else_var_false_true.js",
			//	answer: "125", // how to write this output ???
			//	timeForQuestion: 7, // took me 5:50
			//	score: 999
			//},

			//{
			//	id: 27,
			//	path: "questionsJS/elseif/8/if_elseif_else_var_true_true.js",
			//	answer: "125",
			//	timeForQuestion: 7, // took me 5:72
			//	score: 999
			//},

			//{
			//	id: 28,
			//	path: "questionsJS/elseif/9/if_else_and_var_false_negative_false.js",
			//	answer: "134",
			//	timeForQuestion: 10, // took me 8:35
			//	score: 999
			//},

			//{
			//	id: 29,
			//	path: "questionsJS/elseif/9/if_else_and_var_false_negative_true.js",
			//	answer: "124",
			//	timeForQuestion: 9, // took me 7:69
			//	score: 999
			//},

			//{
			//	id: 30,
			//	path: "questionsJS/elseif/9/if_else_and_var_negative_false_false.js",
			//	answer: "134",
			//	timeForQuestion: 8, // took me 7:00
			//	score: 999
			//},

			//{
			//	id: 31,
			//	path: "questionsJS/elseif/9/if_else_and_var_negative_false_negative_false.js",
			//	answer: "124",
			//	timeForQuestion: 8, // took me 6:91
			//	score: 999
			//},

			//{
			//	id: 32,
			//	path: "questionsJS/elseif/9/if_else_and_var_negative_false_negative_true.js",
			//	answer: "134",
			//	timeForQuestion: 10, // took me 12:91
			//	score: 999
			//},

			//{
			//	id: 33,
			//	path: "questionsJS/elseif/9/if_else_and_var_negative_false_true.js",
			//	answer: "134",
			//	timeForQuestion: 10, // took me 8:25
			//	score: 999
			//},

			//{
			//	id: 34,
			//	path: "questionsJS/elseif/9/if_else_and_var_negative_true_negative_true.js",
			//	answer: "134",
			//	timeForQuestion: 10, // took me 4:47
			//	score: 999
			//},

			//{
			//	id: 35,
			//	path: "questionsJS/elseif/9/if_else_and_var_negative_true_true.js",
			//	answer: "134",
			//	timeForQuestion: 9, // took me 5:53
			//	score: 999
			//},

			//{
			//	id: 36,
			//	path: "questionsJS/elseif/9/if_else_and_var_true_negative_true.js",
			//	answer: "134",
			//	timeForQuestion: 9, // took me 7:51
			//	score: 999
			//},

			//{
			//	id: 37,
			//	path: "questionsJS/elseif/9/if_else_or_var_false_negative_false.js",
			//	answer: "124",
			//	timeForQuestion: 9, // took me 7:16
			//	score: 999
			//},

			//{
			//	id: 38,
			//	path: "questionsJS/elseif/9/if_else_or_var_false_negative_true.js",
			//	answer: "124",
			//	timeForQuestion: 8, // took me 5:59
			//	score: 999
			//},

			//{
			//	id: 39,
			//	path: "questionsJS/elseif/9/if_else_or_var_negative_false_false.js",
			//	answer: "124",
			//	timeForQuestion: 8, // took me 6:42
			//	score: 999
			//},

			//{
			//	id: 40,
			//	path: "questionsJS/elseif/9/if_else_or_var_negative_false_negative_false.js",
			//	answer: "124",
			//	timeForQuestion: 8, // took me 5:25
			//	score: 999
			//},

			//{
			//	id: 41,
			//	path: "questionsJS/elseif/9/if_else_or_var_negative_false_negative_true.js",
			//	answer: "124",
			//	timeForQuestion: 9, // took me 7:22
			//	score: 999
			//},

			//{
			//	id: 42,
			//	path: "questionsJS/elseif/9/if_else_or_var_negative_false_true.js",
			//	answer: "134",
			//	timeForQuestion: 8, // took me 6:15
			//	score: 999
			//},

			//{
			//	id: 43,
			//	path: "questionsJS/elseif/9/if_else_or_var_negative_true_negative_true.js",
			//	answer: "134",
			//	timeForQuestion: 9, // took me 7:22
			//	score: 999
			//},

			//{
			//	id: 44,
			//	path: "questionsJS/elseif/9/if_else_or_var_negative_true_true.js",
			//	answer: "124",
			//	timeForQuestion: 8, // took me 5:59
			//	score: 999
			//},

			//{
			//	id: 45,
			//	path: "questionsJS/elseif/9/if_else_or_var_true_negative_true.js",
			//	answer: "124",
			//	timeForQuestion: 7, // took me 4:34
			//	score: 999
			//},

			//{
			//	id: 46,
			//	path: "questionsJS/elseif/depth/3/if_and.js",
			//	answer: "1",
			//	timeForQuestion: 7, // took me 5:72
			//	score: 999
			//},

			//{
			//	id: 47,
			//	path: "questionsJS/elseif/depth/3/if_and_all_negative.js",
			//	answer: "",
			//	timeForQuestion: 6, // took me 4:32
			//	score: 999
			//},

			//{
			//	id: 48,
			//	path: "questionsJS/elseif/depth/3/if_and_one_negative.js",
			//	answer: "",
			//	timeForQuestion: 7, // took me 5:75
			//	score: 999
			//},

			//{
			//	id: 49,
			//	path: "questionsJS/elseif/depth/3/if_and_separate.js",
			//	answer: "1",
			//	timeForQuestion: 7, // took me 5:72
			//	score: 999
			//},

			//{
			//	id: 50,
			//	path: "questionsJS/elseif/depth/3/if_and_separate_all_negative.js",
			//	answer: "",
			//	timeForQuestion: 7, // took me 4:94
			//	score: 999
			//},

			//{
			//	id: 51,
			//	path: "questionsJS/elseif/depth/3/if_and_separate_one_negative.js",
			//	answer: "1",
			//	timeForQuestion: 8, // took me 6:03
			//	score: 999
			//},

			//{
			//	id: 52,
			//	path: "questionsJS/elseif/depth/3/if_or.js",
			//	answer: "gibberish",
			//	timeForQuestion: 7, // took me 5:56
			//	score: 999
			//},

			//{
			//	id: 53,
			//	path: "questionsJS/elseif/depth/3/if_or_all_negative.js",
			//	answer: "",
			//	timeForQuestion: 7, // took me 4:50
			//	score: 999
			//},

			//{
			//	id: 54,
			//	path: "questionsJS/elseif/depth/3/if_or_one_negative.js",
			//	answer: "1",
			//	timeForQuestion: 6, // took me 4:09
			//	score: 999
			//},

			//{
			//	id: 55,
			//	path: "questionsJS/elseif/depth/3/if_or_separate.js",
			//	answer: "111",
			//	timeForQuestion: 9, // took me 7:28
			//	score: 999
			//},

			//{
			//	id: 56,
			//	path: "questionsJS/elseif/depth/3/if_or_separate_all_negative.js",
			//	answer: "",
			//	timeForQuestion: 7, // took me 4:78
			//	score: 999
			//},

			//{
			//	id: 57,
			//	path: "questionsJS/elseif/depth/3/if_or_separate_one_negative.js",
			//	answer: "13",
			//	timeForQuestion: 7, // took me 4:72
			//	score: 999
			//},

			//{
			//	id: 58,
			//	path: "questionsJS/elseif/depth/5/if_and.js",
			//	answer: "1",
			//	timeForQuestion: 8, // took me 6:71
			//	score: 999
			//},

			//{
			//	id: 59,
			//	path: "questionsJS/elseif/depth/5/if_and_all_negative.js",
			//	answer: "",
			//	timeForQuestion: 7, // took me 5:10
			//	score: 999
			//},

			//{
			//	id: 60,
			//	path: "questionsJS/elseif/depth/5/if_and_one_negative.js",
			//	answer: "",
			//	timeForQuestion: 7, // took me 4:34
			//	score: 999
			//},

			//{
			//	id: 61,
			//	path: "questionsJS/elseif/depth/5/if_and_separate.js",
			//	answer: "12345",
			//	timeForQuestion: 18, // took me 25:40
			//	score: 999
			//},

			//{
			//	id: 62,
			//	path: "questionsJS/elseif/depth/5/if_and_separate_all_negative.js",
			//	answer: "",
			//	timeForQuestion: 10, // took me 9:78
			//	score: 999
			//},

			//{
			//	id: 63,
			//	path: "questionsJS/elseif/depth/5/if_and_separate_one_negative.js",
			//	answer: "12",
			//	timeForQuestion: 14, // took me 12:72
			//	score: 999
			//},

			//{
			//	id: 64,
			//	path: "questionsJS/elseif/depth/5/if_or.js",
			//	answer: "1",
			//	timeForQuestion: 6, // took me 4:28
			//	score: 999
			//},

			//{
			//	id: 65,
			//	path: "questionsJS/elseif/depth/5/if_or_all_negative.js",
			//	answer: "gibberish",
			//	timeForQuestion: 7, // took me 5:94
			//	score: 999
			//},

			//{
			//	id: 66,
			//	path: "questionsJS/elseif/depth/5/if_or_one_negative.js",
			//	answer: "1",
			//	timeForQuestion: 6, // took me 4:18
			//	score: 999
			//},

			//{
			//	id: 67,
			//	path: "questionsJS/elseif/depth/5/if_or_separate.js",
			//	answer: "12345",
			//	timeForQuestion: 11, // took me 10:09
			//	score: 999
			//},

			//{
			//	id: 68,
			//	path: "questionsJS/elseif/depth/5/if_or_separate_all_negative.js",
			//	answer: "",
			//	timeForQuestion: 10, // took me 7:75
			//	score: 999
			//},

			//{
			//	id: 69,
			//	path: "questionsJS/elseif/depth/5/if_or_separate_one_negative.js",
			//	answer: "12",
			//	timeForQuestion: 12, // took me 10:22
			//	score: 999
			//},

			/*{
				id: 70,
				path: "questionsJS/elseif/depth/options.js", - NOT CODE !!!
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},*/

			/*{
				id: 71,
				path: "questionsJS/heap/add.js", - NOT CODE !!!
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},*/

			{
				id: 72,
				path: "questionsJS/iteration/for/for_end_1.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 73,
				path: "questionsJS/iteration/for/for_end_2.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 74,
				path: "questionsJS/iteration/for/for_end_3.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 75,
				path: "questionsJS/iteration/for/for_end_4.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 76,
				path: "questionsJS/iteration/for/for_end_5.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 77,
				path: "questionsJS/iteration/for/for_regular.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 78,
				path: "questionsJS/iteration/for/for_start_from_1.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 79,
				path: "questionsJS/iteration/for_condition/for.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 80,
				path: "questionsJS/iteration/for_condition/for_break.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 81,
				path: "questionsJS/iteration/for_condition/for_break_nagtive.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 82,
				path: "questionsJS/iteration/for_condition/for_continue_negative.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 83,
				path: "questionsJS/iteration/for_condition/for_negative.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 84,
				path: "questionsJS/iteration/for_in/for_regular.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 85,
				path: "questionsJS/iteration/for_odd/for_odd_locations.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 86,
				path: "questionsJS/iteration/for_odd/for_odd_locations_break.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 87,
				path: "questionsJS/iteration/for_odd/for_odd_locations_break_nagtive.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 88,
				path: "questionsJS/iteration/for_odd/for_odd_locations_continue.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 89,
				path: "questionsJS/iteration/for_odd/for_odd_locations_continue_negative.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 90,
				path: "questionsJS/iteration/for_odd/for_odd_locations_negative.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 91,
				path: "questionsJS/iteration/iterator/for_regular.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 92,
				path: "questionsJS/iteration/while/while.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 93,
				path: "questionsJS/iteration/while/while_odd_locations.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 94,
				path: "questionsJS/list/concatenate.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 95,
				path: "questionsJS/list/deepCopy.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 96,
				path: "questionsJS/list/equals.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 97,
				path: "questionsJS/list/findMiddle.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 98,
				path: "questionsJS/list/frequency.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 99,
				path: "questionsJS/list/indexOf.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 100,
				path: "questionsJS/list/inList.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 101,
				path: "questionsJS/list/merge.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 102,
				path: "questionsJS/list/printList.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 103,
				path: "questionsJS/list/reverse.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 104,
				path: "questionsJS/list/split.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 105,
				path: "questionsJS/list/subset.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},

			{
				id: 106,
				path: "questionsJS/map/insert.js",
				answer: "gibberish",
				timeForQuestion: 999,
				score: 999
			},


		]
	};
	return configuration;
};

var testPlanConfiguration = new TestPlanConfiguration();
module.exports = testPlanConfiguration;