import React from 'react';
import './Doctors.css';
import doctor from '../../../images/doctorShort.png';
import DoctorsDetail from '../DoctorsDetail/DoctorsDetail';

const Doctors = () => {
    const doctors = [
        {
            name: "Dr. Caudi",
            phone: '+61 452 200 126',
            img: doctor
        },
        {
            name: "Dr. Caudi",
            phone: '+61 452 200 126',
            img: doctor
        },
        {
            name: "Dr. Caudi",
            phone: '+61 452 200 126',
            img: doctor
        }
    ]
    return (
        <section className='doctors my-5'>
            <div className="container">
                <h5 className="text-primary text-center"> Our Doctors </h5>    
                <div className="card-deck d-flex justify-content-between mt-5">
                    {
                        doctors.map((doctor, i) => <DoctorsDetail doctor={doctor} key={i} doctorId={i} /> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;