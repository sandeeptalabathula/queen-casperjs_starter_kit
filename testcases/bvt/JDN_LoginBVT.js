var fs = require('fs');
var require = patchRequire(require);
require('../../Common/utility');
require('../../Common/common');
require('../../Common/authentication'); 
var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();
var time = currentTime.getHours() + '-' + currentTime.getMinutes() + '-' + currentTime.getSeconds(); 
var fname = "test-at-"+year + "-" + month + "-" + day + "-" + time + ".log";

var file  = fs.pathJoin(fs.workingDirectory, 'testoutput', fname); 
var x = require('casper').selectXPath;
 
// var testInput = null;
// var parsedObj = null; 
// console.log(typeof(input), 'info');
// var inputJson = JSON.stringify(input);
// console.log(inputJson, 'info');
 
// for(var i=0; i < input.length; ++i) {
//     var match = input[i];

//     console.log(JSON.stringify(input), 'info');
//      if (match.TestCaseID == "LoginBVT") {
//         testInput = match;
//         break;
//     }
// }

// console.log(JSON.stringify(testInput), 'info')
// fs.write(file, JSON.stringify(testInput) + '\n', 'w');

casper.options.viewportSize = {width: 1536, height: 734};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});

$$.testCaseID = "LoginBVT"; 

casper.test.begin($$.testCaseID, function(test) {

	$$.Utility.loadTestInput();
	
	casper.start(testInput.Input.Url);
	casper.waitForSelector("form#credentials input[name='login']",
		function success() { 
			test.assertExists("form#credentials input[name='login']");
			this.click("form#credentials input[name='login']"); 
		},
		function fail() {
			test.assertExists("form#credentials input[name='login']");
	}); 
	 
	casper.run(function() {test.done();}); 
}); 