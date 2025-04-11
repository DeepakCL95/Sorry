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

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Button = styled.button`
  padding: 20px 40px;
  font-size: 20px;
  background-color: ${props => props.page % 2 === 0 ? '#FF69B4' : '#4CAF50'};
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${bounce} 2s infinite;
  text-align: center;
  max-width: 500px;
  white-space: pre-wrap;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const FinalMessage = styled.div`
  color: #ff4444;
  font-size: 48px;
  text-align: center;
  padding: 20px;
  animation: ${heartBeat} 1.5s infinite;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

const PageContainer = () => {
  const currentPage = useSelector((state) => state.page.currentPage);
  const dispatch = useDispatch();

  const getButtonText = (page) => {
    switch(page) {
      case 1: return "Sorryy Forgive Me 🙏";
      case 2: return "I know you will not Forgive me 😔";
      case 3: return "Pleaseee I know i made a Mistake 😢";
      case 4: return "I have not Wished on your Birthday..\nBut Pinky Promise I never Forgot 🤙";
      case 5: return "Yeah you are Right,\nI didnt wish at the Right Time ⏰";
      case 6: return "That doesnt mean..\nYou are not My Priority 😢";
      case 7: return "I know you dont like to talk anything 😔✨";
      case 8: return "But All I can say is...\nYou are Always my Cute Little Babyyyyyy 🖤🤗";
      case 9: return "I know still you are more Angry on me..\nNot Even smiling...Smileeeeeeeeeee\nYou Look Beautiful 👼";
      default: return "Next";
    }
  };

  if (currentPage > 10) {
    return (
      <Container>
        <FinalMessage>
          Sorry Likhitha Bharadwaj ❤️
          <br />
          Please Forgive Me 😢
          <br />
          Miss You! 
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