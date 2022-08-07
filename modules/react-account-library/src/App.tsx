import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Account, Checkout } from './components';


function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
