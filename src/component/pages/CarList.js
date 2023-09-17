import { useEffect, useState } from "react";
import { cars} from "../API/API"; 
import CarCard from "../Cards/CarMainCard";
import styled from '@emotion/styled';

const CarListContainer = styled.div`
  margin-top: 50px;
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

const LoadMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3470FF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2453CC;
  }
`;

function CarList() {
  const [carList, setCarList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreCars = async () => {
    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const data = await cars(nextPage);
      if (data.length > 0) {
        setCarList([...carList, ...data]);
        setCurrentPage(nextPage);
      }
    } catch (error) {
      console.error("Помилка при завантаженні даних автомобілів:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function fetchInitialCars() {
      try {
        const data = await cars(1,8);
        setCarList(data);
      } catch (error) {
        console.error("Помилка при завантаженні даних автомобілів:", error);
      }
    }
    fetchInitialCars();
  }, []);

  return (
    <div>
      <CarListContainer>
        {carList.map((car) => (
          <CarCardWrapper key={car.id}>
            <CarCard car={car} />
          </CarCardWrapper>
        ))}
      </CarListContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <LoadMoreButton onClick={loadMoreCars}>
          Завантажити ще
        </LoadMoreButton>
      )}
    </div>
  );
}

export default CarList;
