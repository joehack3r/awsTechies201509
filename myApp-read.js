console.log('Loading event...');

var DOC = require('dynamodb-doc');
var docClient = new DOC.DynamoDB();

exports.handler = function(event, context) {
  var tableName = "dynamoTablePlaceholder";
  docClient.scan({
    TableName: tableName,
    Limit : 50
    },
    function(err, data) { 
      if (err) {
        console.log(err, err.stack);
        context.fail('ERROR: ' + err);
      } else {
        var response = {};
        response.records = [];
        for (var i in data.Items) {
          console.log(data.Items[i]);
          response.records.push(data.Items[i]);
        }
        console.log(response);
        context.succeed(response);
      }
    }
  );
};

console.log('Complete!');