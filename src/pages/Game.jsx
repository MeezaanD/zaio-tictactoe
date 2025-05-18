import { useEffect } from 'react';
import styled from 'styled-components';
import { useGame } from '../context/GameContext';
import Header from '../components/Header';
import Board from '../components/Board';
import ScoreBoard from '../components/ScoreBoard';
import Modal from '../components/Modal';
import clickSound from '../assets/sounds/click.mp3';
import winSound from '../assets/sounds/win.mp3';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Add this */
  min-height: 100vh;       /* Add this */
  padding: 2rem;
`;

const GameLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export default function Game() {
  const {
    winner,
    draw,
    resetGame,
    currentPlayer,
    handleCellClick
  } = useGame();

  useEffect(() => {
    if (winner) new Audio(winSound).play();
  }, [winner]);

  const playClick = () => new Audio(clickSound).play();

  return (
    <GameContainer>
      <Header />
      <GameLayout>
        <ScoreBoard side="left" />
        <Board onClick={index => {
          playClick();
          handleCellClick(index);
        }} />
        <ScoreBoard side="right" />
      </GameLayout>
      <Modal
        isOpen={!!winner || draw}
        message={winner ? `Player ${winner} wins!` : 'It’s a draw!'}
        onClose={resetGame}
      />
    </GameContainer>
  );
}
