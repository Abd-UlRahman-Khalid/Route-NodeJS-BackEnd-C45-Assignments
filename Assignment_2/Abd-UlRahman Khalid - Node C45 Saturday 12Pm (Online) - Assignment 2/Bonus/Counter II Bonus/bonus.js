var createCounter = function (init) {
  let number = init;
  return {
    increment: function () {
      number++;
      return number;
    },
    reset: function () {
      number = init;
      return number;
    },
    decrement: function () {
      number--;
      return number;
    },
  };
};
