const endpoint = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games"
const gameId = "MmPje8nXd7xg0GvcGIEk"

// Get all scores from api
async function getScores(){
  let data =  await fetch(`${endpoint}/${gameId}/scores`)
  let response = await data.json()
  let results = await response.result
  return results
}

// Add score to api
async function addScore(user,score){
  score = parseInt(score)
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
  if (result.includes("Leaderboard score created correctly")) ({user:user,score:score})
}

export {getScores,addScore}