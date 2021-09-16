var timerEL = document.getElementById("timer");
var startButton = document.getElementById("start");
var scoreBoard = document.getElementsByClassName('scores');
var scoreText = document.getElementById('score-count');
var question = document.querySelector('#question');
var answers = Array.from(document.querySelectorAll('.answer-text'));
var currentQuestion = {};
var acceptAnswer = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
      question: 'What tag is used to define an image-or add an image to an HTML page?',
      choice1: '<img>',
      choice2: '<table>',
      choice3: '<div>',
      choice4: '<a>',
      answer: 1, 
    },
    {
        question: 'What are the CSS properties that are used to add space around sections of content?',
        choice1: 'spacing',
        choice2: 'cleaner',
        choice3: 'break',
        choice4: 'padding',
        answer: 4,
    },
    {
        question: 'Which of these is not a programming language?',
        choice1: 'Ruby',
        choice2: 'Java',
        choice3: 'Turbo',
        choice4: 'Python',
        answer: 3,
    },
    {
        question:'What are people who write computer code called?',
        choice1: 'Professors',
        choice2: 'Programmers',
        choice3: 'Crytographers',
        choice4: 'Nerds',
        answer: 2,
    },
    {
       question: 'Resolving errors in a program is known as...',
       choice1: 'Error Checking',
       choice2: 'Refixing',
       choice3: 'Debugging',
       choice4: 'Constructing',
       answer: 3,
    },
    {
        question: 'What styles your code?',
        choice1: 'CSS',
        choice2: 'HTML',
        choice3: 'JS',
        choice4: 'DB',
        answer: 1,
    },
    {
        question: 'What can you use for Databases?',
        choices
    }

]