var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/break-the-code', function (err) {
    if (err){
        throw err;
    }
    console.log('mongodb connected')
});

module.exports = mongoose;


