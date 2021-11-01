import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './Auth.css';


export default function Auth() {
    const [viewLogin, setViewLogin] = useState(true);

    return (
        <div>
            {(viewLogin) ? <Login setViewLogin={setViewLogin} /> : <Register setViewLogin={setViewLogin}/>}
        </div>
    )
}
