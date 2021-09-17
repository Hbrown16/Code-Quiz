var platerName = document.querySelector('#player')
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var finalScore = document.querySelector('#finalScore')
var mostRecentScore = localStorage.getItem('mostRecentScore')
var playAgain = document.getElementsByClassName('btn')

const highScores = json.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 7

finalScore.innerText = mostRecentScore

saveHighScore = e => {
    e.preventDefault()

    const score = {
        socre: mostRecentScore,
        name:playerName.value
    }
    highScores.push(score)

    disData();

    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function dispData(){
    for(var i=0; i<highScores.length;i++){
        var
    }
}