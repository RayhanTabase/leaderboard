import './style.css';

const scoresTable = document.querySelector('#tableOfScores');

const endpoint = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games"
const gameId = "MmPje8nXd7xg0GvcGIEk"

async function getScores(){
  let data =  await fetch(`${endpoint}/${gameId}/scores`)
  let response = await data.json()
  let results = await response.result
  return results
}

function displayScore(score) {
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `<td> ${score.user}: ${score.score}</td>`;
  scoresTable.appendChild(tableRow);
}

async function displayAllScores() {
  let scores = await getScores()
  scores.forEach((score) => {
    displayScore(score)  
  });
};

async function addScore(user,score){
  let data = await fetch(`${endpoint}/${gameId}/scores`,
  {
    method:'POST',
    body: JSON.stringify({
        'user' : user,
        'score' : score
    }),
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
    },
  })
  let response = await data.json()
  let result = await response.result
  if (result.includes("Leaderboard score created correctly")) displayScore({score:score,user:user})
}

displayAllScores();