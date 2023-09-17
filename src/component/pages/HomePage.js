import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from '@emotion/styled';

const HomeContainer = styled.div`
  background-color: #f0f8ff;
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const HomeTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const HomeText = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

const RentButton = styled(Link)` 
margin-top:24px;
  background-color: #3470FF; 
  color: #fff; 
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0B44CD;
; 
  }
`;

function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Ласкаво просимо до нашої компанії!</HomeTitle>
      <HomeText>
        Ми надаємо послуги з надання автомобілів в оренду в Україні. Ви можете знайти автомобілі різних марок і моделей за доступними цінами.
      </HomeText>
      <HomeText>
        Дізнайтеся більше про наші послуги на інших сторінках застосунку.
      </HomeText>
      <RentButton to="/carlist">Орендувати найкраще авто</RentButton> 
    </HomeContainer>
  );
}

export default Home;
