import React from 'react';

import { Routes } from './routes';
import Header from './components/header/header.component';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes />
    </div>
  );
};

export default App;
