// @flow

import {
  getRandom,
  playGame,
} from '../';

export default () => {
  const message = 'What is the result of the expression?';
  const getExpression = (attempt) => {
    const expression = {};
    expression.firstNumber = getRandom(1, 100);
    expression.secondNumber = getRandom(1, 100);
    switch (attempt) {
      case 1:
        expression.sign = '+';
        break;
      case 2:
        expression.sign = '-';
        break;
      case 3:
        expression.sign = '*';
        break;
      default:
        break;
    }
    return expression;
  };
  const toQuestion = expression => `${expression.firstNumber} ${expression.sign} ${expression.secondNumber}`;
  const checkAnswer = (answer) => {
    if (Number.isInteger(Number(answer))) {
      return true;
    }
    return false;
  };
  const getCorrectAnswer = (expression) => {
    let answer = 0;
    switch (expression.sign) {
      case '+':
        answer = expression.firstNumber + expression.secondNumber;
        break;
      case '-':
        answer = expression.firstNumber - expression.secondNumber;
        break;
      case '*':
        answer = expression.firstNumber * expression.secondNumber;
        break;
      default:
        break;
    }
    return answer;
  };
  playGame(message, getExpression, toQuestion, getCorrectAnswer, checkAnswer);
};
