/**
 * Contains all the Common actions might required by App
 */
var require = patchRequire(require);
require('./Utility');

var Common = {};

Common.captureScreen = function (postFix) {
    if (postFix == undefined) {
        postFix = $$.testCaseID;
    }
    else {
        postFix = $$.testCaseID + '_' + postFix;
    }
    casper.screenCapture(postFix, true);
}
exports.captureScreen = Common.captureScreen;
 
casper.screenCapture = function (filename, force) {
    // If we are not capturing, simply return.
    if (!force) {
        return;
    }
    // If we didn't get a filename, use an empty string.
    if (utils.isFalsy(filename)) {
        filename = '';
    }
        // Otherwise, add a dash delimiter to the end.
    else {
        filename += '-';
    }
    // Make the filename unique with a timestamp.
    filename += new Date().getTime();

    var screenshot = "D:\\EXPERIMENT\\CASPER\\testoutput"+'/' + $$.testCaseID + '/screenshots/' + filename + '.jpg',
        markup = "D:\\EXPERIMENT\\CASPER\\testoutput"+'/' + $$.testCaseID + '/pages/' + filename + '.html',
        prefix = '',
        screenshot_url = screenshot,
        markup_url = markup;

    this.capture(prefix + screenshot);
    this.test.comment(f('Saved screenshot to %s.', screenshot_url));
    this.savePageContent(prefix + markup);
    this.test.comment(f('Saved markup to %s.', markup_url));
};

$$.Common = Common;