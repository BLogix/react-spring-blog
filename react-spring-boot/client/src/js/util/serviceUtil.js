import axios from 'axios';

export const provideMeats = () => {
    axios.get(process.env.REACT_APP_SERVICE_URL)
        .then()
        .catch();
};