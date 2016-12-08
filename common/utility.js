$$ = {};
$$.testCaseID = null;
var require = patchRequire(require);
//// Import the common Casper events
require('./CasperTestEvents.js')

var fs = require("fs");
var path = require('path'); 
configFile = fs.read('../testconfig.json');
$$.config = JSON.parse(configFile);

var testInputFilePath = path.join(__dirname, $$.config.TestInputFile);

console.log('testInputFilePath'+testInputFilePath)
inputFile = fs.read($$.config.TestInputFile);
$$.TestInputs = JSON.parse(inputFile);
console.log('$$.TestInputs'+$$.TestInputs)
$$.applicationUrl = $$.TestInputs.Environment.Url;
console.log('$$.applicationUrl'+$$.applicationUrl);
if ($$.config.Debug === true) {
    // import only if Debugging is required
    require('./CasperLogEvents.js');
}

var Utility = {}; 

Utility.loadTestInput = function () {
    console.log('comment'+$$.TestInputs.TestCases);
    casper.then(function () {
        var found = false;
        $$.TestInputs.TestCases.forEach(function (testCase) {
            if (testCase.TestCaseID === $$.testCaseID) {
                $$.testInput = testCase;
                found = true;
            }
        });
        this.test.assert(found, "Checking InputFile for  Testcase ID :" + $$.testCaseID);
    });
};
exports.loadTestInput = Utility.loadTestInput; 
 
$$.Utility = Utility;