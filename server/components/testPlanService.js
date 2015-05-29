var TestPlanService = function(){
    this.getTestPlan = function(){
        return ["q1", "q2", "q3"];
    }
};
var testPlanService = new TestPlanService();
module.exports = testPlanService;

