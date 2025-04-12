import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage } from '../features/pageSlice';
import styled, { keyframes } from 'styled-components';

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

const bounce = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const heartBeat = keyframes`
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
`;

// Add new animations
const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const shine = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #f8e7eb 100%);
  animation: ${fadeIn} 0.5s ease-out;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Button = styled.button`
  padding: 25px 45px;
  font-size: 22px;
  background: linear-gradient(
    90deg, 
    ${props => props.page % 2 === 0 
      ? '#FF69B4, #ff8fab, #FF69B4'
      : '#4CAF50, #66bb6a, #4CAF50'}
  );
  background-size: 200% auto;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.4s ease;
  animation: ${float} 3s infinite ease-in-out;
  text-align: center;
  max-width: 600px;
  min-width: 300px;
  white-space: pre-wrap;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.5;
  backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
    animation: ${shine} 3s linear infinite;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const FinalMessage = styled.div`
  color: #144ee6;
  font-size: 52px;
  text-align: center;
  padding: 40px 60px;
  animation: ${heartBeat} 5.5s infinite;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  background: rgba(255, 255, 255, 0.95);
  border-radius: 30px;
  box-shadow: 
    0 10px 30px rgba(0,0,0,0.1),
    0 0 30px rgba(20, 78, 238, 0.1);
  backdrop-filter: blur(10px);
  letter-spacing: 1px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  border: 2px solid rgba(20, 78, 238, 0.1);

  @media (max-width: 768px) {
    font-size: 36px;
    padding: 30px;
  }
`;

const PageContainer = () => {
  const currentPage = useSelector((state) => state.page.currentPage);
  const dispatch = useDispatch();

  const getButtonText = (page) => {
    switch(page) {
      case 1: return "I'm Really Sorry... Please Talk To Me 🥺";
      case 2: return "I know you will not Forgive me 😔";
      case 3: return "I Made a Mistake, and I Feel Terrible About It 😢";
      case 4: return "I have not Wished on your Birthday..\nBut Pinky Promise I never Forgot 🤙";
      case 5: return "Yeah you are Right,\nI didnt wish you at the Right Time ⏰";
      case 6: return "You're Always My Priority Pandhiii🖤";
      case 7: return "I know you dont like to talk anything 😔✨";
      case 8: return "But All I can say is...You Matters A Lot to me ..I meant it.\nYou are Always my Cute Little Babyyyyyy 🖤🤗";
      case 9: return "I know still you are more Angry on me..\nNot Even smiling...Smileeeeeeeeeee Idiot 😏\nYou Look Beautiful 👼";
      default: return "Next ➡️";
    }
  };

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
  
  // Update the final message return statement
  if (currentPage > 10) {
    return (
      <Container>
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
    );
  }

  return (
    <Container>
      <Button 
        onClick={() => dispatch(nextPage())}
        page={currentPage}
      >
        {getButtonText(currentPage)}
      </Button>
    </Container>
  );
};

export default PageContainer;