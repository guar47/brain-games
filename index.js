// @flow
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
const getAnswer = (checkAnswer) => {
  for (;;) {
    const answer = readlineSync.question('Your answer: ');
    if (checkAnswer(answer)) {
      return answer;
    }
    console.log('Your answer is incorrect, please type correct answer');
  }
};
const playGame = (message: string, getExpression: Function,
  toQuestion: Function, getCorrectAnswer: Function, checkAnswer: Function) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${name}`);

  let win;
  for (let i = 1; i < 4; i += 1) {
    const curExpression = getExpression(i);
    console.log(`Question: ${toQuestion(curExpression)}`);
    const curAnswer = String(getAnswer(checkAnswer));
    const correctAnswer = getCorrectAnswer(curExpression);
    if (String(curAnswer) === String(correctAnswer)) {
      console.log('Correct!');
      win = true;
    } else if (curAnswer !== correctAnswer) {
      win = false;
      console.log(`${curAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      break;
    }
  }

  if (win === true) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export {
  getRandom,
  playGame,
};
