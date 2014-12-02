var helpers = require("./helpers");
var AWS = require("aws-sdk");
var Queue = require("queuemanager");
var SQSCommand = require("./sqscommand");
var SQSConsole = require("./sqsconsole");


var AWS_CONFIG_FILE = "./config.json";
var APP_CONFIG_FILE = "./app.json";


AWS.config.loadFromPath(AWS_CONFIG_FILE);

var appConfig = helpers.readJSONFile(APP_CONFIG_FILE);

var queue = new Queue(new AWS.SQS(), appConfig.QueueUrl);


var sqsCommand = new SQSCommand(queue);


new SQSConsole(sqsCommand);

