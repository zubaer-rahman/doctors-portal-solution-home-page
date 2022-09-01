import React from 'react';
import doctor from '../../../images/doctor.png';
import "./MakeAppoinment.css";

const MakeAppoinment = () => {
    return (
        <section className='make-appoinment'>
            <div className="container">
            <div className="row">
                <div className="col-md-5 d-none d-md-block">
                  <img className='' src={doctor} alt="" />
                </div>
                <div className="col-md-7 text-white info py-5 ps-md-5">
                    <h5 className='text-primary text-uppercase'> appoinment </h5>
                    <h1 className='my-4'> Make a appoinment Today </h1>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nihil placeat assumenda dicta distinctio pariatur? </p>
                    <button className='btn btn-primary'> Learn More </button>
                </div>
            </div>

            </div>
        </section>
    );
};

export default MakeAppoinment;