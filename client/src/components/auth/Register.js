import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../utils/auth';
import { setCurrentUser } from '../../redux/userRedux';

export default function Register({setViewLogin}) {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');

    const handleRegister = async () => {
        if (!password || !email || !name) {
            return setMsg('Please complete all fields.');
        }

        if (!email.includes('@') || !email.includes('.')) {
            return setMsg('Please use a valid email address.');
        }

        try {
            const response = await register({email, name, password});
            console.log(response);
            if (response.data.user) {
                setMsg('');
                setViewLogin(true);
                dispatch(setCurrentUser(response.data.user));
            } else if (response.data.msg) {
                setMsg(response.data.msg);
            }
        } catch (err) {
            console.log(err);
        }

    }
    
    return (
        <div className="authContainer">
            <h3>Register</h3>
            <div>
                {(msg) && <p>{msg}</p>}
            </div>
            <div>
                <label for="name">Name</label>
                <input type="text" placeholder="Name" name="name" onChange={(e) => {setName(e.target.value)}} />
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" placeholder="Email" name="email" onChange={(e) => {setEmail(e.target.value)}} />
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" placeholder="Password" name="password" onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <button onClick={handleRegister}>Register</button>
            <p>Already registered? <button href='#' onClick={() => setViewLogin(true)}>Login</button></p>
        </div>
    )
}
