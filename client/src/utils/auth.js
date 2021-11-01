import axios from 'axios';


// Setup config/headers and token
export const tokenConfig = () => {
    const token = localStorage.getItem('lyf_token');

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    } else {
        console.log('no token saved');
    }

    return config;
}

//Process resulting data from login request
const userLogin = (response) => {
    // setCurrentUser({token: response.data.token, user: response.data.user, flags: response.data.memorizedFlags});
    localStorage.setItem('lyf_token', response.data.token);
}

// Register request new user
export const register = async ({ name, email, password}) => {
    try {
        const response = await axios.post('/api/users/', { name, email, password });
        userLogin(response);
        return response;
    } catch (err) {
        throw err;
    }
}

//Login request
export const login = async ({ email, password }) => {
    try {
        const response = await axios.post('/api/auth/', { email, password });
        userLogin(response);
        console.log('login', response);
        return response;
    } catch (err) {
        throw err;
    }
}

//Get user data if logged in
export const getUserData = async () => {
    try {
        const response = await axios.get('/api/auth', tokenConfig());
        return response;
    } catch (err) {
        console.log(err)
    }
}
