const { useState } = React;

export function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  function handleClick(i) {
    if (board[i] || calculateWinner(board)) return;
    const copiedBoard = [...board];
    turn ? (copiedBoard[i] = "X") : (copiedBoard[i] = "O");
    setBoard(copiedBoard);
    setTurn(!turn);
  }

  function calculateWinner(board) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [a, b, c] = winningPattern[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const result = calculateWinner(board);
  const winningLine = result?.line;
  console.log(winningLine);
  let status;
  if (result) {
    status = "Winner: " + result;
  } else if (board.every(Boolean)) {
    status = "Draw!";
  } else {
    status = "Next player: " + (turn ? "X" : "O");
  }

  function handleReset() {
    setBoard(Array(9).fill(null));
    setTurn(true);
  }

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, i) => (
          <button className="square" onClick={() => handleClick(i)}>
            {value}
          </button>
        ))}
      </div>
      <button id="reset" onClick={handleReset}>
        Reset Game
      </button>
    </>
  );
}
