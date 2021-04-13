import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <>
        <nav>   
           <Link to="/">Home</Link>  
            <Link to="/CountryList">Country List</Link> 
            <Link to="/KnownFlags">Manage Flags</Link> 
            <Link to="/FlashCards">Flash Cards</Link>   
            <Link to="/FlagQuiz">FlagQuiz</Link> 
            <h3 className="viewNav" >Navigation</h3>    
        </nav>
        
        </>
    );
}

export default Nav;