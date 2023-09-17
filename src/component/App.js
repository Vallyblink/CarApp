import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from "./Redux/store"; 
import { PersistGate } from 'redux-persist/integration/react'; 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage';
import Header from './Header/Header';
import Loader from './Utils/Loader';

const CarList = lazy(() => import('./pages/CarList'));
const FavoriteCars = lazy(() => import('./pages/FavoriteCars'));

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Suspense fallback={<Loader/>}>
          <Routes basename="/CarApp">
            <Route path='CarApp' element={<Home />} />
            <Route path='/catalog' element={<CarList />} />
            <Route path='/favorites' element={<FavoriteCars />} />
          </Routes>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
