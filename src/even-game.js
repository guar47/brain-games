// @flow

import readlineSync from 'readline-sync';
import {
  getRandom,
  playGame,
} from '../index';

export default () => {
  const message = 'Answer "yes" if number odd otherwise answer "no".';
  const getExpression = () => getRandom();
  const toQuestion = expression => `${expression}`;
  const getAnswer = () => {
    for (;;) {
      const answer = readlineSync.question('Your answer: ');
      if (answer === 'yes') {
        return 'yes';
      } else if (answer === 'no') {
        return 'no';
      }
      console.log(`${answer} is incorrect, please type "yes" or "no"`);
    }
  };
  const getCorrectAnswer = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  playGame(message, getExpression, toQuestion, getCorrectAnswer, getAnswer);
};
