import axios from 'axios';
import react from 'react';


export default function ClassList(props){
console.log(props)
const list = props.data.classes;
// const actualList = list.map(clase => <li id={clase.id}> {clase.name} </li >);

return (

        <ul>
        	{list.map(clase => <li id={clase.id}> {clase.name} </li >)}
        </ul>
 				
 				)
};