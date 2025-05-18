import styled from 'styled-components';

const CellButton = styled.button`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  color: ${({ value }) =>
    value === 'X' ? '#ff6b81' : value === 'O' ? '#1e90ff' : '#fff'};
  border: none;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(30, 41, 59, 0.12);
  transition: background 0.2s, transform 0.1s, box-shadow 0.2s;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #3a3d40 0%, #606163 100%);
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 8px 32px rgba(30, 41, 59, 0.18);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    filter: grayscale(0.2);
  }
`;

export default function Cell({ value, onClick }) {
  return (
    <CellButton onClick={onClick} disabled={!!value} value={value}>
      {value}
    </CellButton>
  );
}
