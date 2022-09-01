import React from 'react';
import quote from '../../../images/quote.svg';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Testimonial from '../Testimonial/Testimonial';


const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas laborum vitae quam nulla velit et sequi qui cupiditate saepe.',
        name:'Wilson Harry',
        location:'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas laborum vitae quam nulla velit et sequi qui cupiditate saepe.',
        name:'Ema Gomez',
        location:'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas laborum vitae quam nulla velit et sequi qui cupiditate saepe.',
        name:'Aliza Farari',
        location:'California',
        img: aliza
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header d-flex justify-content-between">
                    <div>
                        <h5 className='text-primary text-uppercase'> testimonial </h5>
                        <h1> What Our Patients <br /> Says </h1>
                    </div>
                    <div>
                        <img style={{height:"150px", transform: "translateY(-30px)"}} src={quote} alt="" />
                    </div>
                </div>
                <div className="card-deck d-flex mt-5">
                    {
                        testimonialData.map((testimonial, i)=> <Testimonial key={i} cardId={i} testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;