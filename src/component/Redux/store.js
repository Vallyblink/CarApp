
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage';
import carSlice from './carSlice'

const favoriteCars = {
  key: 'favoriteCars',
  storage,
  whitelist: ['likedCars'],
};
const persistFavReducer = persistReducer(favoriteCars, carSlice);

 export const store = configureStore({
    reducer: {
         favoriteCars: persistFavReducer,
      },
      middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    })
});

setupListeners(store.dispatch);
export default store;
export const persistor = persistStore(store);