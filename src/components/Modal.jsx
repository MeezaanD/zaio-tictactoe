import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #111;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  color: white;
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #444;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;

export default function Modal({ isOpen, message, onClose }) {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <h2>{message}</h2>
        <CloseButton onClick={onClose}>Play Again</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
}
