import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import Canvas from './Canvas.jsx';

Canvas()

function App() {
  return (
    <>
      <Header/>
      <div id = "container">
      <Canvas/>
      </div>
      
      <div className="card"></div>
    </>
  )
}

export default App
