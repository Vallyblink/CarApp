
import { configureStore } from '@reduxjs/toolkit';
import carSlice from './carSlice'

 const store = configureStore({
    reducer: {
         favoriteCars: carSlice,
    }
});

export default store;