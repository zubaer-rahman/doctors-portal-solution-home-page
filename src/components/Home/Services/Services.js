import React from 'react';
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import ServiceDetail  from "../ServiceDetail/ServiceDetail.js"

const ServiceData = [
    {
        name: "Fluoride Treatment",
        img: fluoride,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas veniam quia consequatur"
    },
    { 
        name: "Cavity Filling",
        img: cavity,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas veniam quia consequatur"
    },
    {
        name: "Teath Whitening",
        img: whitening,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas veniam quia consequatur"
    }
]

const Services = () => {
    return (
        <section className='service-container mt-5'>
             <div className='text-center'>
                 <h5 style={{color: "#1cc7c1"}}>OUR SERVICES</h5>
                 <h2>Services We Provide</h2>
             </div> 
             <div className="d-flex justify-content-center mt-5 pt-5">
                 <div className="w-75 row">
                     {
                        ServiceData.map((service, i) => <ServiceDetail service={service} key={i} />)
                     }
                     
                 </div>
             </div>
         
        </section>

    );
};

export default Services;