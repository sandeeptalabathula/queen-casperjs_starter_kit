/**
 * Contains all the Common Events on which Casper Listen & import input file
 * http://casperjs.readthedocs.org/en/latest/modules/casper.html
 * http://casperjs.readthedocs.org/en/latest/writing_modules.html
 */
require('./Common');
var testResult = {
    "Success": "0",
    "Error": "1",
    "Fail": "2",
    "TimedOut": "3",
};

casper.test.on("fail", function () {
    casper.echo("---------------- Test case has Failed! ---------------- ");
    casper.screenCapture('Testfail', true);
    casper.die(testResult.Fail, "onFail");
});
 
casper.on('error', function (msg) {
    this.echo('error:' + msg);
    casper.screenCapture('TestFailOnError', true);
    casper.die(testResult.Error, "onError");
});
  
casper.on('remote.message', function (msg) {
    this.echo('remote message caught: ' + msg);
});