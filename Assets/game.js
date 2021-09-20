var playerName = document.querySelector('#player')
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var finalScore = document.querySelector('#finalScore')
var mostRecentScore = localStorage.getItem('mostRecentScore')
var playAgain = document.getElementsByClassName('btn')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 7

finalScore.innerText = mostRecentScore

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name:playerName.value
    }
    highScores.push(score)

    dispData();

    localStorage.setItem('highScores', JSON.stringify(highScores));
}
// highscore display//
function dispData(){
    for(var i=0; i<highScores.length;i++){
        var li = document.createElement("li");
        li.textContent = highScores[i].name + ": "+highScores[i].score;
        document.getElementById("contenders").appendChild(li);
    }
}

dispData();