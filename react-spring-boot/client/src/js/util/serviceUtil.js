import axios from 'axios';

const provideMeats = async () => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_SERVICE_URL}/meats`);

        return data.map(thing => {
            return thing.name;
        });
    } catch (error){
        return error
    }
};

const provideSides = async () => {
    try{
        const {data} = await axios.get(`${process.env.REACT_APP_SERVICE_URL}/sides`);

        return data.map(thing => {
            return thing.name;
        })
    } catch (error){
        return error
    }
};

const provideSizes = async () => {
    try{
        const {data} = await axios.get(`${process.env.REACT_APP_SERVICE_URL}/sizes`);

        return data.map(thing => {
            return thing.name;
        })
    } catch (error){
        return error
    }
};

const provideTypes = async () => {
    try{
        const {data} = await axios.get(`${process.env.REACT_APP_SERVICE_URL}/types`);

        return data.map(thing => {
            return thing.name;
        })
    } catch (error) {
        return error
    }
};

export const provideAll = async () => {
    try{
        const [Meats, Sides, Sizes, Types] = await Promise.all([provideMeats(), provideSides(), provideSizes(), provideTypes()]);

        return {meats: Meats, sides: Sides, sizes: Sizes, types: Types}
    } catch (error){
        return error;
    }
};