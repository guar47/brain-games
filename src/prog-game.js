// @flow

import {
  getRandom,
  playGame,
} from '../';

const message = 'What number is missing in this progression?';
const getExpression = () => {
  const expression = [];
  const firstNumber = getRandom(1, 100);
  const difference = getRandom(1, 10);
  expression[0] = firstNumber;
  for (let i = 1; i < 11; i += 1) {
    expression[i] = expression[i - 1] + difference;
  }
  return expression;
};
const toQuestion = (expression) => {
  const string = [];
  for (let i = 0; i < 10; i += 1) {
    string[i] = expression[i];
  }
  string[4] = '..';
  return string.join(' ');
};
const checkAnswer = (answer) => {
  if (Number.isInteger(Number(answer))) {
    return true;
  }
  return false;
};
const getCorrectAnswer = expression => expression[4];

export default () => playGame(message, getExpression, toQuestion, getCorrectAnswer, checkAnswer);
