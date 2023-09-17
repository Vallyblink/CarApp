import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store from "./Redux/store"
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage';
import Header from './Header/Header';
import Loader from './Utils/Loader';

const CarList = lazy(() => import('./pages/CarList'));
const FavoriteCars = lazy(()=> import('./pages/FavoriteCars'))

function App() {
  return ( 
    <Provider store={store}>
      <Header />
      <Suspense fallback={<Loader/>}>
    <Routes basename="/CarApp">
      <Route path='CarApp' element={<Home />} />
      <Route path='/carlist' element={<CarList />} />
      <Route path='/favorite' element={<FavoriteCars />} />
        </Routes>
      </Suspense>
    </Provider>
  );
}

export default App;