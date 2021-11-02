import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../auth/Logout';
import { useSelector } from 'react-redux';
import './nav.css'

const Nav = () => {
    const currentUser = useSelector(state => state.user.user);
    const [navVis, setNavVis] = useState(false);
    
    const visibleNav = { transform: 'translateY(0)' };
    const invisibleNav = { transform: 'translateY(-180px)'};

    let navPosition;
    if (window.innerWidth < 480) {
        navPosition = (navVis) ? visibleNav : invisibleNav;
    } else {
        navPosition = {};
    }

    return (
        <>
        <nav style={navPosition}>   
            {(currentUser) && <span style={{color: 'black', margin: 'auto'}}>Welcome, {currentUser}!</span>}
            <Link onClick={() => setNavVis(false)} to="/CountryList">ALL COUNTRIES</Link> 
            <Link onClick={() => setNavVis(false)} to="/KnownFlags">MANAGE MEMORIZED</Link> 
            <Link onClick={() => setNavVis(false)} to="/FlashCards">FLASH CARDS</Link>   
            <Link onClick={() => setNavVis(false)} to="/FlagQuiz">FLAG QUIZ</Link>
            {(currentUser) ? <Logout setNavVis={setNavVis} /> : <Link onClick={() => setNavVis(false)} to="/">LOGIN</Link> } 
            
            <h3 className="viewNav" onClick={() => setNavVis(!navVis)} >Navigation</h3>    
        </nav>
        
        </>
    );
}

export default Nav;