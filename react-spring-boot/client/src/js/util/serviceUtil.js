import axios from 'axios';

export const provideMeats = () => {
    try {
        return axios.get(process.env.REACT_APP_SERVICE_URL + '/meats')
    } catch (error){
        return error
    }
};