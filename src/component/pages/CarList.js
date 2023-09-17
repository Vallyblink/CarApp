import { useEffect, useState } from "react";
import { cars } from "../API/API";
import CarCard from "../Cards/CarMainCard";
import styled from '@emotion/styled';

const CarListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    margin-right: 29px; 
    margin-bottom: 50px; 

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 20px; 
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CarCardWrapper = styled.div`
  width: calc(25% - 29px); 
  box-sizing: border-box; 
  
  @media (max-width: 768px) {
    width: 100%; 
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
