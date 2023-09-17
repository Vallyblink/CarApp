import { createAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
    likedCars: [],
};

export const carSlice = createSlice({
    name: 'FavoriteCars',
    initialState,
    reducers: {
        toggleFavoriteCar: (state, action) => {
          const carId = action.payload.carId;
          const carIndex = state.likedCars.findIndex(car => car.id === carId);

          if (carIndex !== -1) {
            state.likedCars = state.likedCars.filter(car => car.id !== carId);
          } else {
            const carToAdd = action.payload.carData;
            state.likedCars.push(carToAdd);
          }
        }
    }
});
export const toggleFavoriteCarAction  = createAction('FavoriteCars/toggleFavoriteCar');
export default carSlice.reducer