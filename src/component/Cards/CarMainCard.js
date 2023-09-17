import React from "react";
import sprite from '../../assets/sprite.svg'
import { CardWrapper, CardImage, FavoriteButton } from "./CarCard.styled";
import { useDispatch, useSelector } from "react-redux";
import  { toggleFavoriteCarAction } from "../Redux/carSlice"


function CarCard({ car }) {
const dispatch = useDispatch()
const address = car.address.replace(/^[^,]+,\s*/g, '').replace(/,+/g, '');
const likedCars = useSelector(state => state.favoriteCars.likedCars);
const isLiked = likedCars.some(likedCar => likedCar.id === car.id);

    

  const handleToggleFavoriteCar = () => {
  const action = toggleFavoriteCarAction ({ carId: car.id, carData: car }); 
  dispatch(action);
};


  return (
    <CardWrapper>
          <CardImage src={car.img} alt={car.model} />
          <FavoriteButton onClick={handleToggleFavoriteCar} style={{ color: isLiked ? 'blue' : 'inherit' }}>
             <svg
    aria-label="filter icon"
    width="16"
    height="16"
  >
    <use href={sprite + '#normal'}></use>
  </svg>
          </FavoriteButton>
      <h2>{car.make} {car.model}, {car.year}  {car.rentalPrice}</h2>
      <p>{address} {car.rentalCompany} </p>
      <p>{car.type} {car.model} {car.id} {car.functionalities[0]}</p>
    </CardWrapper>
  );
}

export default CarCard;