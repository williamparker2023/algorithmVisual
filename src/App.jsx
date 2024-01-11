import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import Canvas from './Canvas.jsx';
import InsertionSortVisualization from './InsertionSortVisualization.jsx'


function App() {
  return (
    <>
      <Header/>
      <InsertionSortVisualization/>
      
      <div className="card"></div>
    </>
  )
}

export default App
