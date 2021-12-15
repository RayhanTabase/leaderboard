import './style.css';
import {
  displayAllScores, displayError, displayScore, displayNotification,
} from './display.js';
import { addScore } from './apiScores.js';

const newScoreForm = document.querySelector('#newScoreForm');
const refreshButton = document.querySelector('#refreshButton');

// Refresh the scores list
refreshButton.addEventListener('click', () => {
  displayAllScores();
});

// Submit a new score
newScoreForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  displayError(false);
  const data = new FormData(newScoreForm);
  const user = data.get('user');
  const score = data.get('score');
  if (user.trim() && score.trim()) {
    const message = await addScore(user, score);
    displayNotification(message);
    displayScore({ user, score });
    newScoreForm.reset();
  } else displayError(true);
});

displayAllScores();
