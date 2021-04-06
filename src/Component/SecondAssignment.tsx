import { faChessKing, faChessPawn, faChessQueen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
interface IOfferDetails{
    feature:string;
    isAvailable:boolean;
}
interface IOffer{
    name:string,
    logo:any,
    price:string,
    listOfferDetails:IOfferDetails[],
}
const items: IOffer[] = [
     { 
        name:'Basic',
        logo:<FontAwesomeIcon icon={faChessPawn} />, 
        price:'100$',
        listOfferDetails: [{feature:'1 Seat', isAvailable:true}, {feature:'Tea & Coffee',isAvailable:false}, {feature:'Wifi Available',isAvailable:false}, {feature:'Exclusive Seatings',isAvailable:false}]
     },
     { 
        name:'Standar',
        logo:<FontAwesomeIcon icon={faChessQueen} />, 
        price:'200$',
        listOfferDetails:[{feature:'2 Seat', isAvailable:true}, {feature:'Tea & Coffee',isAvailable:true}, {feature:'Wifi Available',isAvailable:false}, {feature:'Exclusive Seatings',isAvailable:false}]
     },
     { 
        name:'Premium',
        logo:<FontAwesomeIcon icon={faChessKing} />, 
        price:'300$',
        listOfferDetails:[{feature:'4 Seat', isAvailable:true}, {feature:'Tea & Coffee',isAvailable:true}, {feature:'Wifi Available',isAvailable:true}, {feature:'Exclusive Seatings',isAvailable:true}]
     },
]
export function OfferComponent (props:IOffer) {
    const Style = {
        opacity:1,
      };
      const Style2 = {
        opacity:0.1,
      };
    const listItems = props.listOfferDetails.map((link) =>
        <li style={link.isAvailable? Style : Style2 }>{link.isAvailable ? link.feature : link.feature }</li>
    );
    return (
        <div>
            <i>{props.logo}</i>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <ul>
            {listItems}
            </ul>
        </div>
    );
}
export function SecondAssignment(){

    const menu = items.map(
        item =><OfferComponent name={item.name} logo={item.logo} price ={item.price} listOfferDetails={item.listOfferDetails}/>
        );
    return(
            <div>
                {menu}
            </div>
    );
}