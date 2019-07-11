import axios from 'axios';

export const provideMeats = async () => {
    try {
        return {Meats: await axios.get(`${process.env.REACT_APP_SERVICE_URL}/meats`)}
    } catch (error){
        return error
    }
};

export const provideSides = async () => {
    try{
        return {Sides: await axios.get(`${process.env.REACT_APP_SERVICE_URL}/sides`)}
    } catch (error){
        return error
    }
};

export const provideSizes = async () => {
    try{
        return {Sizes: await axios.get(`${process.env.REACT_APP_SERVICE_URL}/sizes`)}
    } catch (error){
        return error
    }
};

export const provideTypes = async () => {
    try{
        return {Types: await axios.get(`${process.env.REACT_APP_SERVICE_URL}/types`)}
    } catch (error) {
        return error
    }
};