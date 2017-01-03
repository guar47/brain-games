#!/usr/bin/env node
 // @flow
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const actual = readlineSync.question('Your answer: ');
console.log(`Hello ${actual}`);
