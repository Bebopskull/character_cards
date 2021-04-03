import logo from './logo.svg';
import axios from 'axios';
import { useState }  from 'react';
import './App.css';
import ClassList  from './components/ClassList';

function App() {

  const [data, setData] =  useState({ 
    classes : [
      {name : 'rogue',
        id : 'rg'},
        {name : 'barbarian',
        id : 'barb'},
        {name : 'warlock',
        id : 'lock'},
    ]
  });

  console.log('from app.js====>', data)
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Rockandroll yo
        </p>
        <ClassList data = {data}/>
      </header>
    </div>
  );
}

export default App;
