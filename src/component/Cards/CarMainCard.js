import React, { useState } from "react";
import sprite from '../../assets/sprite.svg'
import {
  CardWrapper,
  CardImage,
  FavoriteButton,
  CarInfo,
  CarModel,
  CarPrice,
  Location,
  Details,
  Button
} from "./CarCard.styled";
import { useDispatch, useSelector } from "react-redux";
import  { toggleFavoriteCarAction } from "../Redux/carSlice"
import CustomModal from "component/Modals/modal";


function CarCard({ car }) {
const dispatch = useDispatch()
const address = car.address.replace(/^[^,]+,\s*/g, '').replace(/,+/g, '');
const likedCars = useSelector(state => state.favoriteCars.likedCars);
const isLiked = likedCars.some(likedCar => likedCar.id === car.id);
 const [isModalOpen, setIsModalOpen] = useState(false);
    

  const handleToggleFavoriteCar = () => {
  const action = toggleFavoriteCarAction ({ carId: car.id, carData: car }); 
  dispatch(action);
  };
  
  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <CardWrapper>
          <CardImage src={car.img} alt={car.model} />
      <FavoriteButton onClick={handleToggleFavoriteCar} style={{ color: isLiked ? 'blue' : 'inherit' }}>
  <svg aria-label="filter icon" width="18" height="18">
    <use href={sprite + '#normal'} fill={isLiked ? ' #3470FF' : 'transparent'}></use>
  </svg>
</FavoriteButton>
      <CarInfo>
      <div>{car.make}  <CarModel> {car.model}</CarModel>,  {car.year}</div>
      <CarPrice>{car.rentalPrice}</CarPrice>
      </CarInfo>
      <Location>{address} {car.rentalCompany} </Location>
      <Details>{car.type} {car.model} {car.id} {car.functionalities[0]}</Details>
      <Button onClick={handleLearnMoreClick}>Learn More</Button>
      <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} carData={car} />
    </CardWrapper>
  );
}

export default CarCard;