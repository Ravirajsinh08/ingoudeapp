import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../src/style.scss"
import Home from './app/pages/home/home';
import Header from './app/component/header/header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
