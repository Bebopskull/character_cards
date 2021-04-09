import react, {useState} from 'react';
import Barbarian from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Barbarian.png";
import Bard from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Bard.png";
import Cleric from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Cleric.png";
import Druid from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Druid.png";
import Fighter from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Fighter.png";
import Monk from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Monk.png";
import Paladin from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Paladin.png";
import Ranger from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Ranger.png";
import Rogue from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Rogue.png";
import Sorcerer from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Sorcerer.png";
import Warlock from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Warlock.png";
import Wizard from "../../media/DnDFanSiteKit/Class Symbols/DnD5E_ClassSymb_Wizard.png";

export default function ClassCard(props){

	
	const classesObj={Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Wizard, Warlock};


	return (
	<div className = 'class-card'  >

	  <img src={classesObj[props.name]} alt="" width='35%' height='35%' />
	 	<div>
	 			{props.name} 
	 	</div>
	</div>)
}