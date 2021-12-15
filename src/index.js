import './style.css';
import {displayAllScores,displayError, displayScore} from './display.js'
import { addScore } from './apiScores.js';


const newScoreForm = document.querySelector('#newScoreForm')
const refreshButton = document.querySelector('#refreshButton')

// Refresh the scores list
refreshButton.addEventListener('click', ()=>{
  displayAllScores()
})

// Submit a new score
newScoreForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  displayError(false)
  const data = new FormData(newScoreForm);
  let user = data.get('user')
  let score = data.get('score')
  if(user.trim() && score.trim()){
    let newScore = addScore(user,score)
    newScore ? displayScore(newScore) : false
    newScoreForm.reset()
  }
  else displayError(true)
})

displayAllScores();

