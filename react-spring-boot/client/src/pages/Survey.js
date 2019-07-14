import React from 'react';
import {Star} from '../components/Star';
import * as service from '../js/util';
import '../styles/index.css';

class Survey extends React.PureComponent{
    constructor(){
        super();

        this.state = {
            stars: [1,2,3,4,5],
            rating: [],
            clickedStar: 0,
            order: '',
            foodTypes: [],
            meats: [],
            sides: [],
            orderSizes: [],
            orderNumber: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange=(event)=>this.setState({clickedStar: event.currentTarget.id-1});

    handleSubmit(event){
        event.preventDefault();
        const {clickedStar} = this.state;

        if (clickedStar + 1 > 1 && clickedStar + 1 < 5){
            alert(`Woot! ${clickedStar+1} stars!`);
        } else if(clickedStar + 1 === 5){
            alert(`Oh snap!!! We got ${clickedStar+1} stars!`);
        } else {
            alert(`Ohhh... ${clickedStar+1} star`);
        }
    }

    decideGrayscale=(index)=>(index <= this.state.clickedStar);

    generateOrderNumber = (explict) => {
        const num = explict === undefined ? 10 : explict;

        return Math.floor((Math.random() * num) + 1);
    };

    pullOrder = ({foodTypes, meats, sides, orderSizes}) => {
        if (foodTypes && meats && sides && orderSizes){
            const foodIdx = this.generateOrderNumber(foodTypes.length-1);
            const meatIdx = this.generateOrderNumber(meats.length-1);
            const sideIdx = this.generateOrderNumber(sides.length-1);
            const orderIdx = this.generateOrderNumber(orderSizes.length-1);

            const foodType = foodTypes[foodIdx];
            const meatType = meats[meatIdx];
            const sideType = sides[sideIdx];
            const orderType = orderSizes[orderIdx];

            return {type: foodType, meat: meatType, side: sideType, size: orderType}
        }
    };

    componentDidMount(){
        service.provideAll()
            .then(response => {
                this.setState({
                    meats: response.meats,
                    sides: response.sides,
                    foodTypes: response.types,
                    orderSizes: response.sizes,
                    orderNumber: this.generateOrderNumber()
                })
            })
            .catch();
    }

    render(){
        const {stars, orderNumber} = this.state;
        const order = this.pullOrder(this.state);
        const sentence = order.size !== undefined ?  `${order.size} ${order.meat} ${order.type} with ${order.side}` : '';

        return(
            <div className={'wrapper'}>
                <h1>Thank You!</h1>
                <h4>Please Rate Our Food</h4>
                <p>order no: {orderNumber}</p>

                <section className={'form-center'}>
                    <form onSubmit={this.handleSubmit}>
                        {order.size !== undefined
                            ?
                            <section>
                                <p>Thank you for your order of <br/> 1 {sentence} <br/><br/> How many stars do you give us?</p>
                            </section>
                            :
                            <section>
                                <p>Loading order</p>
                            </section>
                        }

                        <section className={'star-box'}>
                            {stars.map((star, index) =>
                                <section key={index} id={`${star}`} onClick={this.handleChange}>
                                    <Star grayscale={!this.decideGrayscale(index)}/>
                                </section>
                            )}
                        </section>

                        <section className={'submit-wrapper'}>
                            <input className={'submit-btn'} type='submit' value={'Let Us Know'}/>
                        </section>
                    </form>
                </section>
            </div>
        )
    }
}

export default Survey;