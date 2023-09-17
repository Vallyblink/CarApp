import { useEffect, useState } from "react";
import { cars } from "../API/API";
import CarCard from "../Cards/CarMainCard";
import styled from '@emotion/styled';

const CarListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    margin-right: 29px; /* 29px між картками */
    margin-bottom: 50px; /* 50px між рядками карток */

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 20px; /* Мобільні пристрої мають менше відстані між рядками */
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CarCardWrapper = styled.div`
  width: calc(25% - 29px); /* Розділити на 4 картки на рядку з міжкартковими відстанями */
  box-sizing: border-box; /* Забезпечує відповідний розмір, включаючи margin та padding */
  
  @media (max-width: 768px) {
    width: 100%; /* Одна карта на рядок на мобільних пристроях */
  }
`;

function CarList() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const data = await cars();
        setCarList(data);
      } catch (error) {
        console.error();
      }
    }
    fetchCars();
  }, []);

  return (
    <CarListContainer>
      {carList.map((car) => (
        <CarCardWrapper key={car.id}>
          <CarCard car={car} />
        </CarCardWrapper>
      ))}
    </CarListContainer>
  );
}

export default CarList;
