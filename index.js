function receivesAFunction(cb) {
  cb();
}

function returnsANamedFunction() {
  return function named() {
    return "I think this is right";
  };
}

function returnsAnAnonymousFunction() {
  return () => 2 + 2;
}
