import React from 'react';
import {AppContext} from "./Context";
import * as service from '../../js/util/serviceUtil';

export default class ContextProvider extends React.Component{
    constructor(){
        super();

        this.state = {
            foodTypes: ['taco', 'burger', 'panini', 'sausage'],
            meats: ['chicken', 'beef', 'charizo', 'turkey'],
            sides: ['french fries', 'tots', 'chips', 'a salad'],
            orderSizes: ['small', 'medium', 'large'],
            orderNumber: this.generateOrderNumber(),
            createOrder: this.createOrder.bind(this)
        };
    }

    generateOrderNumber = (explict) => {
        const num = explict === undefined ? 10 : explict;

        return Math.floor((Math.random() * num) + 1);
    };

    createOrder = () => {
        const {foodTypes, meats, sides, orderSizes} = this.state;

        const foodIndex = this.generateOrderNumber(foodTypes.length -1);
        const foodType = foodTypes[foodIndex];

        const meatIndex = this.generateOrderNumber(meats.length -1);
        const meatType = meats[meatIndex];

        const sideIndex = this.generateOrderNumber(sides.length -1);
        const sideType = sides[sideIndex];

        const sizeIndex = this.generateOrderNumber(orderSizes.length -1);
        const sizeType = orderSizes[sizeIndex];

        return {type: foodType, meat: meatType, side: sideType, size: sizeType};
    };

    render(){
        return(
            <AppContext.Provider value={{foodContext: {...this.state}}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}