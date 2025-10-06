import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Preloader from './Home/preloader';
import Homepage from './Home/homepage';
import 
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// import './App.css';


function App() {
  

  return (
    <>
      {/* <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/appointmentdoctor" element={<AppointmentsDoctor/>} />
        </Routes>
      </BrowserRouter> */}

      <Preloader/>
      <Homepage/>


    </>
  );
}

export default App;

