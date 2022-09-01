import React from 'react';
import BussinessCard from '../BussinessCard/BussinessCard';
import {  faClock  } from '@fortawesome/free-solid-svg-icons';
import {  faMapMarker  } from '@fortawesome/free-solid-svg-icons';
import {  faPhone  } from '@fortawesome/free-solid-svg-icons';

const InfosData = [
    {
        title: "Opening Hours",
        description: "Lorem ipsum dolor sit amet",
        icon: faClock,
        background: 'primary'
    },
    {
        title: "Visit our location",
        description: "Brooklyn, NY 10036, United States",
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: "Contact us now",
        description: "+000 123 456789",
        icon: faPhone,
        background: 'primary'
    }
]

const BussinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {InfosData.map((info, i) => <BussinessCard key={i} info = {info} />)}
            </div>
        </section>
    );
};

export default BussinessInfo;