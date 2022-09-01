import React from 'react';
import './Testimonial.css';

const Testimonial = ({testimonial,cardId}) => {
    return (
        <div className={`card card-${cardId}`}>
            <div className="card-body">
                <p className=" mb-5 mt-3">{testimonial.quote}</p> 
                <div className="d-flex text-center">
                    <div className=" ">
                        <img style={{height:"50px"}} className="ps-3" src={testimonial.img} alt="opps" />
                    </div>
                    <div  className="ms-3">
                         <h6 className="text-primary">{testimonial.name}</h6> 
                         <p><small className="  text-secondary">{testimonial.location}</small></p> 
                    </div>                   
                </div>
            </div>

        </div>
    );
};

export default Testimonial;