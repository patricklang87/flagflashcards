import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './auth/Logout';
import { useSelector } from 'react-redux';

const Nav = () => {
    const currentUser = useSelector(state => state.user.user);


    return (
        <>
        <nav>   
             
            <Link to="/CountryList">Country List</Link> 
            <Link to="/KnownFlags">Manage Flags</Link> 
            <Link to="/FlashCards">Flash Cards</Link>   
            <Link to="/FlagQuiz">Flag Quiz</Link>
            {(currentUser) && <span style={{color: 'white', margin: 'auto'}}>Welcome, {currentUser}!</span>}
            {(currentUser) ? <Logout /> : <Link to="/">Login</Link> } 
            
            <h3 className="viewNav" >Navigation</h3>    
        </nav>
        
        </>
    );
}

export default Nav;