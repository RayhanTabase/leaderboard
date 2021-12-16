const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameId = 'MmPje8nXd7xg0GvcGIEk';

// Get all scores from api
async function getScores() {
  const data = await fetch(`${endpoint}/${gameId}/scores`);
  const response = await data.json();
  const results = await response.result;
  const sortedResults = await results.sort((score1, score2) => score2.score - score1.score);
  return sortedResults.slice(0, 10);
}

// Add score to api
async function addScore(user, score) {
  const data = await fetch(`${endpoint}/${gameId}/scores`,
    {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
    });
  const response = await data.json();
  const result = await response.result;
  return result;
}

export { getScores, addScore };