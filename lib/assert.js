(function(exports) {
  function report(test, passed) {
    if (passed) console.log(test + ": Passed");
    else throw new Error(test + ": Failed");
  }

  function isTrue(assertionToCheck) {
    report(arguments.callee.caller.name, assertionToCheck);
  }
  
exports.assert ={
  isTrue: isTrue
}
})(this);
