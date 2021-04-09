import axios from 'axios';
import react, {useState, useEffect} from 'react';
import './ClassCardList.style.css';
import ClassCard from './classCards/classCard.component'

export default function ClassList(props){
// console.log(props)

// console.log('this is data.classes',props.data.classes)
// const filteredClasses = props.data.classes.filter(clase => {
// 	clase.name.toLowerCase().includes(props.search)
// });

		// console.log('DATA ===>', list);



		let actualList = props.data.classes.map(clase => <ClassCard 
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