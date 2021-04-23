const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');



const highscores = JSON.parse(localStorage.getItem('highScores'))|| [];

const MAX_HIGH_SCORE = 5;


finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = username.value.length>0 ? false : true;
});

saveHighScore = (e) => {
    e.preventDefault();


    const score = {
        score : mostRecentScore,
        name : username.value
    };
    highscores.push(score);
    highscores.sort((a,b)=>b.score-a.score);
    highscores.splice(5);

    localStorage.setItem('highScores',JSON.stringify(highscores));
    window.location.assign('index.html');
};