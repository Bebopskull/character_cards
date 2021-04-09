import logo from './logo.svg';
import axios from 'axios';
import React, { useState }  from 'react';
import './App.css';
import ClassList  from './components/ClassCardList.component.jsx';

function App() {



  

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          D&D Classes
        </p>
        <ClassList className = 'class-list'/>
      </header>
    </div>
  );
}

export default App;
