import React from "react";
import {
  CardWrapper,
  CardImage,
  CarInfo,
  CarModel,
  CarPrice,
  Location,
  CarDescription,
  FuelConsumption,
  EngineSize,
  Accessories,
  Functionalities,
  RentalConditions,
  Mileage,
  CallButton,
  CloseButton
} from "./modalCard.styled";

function ModalCard({ car,  }) {
  const address = car.address.replace(/^[^,]+,\s*/g, "").replace(/,+/g, "");

  return (
    <CardWrapper>
      <CloseButton>&times;</CloseButton>
      <CardImage src={car.img} alt={car.model} />
      <CarInfo>
        <div>
          {car.make} <CarModel>{car.model}</CarModel>, {car.year}
        </div>
        <CarPrice>{car.rentalPrice}</CarPrice>
      </CarInfo>
      <Location>
        {address} {car.rentalCompany}
      </Location>
      <CarDescription>{car.description}</CarDescription>
      <FuelConsumption>Fuel Consumption: {car.fuelConsumption} MPG</FuelConsumption>
      <EngineSize>Engine Size: {car.engineSize}</EngineSize>
      <Accessories>
        <strong>Accessories:</strong>
        <ul>
          {car.accessories.map((accessory, index) => (
            <li key={index}>{accessory}</li>
          ))}
        </ul>
      </Accessories>
      <Functionalities>
        <strong>Functionalities:</strong>
        <ul>
          {car.functionalities.map((functionality, index) => (
            <li key={index}>{functionality}</li>
          ))}
        </ul>
      </Functionalities>
      <RentalConditions>{car.rentalConditions}</RentalConditions>
      <Mileage>Mileage: {car.mileage} miles</Mileage>
       <CallButton href="tel:+380730000000">Rental car</CallButton>
    </CardWrapper>
  );
}

export default ModalCard;