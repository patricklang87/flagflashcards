import axios from 'axios';

const fetchFlags = async () => { 
    try {
        const flags = await axios.get('/api/restcountries/');
        return flags.data.data;
    } catch (err) {
        console.log("The site was unable to communicate with its source API. Please try again soon.");
    }
}

export const loadFlags = () => {
    return async (dispatch) => {
        const payload = await fetchFlags();
        dispatch({type: "cardFlip/loadCards", payload: payload});
    }
}