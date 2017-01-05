// @flow

import {
  getRandom,
  playGame,
} from '../';

export default () => {
  const message = 'Answer "yes" if number odd otherwise answer "no".';
  const getExpression = () => getRandom();
  const toQuestion = expression => `${expression}`;
  const checkAnswer = (answer) => {
    if (answer === 'yes' || answer === 'no') {
      return true;
    }
    return false;
  };
  const getCorrectAnswer = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  playGame(message, getExpression, toQuestion, getCorrectAnswer, checkAnswer);
};
