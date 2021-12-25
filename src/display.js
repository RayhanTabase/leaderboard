import { getScores } from './apiScores.js';

const scoresTable = document.querySelector('#tableOfScores');

// Display loading icon
const loadingContent = (show) => {
  const loadingContent = document.querySelector('#loadingContent');
  if (show) {
    loadingContent.style.display = 'flex';
    return;
  }
  loadingContent.style.display = 'none';
};

// Display a score on the page
const displayScore = (score) => {
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `<td> ${score.user.slice(0, 15)}: ${score.score}</td>`;
  scoresTable.appendChild(tableRow);
};

// Display all the scores on the page
const displayAllScores = async () => {
  loadingContent(true);
  scoresTable.innerHTML = '';
  const scores = await getScores();
  scores.forEach((score) => {
    displayScore(score);
  });
  loadingContent(false);
};

// Display error message on incorrect form
const displayError = (display) => {
  const errorMessage = document.querySelector('.errorMessage');
  if (display) errorMessage.style.display = 'block';
  else errorMessage.style.display = 'none';
};

// Display notifications
const displayNotification = (message) => {
  const notificationElement = document.querySelector('#notificationMessage');
  const notification = document.createElement('p');
  notification.classList.add('fadeMessage');
  notification.style.color = 'green';
  notification.innerHTML = `${message}`;
  notificationElement.appendChild(notification);
  notification.addEventListener('animationend', () => {
    notification.remove();
  });
};

export {
  displayScore, displayAllScores, displayError, displayNotification,
};