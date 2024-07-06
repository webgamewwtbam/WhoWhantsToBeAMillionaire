// This prompt ask user for input
const prompt = require('prompt-sync')({ sigint: true });
// Create question object
const question = {
    question: 'In the UK, the abbreviation NHS stands for National what Service?',
    answers: ['Humanity', 'Health', 'Honor', 'Household'],
    correctAnswer: 'Health'
};

// Ask for user name
console.log('Hi! Please type your name below:');
const userName = prompt();
console.clear();

// Ask question
console.log(`${userName}, your question is:\n`)
console.log(`${question.question}\n`);

// Show possible answers
function showPossibleAnswers() {
    console.log(`Your options are:

A) ${question.answers[0]}
B) ${question.answers[1]}
C) ${question.answers[2]}
D) ${question.answers[3]}\n`);
};
showPossibleAnswers();

// Get user input
function getUserAnswer() {
    console.log(`${userName}, which option do you choose? (Type: A, B, C or D)`);
    return prompt();
};
let userAnswer = getUserAnswer();

// Validate user input
const validUserInputs = 'A B C D';
let userInputCounter = 0;
while (validUserInputs.indexOf(userAnswer.toUpperCase()) === -1) {
    console.clear();
    console.log('You type a wrong option, please try again.\n');
    showPossibleAnswers();
    userAnswer = getUserAnswer();
    userInputCounter++;
    if (userInputCounter === 2) {
    console.log('You enter too many wrong options, the game will shut down now, better luck next time!');
    process.exit(1);
    };
};

// Convert user input to an answer
switch (userAnswer.toUpperCase()) {
    case 'A':
        userAnswer = question.answers[0];
        break;
    case 'B':
        userAnswer = question.answers[1];
        break;
    case 'C':
        userAnswer = question.answers[2];
        break;
    case 'D':
        userAnswer = question.answers[3];
        break;
    default:
        console.log('How on earth you get here?');
        process.exit(1);
        break;
};

// Validate answer
let answerMessage = '';
if (userAnswer !== question.correctAnswer) {
    answerMessage = `Sorry, you are wrong, the correct answer was: ${question.correctAnswer}

░▀█▀░█░█░█▀█░█▀█░█░█░█▀▀░░░█▀▀░█▀█░█▀▄░░░█▀█░█░░░█▀█░█░█░▀█▀░█▀█░█▀▀░█░█
░░█░░█▀█░█▀█░█░█░█▀▄░▀▀█░░░█▀▀░█░█░█▀▄░░░█▀▀░█░░░█▀█░░█░░░█░░█░█░█░█░▀░▀
░░▀░░▀░▀░▀░▀░▀░▀░▀░▀░▀▀▀░░░▀░░░▀▀▀░▀░▀░░░▀░░░▀▀▀░▀░▀░░▀░░▀▀▀░▀░▀░▀▀▀░▀░▀`;
} else {
    answerMessage = `${userName}, you are right! you won.... nothing!

░▀█▀░█░█░█▀█░█▀█░█░█░█▀▀░░░█▀▀░█▀█░█▀▄░░░█▀█░█░░░█▀█░█░█░▀█▀░█▀█░█▀▀░█░█
░░█░░█▀█░█▀█░█░█░█▀▄░▀▀█░░░█▀▀░█░█░█▀▄░░░█▀▀░█░░░█▀█░░█░░░█░░█░█░█░█░▀░▀
░░▀░░▀░▀░▀░▀░▀░▀░▀░▀░▀▀▀░░░▀░░░▀▀▀░▀░▀░░░▀░░░▀▀▀░▀░▀░░▀░░▀▀▀░▀░▀░▀▀▀░▀░▀    
`;
};

// Show winner/loser message
console.clear();
console.log(answerMessage);