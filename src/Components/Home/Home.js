import React, { useContext, useState } from 'react';
import Data from '../../Data/Data';
import './Home.css'
import Sree from '../../Image/Sreemongol.png'
import Sundar from '../../Image/sundorbon.png'
import Cox from '../../Image/Sajek.png'
import { useHistory } from 'react-router';
import { userContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

 const Home = () => {
    const [tourSpot,setTourSpot]=useState(Data)
    const history=useHistory()
    const handleRoute=(info)=>{
        history.push('/booking')
       
        setCoxsetInfo(info)
    }

    const handleCox=(info)=>{
        history.push('/booking')
    setCoxsetInfo(info)
    }
    
    const handleSree=(info)=>{
        history.push('/booking')
        setCoxsetInfo(info)
    }
    const handleSun=(info)=>{
        history.push('/booking')
        setCoxsetInfo(info)
    }
    const [Coxinfo,setCoxsetInfo]=useContext(userContext)
    return (
        <section className="home">

        
        <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-12 mt-5 pt-5 text-white text-left">
            <h1>{tourSpot[0].name}</h1>
            <p className="text-light">{tourSpot[0].info}</p>
            <button  onClick={()=>handleRoute(tourSpot[0])} className="btn btn-warning p-2 text-center m-2 px-4">Booking <FontAwesomeIcon  icon={faArrowCircleRight}/> </button>
               
            </div>
            <div className="col-md-6 mt-5 pt-5 col-sm-8">
                <div className="d-flex">
                    <div className="mr-3">

                    
                <img className="pics" onClick={()=>handleCox(tourSpot[0])} style={{height:'300px'}}  src={Cox} alt="" />
                <p className="p-2 mt-2 bg-secondary text-light text" style={{borderRadius:'8px'}}>COX,S BAZAR</p>
                </div>
                
                <div className="mr-3">

               <img className="pics" onClick={()=>handleSree(tourSpot[1])} style={{height:'300px'}}  src={Sree} alt="" />
               <p className="p-2 mt-2 bg-secondary text-light text" style={{borderRadius:'8px'}}>SREEMONGOL</p>

                </div>
                <div className="mr-3">

               
                <img className="pics"  onClick={()=>handleSun(tourSpot[2])} style={{height:'300px'}} src={Sundar} alt="" />
                <p className="p-2 mt-2 bg-secondary text-light text" style={{borderRadius:'10px'}}>SUNDARBAN</p>
                </div>
                </div>

            </div>
            
        </div>
        </div>
        </section>
    );
};

export default Home;