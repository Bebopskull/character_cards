import logo from './logo.svg';
import axios from 'axios';
import React, { useState, useEffect }  from 'react';
import './App.css';
import ClassList  from './components/ClassCardList.component.jsx';

function App() {
let  list =[];

 const [search, setSearch] = useState({
  searchField : ""
 })

const [data, setData] =  useState({ 
  classes : [],
  
});
  

useEffect(() =>{
    axios.get('https://www.dnd5eapi.co/api/classes')
    .then(function (res) {
        list = res.data;

        setData({... data, classes : list.results})

      })
      .catch(function (error) {
        console.log(error);
      })
}, [ ])

// let filteredClasses = [...data.classes];
// console.log('Before FILTER===>',filteredClasses)

let filteredClasses;

const handleFilterInput = (e) =>{
  setSearch({searchField : e.target.value})
  // console.log(search.searchField)
  // console.log(data.classes.filter(i => {i.name.includes(search.searchField)}));

 return data.classes.filter(i => {
    console.log('the name',i.name.includes(search.searchField))
    i.name.includes(search.searchField)
  });
  // console.log('AFTER FILTER===>', filteredClasses)
  // return filteredClasses;
}  


  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          D&D Classes
        </p>
        <input 
          type='search' 
          placeholder = 'Search Class'
          onChange = {e => {
              handleFilterInput(e)
            }}

          />
        <ClassList 
        className = 'class-list'  
        filter = {search} 
        setFilter = {setSearch}
        data = {data}
        />
      </header>
    </div>
  );
}

export default App;
