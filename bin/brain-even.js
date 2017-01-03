#!/usr/bin/env node
 // @flow
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number odd otherwise answer "no".');

const name = readlineSync.question('May I have your name?: ');
const getRandom = () => Math.floor((Math.random() * 100) + 1);
let oppositeAnswer = '';
console.log(`Hello ${name}`);


for (let i = 3; i >= 0; i -= 1) {
  if (i === 0) {
    console.log(`Congratulations, ${name}`);
    break;
  }
  const currentRandom = getRandom();
  console.log(`Question: ${currentRandom}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === 'yes') {
    oppositeAnswer = 'no';
  } else if (answer === 'no') {
    oppositeAnswer = 'yes';
  } else {
    console.log(`Answer ${answer} is not correct. You shoul type 'yes' or 'no'`);
    break;
  }
  if (currentRandom % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
  } else if (currentRandom % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${oppositeAnswer}.`);
    break;
  }
}
