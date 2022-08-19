function receivesAFunction(callback) {
  console.log(callback());
}

  
  function returnsANamedFunction() {
    const innerFunction = function (name) {
    };
    return innerFunction;
  }
  returnsANamedFunction;


  function returnsAnAnonymousFunction() {
    const part1 = "hi";
    return function () {
        console.log(part1);
      };
    };
  returnsAnAnonymousFunction();
