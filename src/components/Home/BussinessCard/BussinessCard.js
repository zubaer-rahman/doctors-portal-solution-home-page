import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BussinessCard.css';

const BussinessCard = ({info}) => {
    return (
        <div className='col-md-4 info-card'>
            <div className={`d-flex info-${info.background} text-white info-container justify-content-center`}>
                <div>
                    <FontAwesomeIcon className='info-icon me-3' icon = {info.icon} /> 
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <p>{info.description}</p>
                </div>
            </div>
        </div> 
    );
};

export default BussinessCard;