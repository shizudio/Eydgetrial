import React , { useState } from 'react'
import logo from './logo.svg';
import './App.css';


import LandingPage from './pages/LandingPage';

function App() {
  const [state, setState] = useState('Home')
  return (
    <LandingPage/>
  );
}

export default App;
