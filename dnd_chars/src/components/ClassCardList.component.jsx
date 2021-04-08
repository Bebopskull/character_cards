import axios from 'axios';
import react, {useState, useEffect} from 'react';
import './ClassCardList.style.css';
import ClassCard from './classCards/classCard.component'

export default function ClassList(props){
// console.log(props)

let  list =[];
let x;


const [data, setData] =  useState({ 

    classes : [
      
    ]
  });
	

useEffect(() =>{
    axios.get('https://www.dnd5eapi.co/api/classes')
		.then(function (res) {
		    list = res.data;
		    console.log('list ===>', list);
		 		setData({... data, classes : list.results})
		  })
		  .catch(function (error) {
		    console.log(error);
		  })


}, [ ])
	
	






// console.log('DATA ===>', list);
const actualList = data.classes.map(clase => <ClassCard 
                                    className = 'class-card' 
                                    key={clase.index}
                                    name={clase.name}
                                    /> );



return (

        <div className = 'class-card-list' id = 'class-card-list'>
        	{actualList}
        </div>
 				
 				)
};