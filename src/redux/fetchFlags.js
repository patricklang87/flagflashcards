

const fetchFlags = async () => { 

    try {
        const flags = await fetch('https://restcountries.com/v2/all');
        return flags.json(); 
    } catch (err) {
        console.log("The site was unable to communicate with its source API. Please try again soon.");
    }

}

export const loadFlags = () => {
    return async (dispatch) => {
        const payload = await fetchFlags();
        console.log(payload);
        dispatch({type: "cardFlip/loadCards", payload: payload});
    }
}