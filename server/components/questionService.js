var beautify_js = require('js-beautify').js;
var beautify_css = require('js-beautify').css;
var beautify_html = require('js-beautify').html;



module.exports = function (app) {
    app.get('/question', function (req, res) {
        var code = 'if(true){return "hi";}';
        var beautifulCode = beautify_js(code);
        var question = {};
        question.content = beautifulCode;
        res.json(201, question);
    });
};
