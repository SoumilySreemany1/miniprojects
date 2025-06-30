const board = document.getElementById('board');
const statusText = document.getElementById('status');

let currentPlayer = 'X';
let gameActive = true;
let cells = ["", "", "", "", "", "", "", "", ""];

// Create the 9 cells dynamically
function createBoard() {
  board.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
  }
}

function handleCellClick(e) {
  const index = e.target.dataset.index;

  if (!gameActive || cells[index] !== "") return;

  cells[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    statusText.textContent = `🎉 Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (cells.every(cell => cell !== "")) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

function restartGame() {
  currentPlayer = 'X';
  cells = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  createBoard();
}

// Initialize game
createBoard();
statusText.textContent = `Player ${currentPlayer}'s turn`;
