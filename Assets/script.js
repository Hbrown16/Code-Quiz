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
        
    }
]