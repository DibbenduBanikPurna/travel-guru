import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import {  nameContext, userContext } from '../../App';
import './Booking.css'
const Booking = () => {
    const [Coxinfo, setCoxsetInfo]=useContext(userContext)
     const [name,setName]=useContext(nameContext)
     const [bookDate,setBookDate]=useState({
         name:'',
         from:'',
         to:''

     })
    const history=useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const handleBooking=(n)=>{
       
        history.push('/hotel')
        
       setName(n)
        
        

    }
    const handleChange=(e)=>{
        const newBooking={...bookDate}
        newBooking[e.target.name]=e.target.value
        console.log(e.target.name,e.target.value)
        setBookDate(newBooking)
    }
    const date=new Date().toLocaleDateString()
    return (
      
        <section className="book">

       
        <div className="container">
            <div className="row">
               <div className="col-md-6 col-sm-12 mt-5 pt-5 text-left">
                   <h3 className="text-light">{Coxinfo.name}</h3>
                   <p className="text-light">{Coxinfo.info}</p>

                

                   </div> 
                   <div className="col-md-6 col-sm-12 mt-5">
                       <form onSubmit={handleSubmit} className="forms mb-4">
                           <label htmlFor="location">Origin</label>
                          
                           <input name="name" onFocus={handleChange} required className="form-control" type="text" placeholder="Enter Location"/>
                          
                           <label  htmlFor="destination">Destination</label>
                           
                           <input onFocus={handleChange} defaultValue={Coxinfo.name} className="form-control" type="text" placeholder="Enter Destination"/>
                         
                           <label>From</label>

                           <input defaultValue={date} name="from" onFocus={handleChange} required className="form-control" type="calender" />
                          
                           <label>To</label>
                         
                           <input name="to" onFocus={handleChange} required className="form-control" type="date"  />
                            <br/>
                           <button onClick={()=>handleBooking(Coxinfo.name)} className="btn btn-warning form-control">Start Booking</button>
                       </form>
                   </div> 
            </div>
           
        </div>
        </section>
    );
};

export default Booking;