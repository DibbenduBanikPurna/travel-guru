import React from 'react';
import Guard from '../../Image/guard.jpg'
const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 m-auto mt-5 pt-5">
                    <div className="card">
                        <img className="img-fluid" src={Guard} alt=""/>
                        <div className="card-body bg-secondary text-light">
                            <p>Mr Tom is in charge.If you face any problem,than you can report or ask any question to us.If you need dogs,you can contact with us.we have many pro dogs and snakes who are very dangerous in Last zone.I think they are very useful for you,to get chicken dinner</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;