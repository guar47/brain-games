// @flow

import {
  getRandom,
  playGame,
} from '../';

const message = 'Balance the given number.';
const getExpression = () => getRandom(1, 10000);
const toQuestion = expression => expression.toString();
const checkAnswer = (answer) => {
  if (Number.isInteger(Number(answer))) {
    return true;
  }
  return false;
};
const getMaxOfArray = array => Math.max.apply(null, array);
const getMinOfArray = array => Math.min.apply(null, array);
const balanceNumber = (array, biggest, smallest) => {
  const arrayFigures = array;
  if (biggest - smallest < 2) {
    return arrayFigures.sort().join('');
  }
  arrayFigures[arrayFigures.indexOf(biggest)] -= 1;
  arrayFigures[arrayFigures.indexOf(smallest)] += 1;
  return balanceNumber(arrayFigures, getMaxOfArray(arrayFigures), getMinOfArray(arrayFigures));
};
const getCorrectAnswer = (expression) => {
  const figures = String(expression).split('').map(a => Number(a));
  return balanceNumber(figures, getMaxOfArray(figures), getMinOfArray(figures));
};

export default () => playGame(message, getExpression, toQuestion, getCorrectAnswer, checkAnswer);
