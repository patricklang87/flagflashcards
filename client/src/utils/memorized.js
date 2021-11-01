import axios from 'axios';
import { tokenConfig } from './auth';

export const addFlag = flag => {
    axios
        .patch('/api/memorized', { flag }, tokenConfig())
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

export const removeFlag = (flag) => {
    axios
        .delete(`/api/memorized/${flag}`, tokenConfig())
        .then(res => console.log(res))
        .catch(err => console.log(err));
}