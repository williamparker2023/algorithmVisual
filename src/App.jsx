import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import Canvas from './Canvas.jsx';


function App() {
  return (
    <>
      <Header/>
      <Canvas/>
      
      <div className="card"></div>
    </>
  )
}

export default App
