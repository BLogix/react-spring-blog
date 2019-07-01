import React from 'react';

export const AppContext = React.createContext({
    foodContext:{
        foodTypes: [],
        meats: [],
        sides: [],
        orderSizes: [],
        orderNumber: '',
        createOrder: () => {}
    }
});