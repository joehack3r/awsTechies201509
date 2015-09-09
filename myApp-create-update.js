console.log('Loading event...');

var DOC = require('dynamodb-doc');
var docClient = new DOC.DynamoDB();

exports.handler = function(event, context) {
  console.log(JSON.stringify(event, null, ' '));

  var datetime = new Date().getTime().toString();
  var params = {};
  params.TableName = "dynamoTablePlaceholder";
  params.Item = {
                  id  : event.id,
                  user : event.user,
                  ip : event.ip,
                  text: event.text,
                  lastUpdated: datetime
                };

  var pfunc = function(err, data) { 
    if (err) {
      console.log(err, err.stack);
      context.fail('ERROR: ' + err);
    } else {
      context.succeed('It worked!');
    }
  }

  docClient.putItem(params, pfunc);
};

console.log('Complete!');

// //Sample event:
// {
//   "id": "1001",
//   "user": "joehack3r",
//   "ip" : "255.255.255.255",
//   "text" : "no code injection; allowed here"
// }