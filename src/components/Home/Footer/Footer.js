import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <div className='mt-3 pt-5'>
                        <p> Emergency Dental Care</p>
                        <p> Check Up </p>
                        <p> Treatment of Personal Diseases </p>
                        <p> Tooth Extraction </p>
                        <p> Check Up </p>
                    </div>
                    </div>
                    <div className="col-md-3">
                        <div> <h5 className='text-primary mb-3 '> Services </h5> </div>
                        <div className="pt-3">
                            <p> Emergency Dental Care</p>
                            <p> Check Up </p>
                            <p> Treatment of Personal Diseases </p>
                            <p> Tooth Extraction </p>
                            <p> Check Up </p>
                            <p> Check Up </p>
                            <p> Check Up </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div> <h5 className='text-primary mb-3'> Oral Health </h5> </div>
                        <div className="pt-3">
                            <p> Emergency Dental Care</p>
                            <p> Check Up </p>
                            <p> Treatment of Personal Diseases </p>
                            <p> Tooth Extraction </p>
                            <p> Check Up </p>
                            <p> Check Up </p>
                            <p> Check Up </p>
                            
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div> <h5 className='text-primary mb-3'> Our Address </h5> </div>
                        <div className="pt-3"> 
                            <p>New York - 101010 Hudson <br /> Yards</p>
                        </div>
                        <div className='mt-3 pt-3'>
                            <FontAwesomeIcon style={{height: "25px", color: "blue"}} icon={faFacebook} />
                            <FontAwesomeIcon style={{height: "25px", marginLeft: "5px", color: "blue"}} icon={faGooglePlus} />
                            <FontAwesomeIcon style={{height: "25px", marginLeft: "5px", color: "blue"}} icon={faTwitter} />
                            
                        </div>
                        <div className='mt-5 pt-5'>
                            <label> Call Now </label> <br />
                            <button className="btn call btn-primary"> +2025550295 </button>
                        </div>
                    </div>
                </div>
                <footer className='text-center text-secondary mt-5 pt-3'>Copyright {(new Date()).getFullYear()} All Rights Reserved</footer>
            </div>
        </section>
    );
};

export default Footer;