function receivesAFunction(callback) {
    callback();
}

function callbackFunction() {
    console.log("Callback function called!");
}
receivesAFunction(callbackFunction);

function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function!");
    }
    return namedFunction;
}
const returnedFunction = returnsANamedFunction();
returnedFunction(); 

function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        console.log("This is an anonymous function!");
    };
}
const anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction(); 

