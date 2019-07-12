import React from 'react';
import {AppContext} from "./Context";
import * as service from '../../js/util';

export default class ContextProvider extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            foodTypes: [],
            meats: [],
            sides: [],
            orderSizes: [],
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

    componentDidMount(){
        service.provideAll()
            .then(response => {
                console.log('response', response);

                this.setState({
                        meats: response.meats,
                        sides: response.sides,
                        foodTypes: response.types,
                        orderSizes: response.sizes
                    })
            })
            .catch(error => {
                console.log('oh dang! something broke', error)
            });
    }

    render(){
        return(
            <AppContext.Provider value={{foodContext: {...this.state}}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}