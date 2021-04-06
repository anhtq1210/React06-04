import { faBook, faCoffee, faMicrophone, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';



interface ISideBar{
    name:string,
    avatar:any,
    quantity:string,
}

const items: ISideBar[] = [
    { 
        name:'Unique Sessions',
        avatar:<FontAwesomeIcon icon={faMicrophone} />, 
        quantity:'36+'
     },
     { 
        name:'Amazing Speakers',
        avatar:<FontAwesomeIcon icon={faUserTie} />, 
        quantity:'12'
     },
     { 
        name:'Food Stalls',
        avatar:<FontAwesomeIcon icon={faCoffee} />, 
        quantity:'45' 
     },
     { 
        name:'Books Available',
        avatar:<FontAwesomeIcon icon={faBook}/>, 
        quantity:'2350+' 
     }
]


export function SidebarComponent (props:ISideBar) {
    return (
        <div>
            <i>{props.avatar}</i>
            <p>{props.quantity}</p>
            <p>{props.name}</p>           
        </div>
    );
}
export function FirstAssignment(){

    const navbar = items.map(
        item =><SidebarComponent name={item.name} quantity={item.quantity} avatar ={item.avatar}/>
        );
    return(
            <div>
                {navbar}
            </div>
    );
}