import axios from 'axios';
import react, {useState} from 'react';


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
const actualList = data.classes.map(clase => <li key={clase.index}> {clase.name} </li >);



return (

        <ul id = 'classList'>
        	{actualList}
        </ul>
 				
 				)
};