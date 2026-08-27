'use strict';

function makeRobotAccountant() {
  let calls = 0;

  return function getSum(a) {
    return function addNumber(b) {
      calls += 1;

      if (calls > 3 && calls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
