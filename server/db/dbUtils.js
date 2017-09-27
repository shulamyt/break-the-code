function DBUtils(){

};

DBUtils.prototype.jsonToUpdateQuery = function(json, tableName, ignore){
    var queryPart1 = "UPDATE  "+ tableName + " SET ";
    for(var prop in json) {
        var value = json[prop];
        if(ignore && ignore.indexOf(prop) != -1 || value == null || value == undefined | prop=="id"){
            continue;
        }
        var valueRepresentation = this.getRepresentation(value);
        queryPart1 = queryPart1 + prop + " = " + valueRepresentation+ ", ";
    }
    queryPart1 = queryPart1.substring(0, queryPart1.length - 2);
    queryPart1 = queryPart1 + " WHERE id = " + json["id"] + ";";
    var query = queryPart1;
    console.log(query);
    return query;
};

DBUtils.prototype.getStringRepresentation = function(value){
    if(typeof value === "string"){
        return "'"+ value + "'";
    }
};

DBUtils.prototype.getRepresentation = function(value){
        var valueRepresentation;
        if(typeof value === "string"){
            valueRepresentation = this.getStringRepresentation(value);
        }
        else if(Object.prototype.toString.call( value ) === '[object Array]' ){
            valueRepresentation = this.getArrayRepresentation(value);
        }
        else{
            valueRepresentation = value;
        }
        return valueRepresentation;
};


DBUtils.prototype.getArrayRepresentation = function(value){
    if(Object.prototype.toString.call( value ) === '[object Array]'){
        var arrayRepresentation = "'{";
        if(value.length > 0){
            for (var item of value) {
                if (typeof item === "string") {
                    arrayRepresentation = arrayRepresentation + '"' + item + '"' + ", ";
                } else {
                    arrayRepresentation = arrayRepresentation + item + ", ";
                }
            }
            arrayRepresentation = arrayRepresentation.substring(0, arrayRepresentation.length - 2);
        }
        arrayRepresentation = arrayRepresentation + "}'";
    }
    return arrayRepresentation;
};


DBUtils.prototype.jsonToInsertQuery = function(json, tableName, ignore){
    var queryPart1 = "INSERT INTO "+ tableName + " (";
    var queryPart2 = " VALUES (";
    for(var prop in json) {
        var value = json[prop];
        if(ignore && ignore.indexOf(prop) != -1 || value == null || value == undefined){
            continue;
        }
        queryPart1 = queryPart1 + prop+", ";
        var valueRepresentation = this.getRepresentation(value);
        queryPart2 = queryPart2 + valueRepresentation + ", ";
    }
    queryPart1 = queryPart1.substring(0, queryPart1.length - 2) + ")";
    queryPart2 = queryPart2.substring(0, queryPart2.length - 2) + ")";
    var query = queryPart1 + queryPart2;
    return query;
};

DBUtils.prototype.runQuery = function(pool, queryStr){
    return new Promise(function(resolve, reject) {
        pool.connect((err, client, release) => {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            client.query(queryStr, (err, result) => {
                release();
                if (err) {
                    return console.error('Error executing query', err.stack);
                }
                resolve(result.rows);
            })
        })
    });
};

var dbUtils = new DBUtils();
module.exports = dbUtils;