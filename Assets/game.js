var platerName = document.querySelector('#player')
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var finalScore = document.querySelector('#finalScore')
var mostRecentScore = localStorage.getItem('mostRecentScore')
var playAgain = document.getElementsByClassName('btn')

const highScores = json.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 7

