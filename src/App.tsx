import React, { lazy, Suspense } from 'react';
import './App.css';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Aboutus from './page/Aboutus';

const Resources = lazy(() => import('./page/Resources'));

function App() {
  return ( 
    <>
      <Header />
      <Suspense fallback={<h1>LOADING . . . </h1>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
