import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const initialBoard = Array(9).fill(null);

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [draw, setDraw] = useState(false);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6]             // diags
  ];

  const checkWinner = (newBoard) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);

    if (result) {
      setWinner(result);
      setScores((prev) => ({ ...prev, [result]: prev[result] + 1 }));
    } else if (!newBoard.includes(null)) {
      setDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer('X');
    setWinner(null);
    setDraw(false);
  };

  const resetAll = () => {
    resetGame();
    setScores({ X: 0, O: 0 });
  };

  return (
    <GameContext.Provider value={{
      board,
      currentPlayer,
      winner,
      draw,
      scores,
      handleCellClick,
      resetGame,
      resetAll
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
