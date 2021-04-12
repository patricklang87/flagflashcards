const fetchFlags = async () => {
    const flags = await fetch('https://restcountries.eu/rest/v2/all');
    return flags.json();
}

export const loadFlags = () => {
    return async (dispatch) => {
        const payload = await fetchFlags();
        console.log(payload);
        dispatch({type: "cardFlip/loadCards", payload: payload});
    }
}