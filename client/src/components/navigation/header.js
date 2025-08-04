import '../../css/components-style/header/Header.scss';
import { useState } from 'react';
import SideBar from '../../components/navigation/sidebar.js';
import {NavLink} from 'react-router-dom';

 function Header () { 
    const [toggleSideBar, setToggleSideBar] = useState(false);
    const clickSideBar = () => setToggleSideBar((prevState) => !prevState);

    return (
    <>
        <div className="main-header"> 
        <div className='header-container'>
            <div className="header-logo">
                <h1><span>dj</span> Mariwara</h1>
            </div>

        
            <ul className="header-list">

                <NavLink to="/">home</NavLink>
                <NavLink to="/about">about</NavLink>
                <NavLink to="/contact">contact</NavLink>
                <NavLink to="/mixes">mixes</NavLink>
                <NavLink to="/hi">events</NavLink>
               
            </ul>
            
            <div onClick={clickSideBar} className={`hamburger-nav ${toggleSideBar ? 'close' : ''}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
        </div>
        <SideBar isOpen={toggleSideBar}/> 
    </>
    );
}

export default Header;
