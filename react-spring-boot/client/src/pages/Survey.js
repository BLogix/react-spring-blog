import React from 'react';
import {withContext} from "../api/context";
import {Star} from '../components/Star';
import '../styles/index.css';

class Survey extends React.PureComponent{
    constructor(){
        super();

        this.state = {
            stars: [1,2,3,4,5],
            rating: [],
            clickedStar: 0
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

    componentDidMount(){
        const {createOrder} = this.props.foodContext;

        const order = createOrder();

        const sentence = `${order.size} ${order.meat} ${order.type} with ${order.side}`;

        this.setState({rating:
                <section>
                    <p>Thank you for your order of <br/> 1 {sentence} <br/><br/> How many stars do you give us?</p>
                </section>
        })
    }

    render(){
        const {orderNumber} = this.props.foodContext;
        const {stars, rating} = this.state;

        return(
            <div className={'wrapper'}>
                <h1>Thank You!</h1>
                <h4>Please Rate Our Food</h4>
                <p>order no: {orderNumber}</p>

                <section className={'form-center'}>
                    <form onSubmit={this.handleSubmit}>
                        {rating}

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

export default withContext(Survey);