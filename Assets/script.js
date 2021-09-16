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
    
]