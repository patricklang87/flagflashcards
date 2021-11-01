import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeCurrentUser } from '../../redux/userRedux';

export default function Logout() {
    const history = useHistory();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(removeCurrentUser());
        history.push('/');
        console.log("removing token");
        localStorage.removeItem('lyf_token');
    }

    return (
        <button onClick={() => logout()} className="buttonAsNav">Logout</button>
    )
}
