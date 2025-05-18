import styled from 'styled-components';
import { useGame } from '../context/GameContext';
import Cell from './Cell';

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: repeat(3, 80px);
  }
`;

function Board({ onClick }) {
  const { board } = useGame();

  return (
    <BoardGrid>
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </BoardGrid>
  );
}

export default Board;
