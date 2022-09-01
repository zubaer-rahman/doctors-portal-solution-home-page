import React from 'react';
import BussinessInfo from '../BussinessInfo/BussinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => <div className='header-container'><Navbar /> <HeaderMain /> <BussinessInfo /> </div> ;

export default Header;