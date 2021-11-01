import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../utils/auth';
import { setCurrentUser } from '../../redux/userRedux';

export default function Login({setViewLogin}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const handleLogin = async () => {
        if (!password || !email) {
            return setMsg('Please complete all fields.');
        }

        if (!email.includes('@') || !email.includes('.')) {
            return setMsg('Please use a valid email address.');
        }

        try {
            const response = await login({ email, password });
            if (response.data.user) {
                console.log('response.data.user', response.data.user);
                dispatch(setCurrentUser(response.data));
                history.push('/KnownFlags')
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className="authContainer">
            <h3>Login</h3>
            <div>
                {(msg) && <p>{msg}</p>}
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" placeholder="Email" name="email" onChange={(e) => {setEmail(e.target.value)}} />
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" placeholder="Password" name="password" onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <button onClick={handleLogin}>Login</button>
            <p>First time here? <button onClick={() => setViewLogin(false)}>Create an account!</button></p>
        </div>
    )
}
