import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: #444;
  color: #fff;
  &:hover { background: #666; }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  min-width: 250px;
  text-align: center;
  z-index: 10;
`;

export default function Home() {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Button onClick={() => navigate('/game')}>Start Game</Button>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button
          onClick={() => setShowTooltip(v => !v)}
          onBlur={() => setShowTooltip(false)}
          tabIndex={0}
        >
          How to Play
        </Button>
        {showTooltip && (
          <Tooltip>
            Take turns placing Xs and Os.<br />
            First to match 3 wins!
          </Tooltip>
        )}
      </div>
    </Container>
  );
}
