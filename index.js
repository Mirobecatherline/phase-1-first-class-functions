
function callback() {
    const Spy=10;
}
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function named() {
        
  }
} 
function returnsAnAnonymousFunction() {
    return function () {
        console.log("is an anonymous function");
    }
}
//solution

