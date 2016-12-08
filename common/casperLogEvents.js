/**
 * Contains all the Common caperEvent for logging which will be helpful in Debugging
 * http://casperjs.readthedocs.org/en/latest/modules/casper.html
 * http://casperjs.readthedocs.org/en/latest/writing_modules.html
 */

var require = patchRequire(require);

casper.on('page.resource.requested', function (requestData, request) {
    this.echo('page.resource.requested:' + JSON.stringify(requestData) + '\n' + JSON.stringify(request));
});

casper.on('resource.received', function (request) {
    this.echo('resource.received:' + JSON.stringify(request));
}); 

casper.on('resource.error', function (resourceError) {
    this.echo('resource.error:' + JSON.stringify(resourceError));
});