import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/tictactoe.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Button = styled.button`
  background: #555;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #777;
  }
`;

const Link = styled.a`
  text-decoration: none;
  background: #eee;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
`;

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <LogoTitleWrapper>
        <Logo src={logo} alt="Tic Tac Toe Logo" />
        <Title>Tic Tac Toe</Title>
      </LogoTitleWrapper>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link href="/">Home</Link>
        <Button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </Button>
      </div>
    </HeaderContainer>
  );
}
