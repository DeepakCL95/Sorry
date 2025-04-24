import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage } from '../features/pageSlice';
// Add new imports at the top
import styled, { keyframes, createGlobalStyle } from 'styled-components';

// Define all animations first
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const shine = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const heartBeat = keyframes`
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
`;

// Then define GlobalStyle and styled components
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Quicksand:wght@500&display=swap');
`;

// Update Container styling
const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(-45deg, #fee9e9, #f9f3ff, #e8f9ff, #fff9f5);
  background-size: 400% 400%;
  animation: ${fadeIn} 0.5s ease-out forwards,
             ${gradientMove} 15s ease infinite;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%);
    pointer-events: none;
    z-index: -1;
  }
`;

// Update Button styling
const Button = styled.button`
  padding: 25px 45px;
  font-size: 24px;
  font-family: 'Quicksand', sans-serif;
  background: linear-gradient(
    90deg, 
    ${props => props.page % 2 === 0 
      ? '#ffd1dc, #ffecf0, #ffd1dc'
      : '#e0f4e0, #f0fff0, #e0f4e0'}
  );
  color: ${props => props.page % 2 === 0 ? '#d4367a' : '#2e7d32'};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.4s ease;
  animation: ${float} 3s infinite ease-in-out;
  text-align: center;
  max-width: 600px;
  min-width: 300px;
  white-space: pre-wrap;
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.5;
  backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0,0,0,0.12);
    animation: ${shine} 3s linear infinite;
  }
`;

// Update FinalMessage styling
const FinalMessage = styled.div`
  font-family: 'Dancing Script', cursive;
  background: linear-gradient(135deg, #fff5f7 0%, #fff8fa 100%);
  color: #ff6b95;
  font-size: 56px;
  text-align: center;
  padding: 40px 60px;
  animation: ${heartBeat} 5.5s infinite;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  border-radius: 30px;
  box-shadow: 
    0 10px 30px rgba(255,107,149,0.1),
    0 0 30px rgba(255,107,149,0.05);
  backdrop-filter: blur(10px);
  letter-spacing: 1px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  border: 2px solid rgba(255,107,149,0.1);

  @media (max-width: 768px) {
    font-size: 40px;
    padding: 30px;
  }
`;

// Update PageContainer component to include GlobalStyle
const PageContainer = () => {
  const currentPage = useSelector((state) => state.page.currentPage);
  const dispatch = useDispatch();

  // Move renderHearts function here, before any conditional returns
  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 15; i++) {
      hearts.push(
        <Heart
          key={i}
          size={`${Math.random() * 20 + 15}px`}
          color={`rgba(255, ${Math.random() * 105 + 150}, ${Math.random() * 180 + 75}, 0.6)`}
          duration={`${Math.random() * 2 + 2}s`}
          delay={`${Math.random() * 3}s`}
          left={`${Math.random() * 100}%`}
        >
          ❤️
        </Heart>
      );
    }
    return hearts;
  };

  // Render content based on currentPage
  const content = currentPage > 10 ? (
    <Container>
      <HeartBackground>
        {renderHearts()}
      </HeartBackground>
      <ElephantEmoji>🐘</ElephantEmoji>
      <ElephantEmoji>🐘</ElephantEmoji>
      <ElephantEmoji>🐘</ElephantEmoji>
      <ElephantEmoji>🐘</ElephantEmoji>
      <FinalMessage>
        Sorry Likhitha Bharadwaj 🖤
        <br />
        I'm Truly Sorry 🥹
        <br />
        Missing You Always! 💝
      </FinalMessage>
    </Container>
  ) : (
    <Container>
      <HeartBackground>
        {renderHearts()}
      </HeartBackground>
      <Button 
        onClick={() => dispatch(nextPage())}
        page={currentPage}
      >
        {getButtonText(currentPage)}
      </Button>
    </Container>
  );

  return (
    <>
      <GlobalStyle />
      {content}
    </>
  );
};

export default PageContainer;

// Add floating hearts animation
const floatingHearts = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  50% { transform: translateY(-100px) rotate(45deg); opacity: 0.8; }
  100% { transform: translateY(-200px) rotate(90deg); opacity: 0; }
`;

// Add heart components
const HeartBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const Heart = styled.div`
  position: absolute;
  font-size: ${props => props.size || '20px'};
  color: ${props => props.color || '#ff69b4'};
  animation: ${floatingHearts} ${props => props.duration || '3s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left};
  bottom: -20px;
  opacity: 0;
`;

// Add elephant animation
const elephantFloat = keyframes`
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  50% { transform: translate(-10px, -15px) rotate(-5deg) scale(1.1); }
  100% { transform: translate(0, 0) rotate(0deg) scale(1); }
`;

const ElephantEmoji = styled.div`
  position: absolute;
  font-size: 80px;
  opacity: 0.6;
  animation: ${elephantFloat} 3s infinite ease-in-out;
  z-index: 0;
  filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.2));

  &:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    top: 15%;
    right: 10%;
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    bottom: 10%;
    left: 15%;
    animation-delay: 1s;
  }

  &:nth-child(4) {
    bottom: 15%;
    right: 15%;
    animation-delay: 1.5s;
  }
`;
// Add after animations and before PageContainer component
const getButtonText = (page) => {
  switch(page) {
    case 1: return "I'm Really Sorry... Please Talk To Me 🥺";
    case 2: return "Sorryyyy Likhithaaaaaaaaaaaaaaaaaaaaaa Bharadwaj ";
    case 3: return "Sorryyyy Likhithaaaaaaaaaaaaaaaaaaaaaa Bharadwaj 😢";
    case 4: return "Sorryyyy Likhithaaaaaaaaaaaaaaaaaaaaaa Bharadwaj";
    case 5: return "Sorryyyy Likhithaaaaaaaaaaaaaaaaaaaaaa Bharadwaj";
    case 6: return "Sorryyyy Likhithaaaaaaaaaaaaaaaaaaaaaa Bharadwaj";
    case 7: return "Sorryyyy Likhithaaaaaaaaaaaaaaaaaaaaaa Bharadwaj";
    case 8: return "Sorryyyy Likhithaaaaaaaaaaaaaaaaaaaaaa Bharadwaj";
    case 9: return "Sorryyyy Likhithaaaaaaaaaaaaaaaaaaaaaa Bharadwaj";
    default: return "Next ➡️";
  }
};
