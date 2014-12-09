(function() 
{
	var helpers = require("./helpers");
	var Queue = require("queuemanager");
	var SQSCommand = require("./sqscommand");
	var SQSConsole = require("./sqsconsole");

	var AWS_CONFIG_FILE = "./config.json";
	var APP_CONFIG_FILE = "./app.json";

	var initConsole = function(AWS) {
			var appConfig = helpers.readJSONFile(APP_CONFIG_FILE);
			var queue = new Queue(new AWS.SQS(), appConfig.QueueUrl);
			var sqsCommand = new SQSCommand(queue);
			new SQSConsole(sqsCommand);
	}
		
	
	require("./awshelper").initAWS(initConsole, AWS_CONFIG_FILE);
		

})()