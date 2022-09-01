import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => <div> 
    <Header />
    <Services />
    <FeaturedService /> 
    <MakeAppoinment /> 
    <Testimonials />
    <Blogs />
    <Doctors />
    <Contact />
    <Footer />
    </div>

export default Home;