import React from 'react';
import './DoctorsDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const DoctorsDetail = ({doctor}) => {
    return (
        <div className="card mt-5 border-0">
            <div className="card-body text-center">
                 <img className='img-fluid mb-3' src={doctor.img} alt="" /> 
                 <h6 className='text-primary'> {doctor.name} </h6> 
                 <p> <small className='text-secondary'><FontAwesomeIcon icon={faPhone} />{doctor.phone} </small> </p>
            </div>
        </div>
    );
};

export default DoctorsDetail;