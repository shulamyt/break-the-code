function DBUtils(){

};

DBUtils.prototype.jsonToInsertQuery = function(json, tableName, propertiesTypeText, propertiesTypeArray, propertiesTypeTextArray){
    var queryPart1 = "INSERT INTO "+ tableName + " (";
    var queryPart2 = " VALUES (";
    for(var prop in json) {
        if(json[prop] == undefined || json[prop] == null){
            continue;
        }
        queryPart1 = queryPart1 + prop+", ";
        if(propertiesTypeText && propertiesTypeText.indexOf(prop)!= -1){
            queryPart2 = queryPart2 + "'"+ json[prop] + "'";
        }
        else if(propertiesTypeArray && propertiesTypeArray.indexOf(prop)!= -1){
            queryPart2 = queryPart2 + "'{";
            for(var item of json[prop]){
                queryPart2 = queryPart2 + item + ", ";
            }
            queryPart2 = queryPart2.substring(0, queryPart2.length - 2);
            queryPart2 = queryPart2 + "}'";
        }
        else if(propertiesTypeTextArray && propertiesTypeTextArray.indexOf(prop)!= -1){
            queryPart2 = queryPart2 + "'{";
            for(var item of json[prop]){
                queryPart2 = queryPart2 + '"'+item+'"' + ", ";
            }
            queryPart2 = queryPart2.substring(0, queryPart2.length - 2);
            queryPart2 = queryPart2 + "}'";
        }
        else{
            queryPart2 = queryPart2 + json[prop];
        }
        queryPart2 = queryPart2 + ", ";
    }
    queryPart1 = queryPart1.substring(0, queryPart1.length - 2) + ")";
    queryPart2 = queryPart2.substring(0, queryPart2.length - 2) + ")";
    var query = queryPart1 + queryPart2;
    return query;
};

var dbUtils = new DBUtils();
module.exports = dbUtils;