// @flow

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number odd otherwise answer "no".');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello ${name}`);

const getRandom = () => Math.floor((Math.random() * 100) + 1);

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

export default () => {
  let win;
  for (let i = 3; i > 0; i -= 1) {
    const curNumber = getRandom();
    console.log(`Question: ${curNumber}`);
    const curAnswer = String(getAnswer());
    const correctAnswer = String(getCorrectAnswer(curNumber));
    if (curAnswer === correctAnswer) {
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
