import './style.css';
import scores from './scores.js';

const scoresTable = document.querySelector('#tableOfScores');

const displayScores = () => {
  scores.forEach((score) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td> ${score.name}: ${score.score}</td>`;
    scoresTable.appendChild(tableRow);
  });
};

displayScores();