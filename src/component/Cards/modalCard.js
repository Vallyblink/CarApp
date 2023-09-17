import React from "react";
import {
  CardWrapper,
  CardImage,
  CarInfo,
  CarModel,
  CarPrice,
  Location,
  Details
} from "./CarCard.styled";



function ModalCard({ car }) {
const address = car.address.replace(/^[^,]+,\s*/g, '').replace(/,+/g, '');

    



  return (
    <CardWrapper>
      <CardImage src={car.img} alt={car.model} />
      <CarInfo>
      <div>{car.make}  <CarModel> {car.model}</CarModel>,  {car.year}</div>
      <CarPrice>{car.rentalPrice}</CarPrice>
      </CarInfo>
      <Location>{address} {car.rentalCompany} </Location>
      <Details>{car.type} {car.model} {car.id} {car.functionalities[0]}</Details>
    </CardWrapper>
  );
}

export default ModalCard;