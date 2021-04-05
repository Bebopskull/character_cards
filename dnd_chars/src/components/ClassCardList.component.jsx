import axios from 'axios';
import react, {useState} from 'react';
import './ClassCardList.style.css';


export default function ClassList(props){
// console.log(props)

let  list =[];
const x = 0;
const [data, setData] =  useState({ 

    classes : [
      {name : 'rogue',
        id : 'rg'},
        {name : 'barbarian',
        id : 'barb'},
        {name : 'warlock',
        id : 'lock'},
    ]
  },[x]);


axios.get('https://www.dnd5eapi.co/api/classes')
.then(function (res) {
    list = res.data;
    console.log('list ===>', list);
 		setData({... data, classes : list.results})
  })
  .catch(function (error) {
    console.log(error);
  })


// console.log('DATA ===>', list);
const actualList = data.classes.map(clase => <div className = 'class-card' key={clase.index}> {clase.name} </div>);



return (

        <div className = 'class-card-list' id = 'class-card-list'>
        	{actualList}
        </div>
 				
 				)
};