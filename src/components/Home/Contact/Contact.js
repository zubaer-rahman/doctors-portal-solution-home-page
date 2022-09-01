import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact my-5 py-5 text-center">
            <div className="container"> 
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">contact us</h5>
                    <h1 className='text-white'>Always Connect With Us</h1>
                </div>
                <div className="section-body mt-5 pt-3">
                    <form className='contact-form'>
                        <input className='form-control mb-3' type="email" placeholder='Email Address*'/>
                        <input className='form-control mb-3' type="text" placeholder='Subject*' />
                        <textarea  className='form-control mb-3' name="" id="" cols="30" rows="5" placeholder='Your Message*'></textarea>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;