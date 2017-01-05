// @flow

import readlineSync from 'readline-sync';
import {
  getRandom,
  playGame,
} from '../index';

export default () => {
  const message = 'What is the result of the expression?';
  const getExpression = (attempt) => {
    const expression = {};
    expression.firstNumber = getRandom();
    expression.secondNumber = getRandom();
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
  const getAnswer = () => {
    for (;;) {
      const answer = Number(readlineSync.question('Your answer: '));
      if (Number.isInteger(answer)) {
        return answer;
      }
      console.log('Your answer is incorrect, please type an integer number');
    }
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
  playGame(message, getExpression, toQuestion, getCorrectAnswer, getAnswer);
};
