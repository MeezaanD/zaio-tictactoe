import styled from "styled-components";
import { useGame } from "../context/GameContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #232946;
  border-radius: 16px;
  padding: 1rem 2rem;
  box-shadow: 0 4px 16px rgba(35, 41, 70, 0.08);
`;

const PlayerLabel = styled.span`
  font-size: 1rem;
  color: #eebbc3;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 0.3rem;
`;

const Score = styled.span`
  font-size: 2.2rem;
  color: #fffffe;
  font-weight: bold;
  background: #393e6b;
  border-radius: 8px;
  padding: 0.2em 0.8em;
  min-width: 2.5em;
  text-align: center;
`;

const ScoreBoard = ({ side }) => {
  const { scores } = useGame();

  if (!scores) return null;

  const player = side === 'left' ? 'X' : 'O';

  return (
    <Container>
      <PlayerLabel>Player {player}</PlayerLabel>
      <Score>{scores[player]}</Score>
    </Container>
  );
};

export default ScoreBoard;
