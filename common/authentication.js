/**
 * Take care of Authentication of the App.
 */
var require = patchRequire(require);
var Authentication = {}; 

Authentication.Signin = function signin(fs, file) { 
        console.log("sign in"); 
}; 
exports.Signin = Authentication.Signin;

Authentication.Signout = function signout(fs, file) { 
        console.log("sign out"); 
}; 
exports.Signout = Authentication.Signout;


$$.Authentication = Authentication;