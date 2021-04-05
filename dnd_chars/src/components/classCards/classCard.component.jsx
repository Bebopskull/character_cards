import react, {useState} from 'react';

export default function ClassCard(props){

	console.log('ClassCard props===>', props)


	return (<div className = 'class-card' > {props.name} </div>)
}