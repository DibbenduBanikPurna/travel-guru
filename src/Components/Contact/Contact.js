import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="container">
            <h5 className="pt-2">Contact Us</h5>
            <div className="row">
                <div className="col-md-7 m-auto">
                <form className=" mt-5 pt-5">
                    <input className="form-control" type="text" placeholder="Name"/>
                    <br/>
                    <input className="form-control" type="email" placeholder="email"/>
                    <br/>
                    <textarea placeholder="add question or complain" className="form-control" rows="10" col="30" ></textarea>
                    <br/>
                    <button className="btn btn-outline-primary">submit</button>
                </form>

                </div>
            </div>
              <div className="foot">
              <h2 className="" >Thanks For Feedback</h2>
                 <p>please contact For any information</p>   
                <p>purna.banik16447@gmail.com</p>
              </div>
               
        </div>
    );
};

export default Contact;