// @flow

import readlineSync from 'readline-sync';

const getRandom = () => Math.floor((Math.random() * 100) + 1);
const getAnswer = (checkAnswer) => {
  for (;;) {
    const answer = readlineSync.question('Your answer: ');
    if (checkAnswer(answer)) {
      return answer;
    }
    console.log('Your answer is incorrect, please type correct answer');
  }
};
const playGame = (message, getExpression, toQuestion, getCorrectAnswer, checkAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${name}`);

  let win;
  for (let i = 1; i < 4; i += 1) {
    const curExpression = getExpression(i);
    console.log(`Question: ${toQuestion(curExpression)}`);
    const curAnswer = getAnswer(checkAnswer);
    const correctAnswer = getCorrectAnswer(curExpression);
    if (String(curAnswer) === String(correctAnswer)) {
      console.log('Correct!');
      win = true;
    } else if (String(curAnswer) !== String(correctAnswer)) {
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
