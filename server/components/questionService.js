var beautify_js = require('js-beautify').js;
fs = require('fs');

module.exports = function (app) {
    app.get('/question', function (req, res) {
        var fileName = "q1";
        var filePath = __dirname + "/../../questions/" + fileName + ".json";
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            var questionMetadata = JSON.parse(data);
            var beautifulCode = beautify_js(questionMetadata.code);
            var question = {};
            question.content = beautifulCode;
            res.json(201, question);
        });

    });
};
