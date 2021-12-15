import { getScores } from './apiScores.js';

const scoresTable = document.querySelector('#tableOfScores');

// Display a score on the page
function displayScore(score) {
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `<td> ${score.user}: ${score.score}</td>`;
  scoresTable.appendChild(tableRow);
}

// Display all the scores on the page
async function displayAllScores() {
  scoresTable.innerHTML = '';
  const scores = await getScores();
  scores.forEach((score) => {
    displayScore(score);
  });
}

// Display error message on incorrect form
function displayError(display) {
  const errorMessage = document.querySelector('.errorMessage');
  if (display) errorMessage.style.display = 'block';
  else errorMessage.style.display = 'none';
}

// Display notifications
function displayNotification(message) {
  const notificationElement = document.querySelector('#notificationMessage');
  const notification = document.createElement('p');
  notification.classList.add('fadeMessage');
  notification.style.color = 'green';
  notification.innerHTML = `${message}`;
  notificationElement.appendChild(notification);
  notification.addEventListener('animationend', () => {
    notification.remove();
  });
}

export {
  displayScore, displayAllScores, displayError, displayNotification,
};