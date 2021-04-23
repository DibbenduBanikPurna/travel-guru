import React, { useContext, useState } from 'react';
import Map from '../../Image/map.jpg'
import {Hotels} from '../../Data/Data'
import HotelInfo from '../HotelInfo/HotelInfo';
import { nameContext } from '../../App';

const Hotel = () => {
    const [hotelInfo,setHotelInfo]=useState(Hotels)
    const [name,setName]=useContext(nameContext)
    return (
        <div className="container">
            <p  className="text-left">252 stays Apr 13-17 3 guests</p>
          <h5 className="text-left">stay in {name} </h5>
        <div className="row">
       
            <div className="col-md-4">
                {
                    hotelInfo.map(hotel=>{
                        return <HotelInfo hotelInfo={hotel} />
                    })
                }

            </div>
            <div className="col-md-7">
                <img className="img-fluid mb-3" style={{height:'700px'}} key={hotelInfo.id} src={Map} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Hotel;