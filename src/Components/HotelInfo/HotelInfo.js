import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const HotelInfo = ({hotelInfo}) => {
    
    return (
        <div key={hotelInfo.id}>
             <div className="card mt-2">
           <img className="img-fluid" src={require(`../../Image/${hotelInfo.pic}`).default} />
           <div className="card-body">
           <h5>{hotelInfo.title}</h5>
          
          <p><small>{hotelInfo.info}</small></p>
          <p> <span className="text-warning"><FontAwesomeIcon icon={faStar}/></span>  {hotelInfo.ratting}  <span className="f-right m-4">{hotelInfo.price}</span> </p>
          

           </div>
          
           </div>
           
        </div>
    );
};

export default HotelInfo;