const { start } = require("@popperjs/core");

var timerEL = document.getElementById("timer");
var startButton = document.getElementById("start");
var scoreBoard = document.getElementsByClassName('scores')
var scoreText = document.getElementById('score-count')
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
        choice1: 'Node',
        choice2: 'MYSQL',
        choice3: 'Java',
        choice4: 'CSS',
        answer: 2,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 7

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)

    return document.location.assign('game.html')
    }
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    answers.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+ number]
    })
    availableQuestions.splice(questionIndex,1)

    acceptAnswer = true
}

answers.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptAnswer) return
        
        acceptAnswer = false
        const selectedChoice = e.target;
        const selectedAnswer = selectedChioce.dataset['number']

        let classtoApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classtoApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.remove(classtoApply)

        setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classtoApply)
        getNewQuestion()
        },1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startButton.addEventListener("click", startQuiz);

function startQuiz () {
    timer ();
    startGame();
    start.style.display="none";
    quizContainer.style.display="block";
}

function timer() {
    var timeLeft = 30;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEL.textContent = 'Time' + timeLeft;
            timeLeft --;
        } else if (timeLeft === 1) {
            timerEL.textContent = 'Time' = timeLeft;
            timeLeft--;
        }else {
            timerEL.textContent = '';

            clearInterval(timeInterval);

            displayMessage();
        }
    },1000);
}
function displayMessage() {
    alert("OUT OF TIME")
    localStorage.setItem('mostRecentScore', score)
    document.location.assign('game.html')
}