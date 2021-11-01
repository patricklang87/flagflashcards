import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCurrentUser } from '../../redux/userRedux';

export default function Logout() {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(removeCurrentUser());
        console.log("removing token");
        localStorage.removeItem('lyf_token');
    }

    return (
        <button onClick={() => logout()} style={{border: 'none', backgroundColor: 'inherit', cursor: 'pointer', color: 'white', }}>Logout</button>
    )
}
