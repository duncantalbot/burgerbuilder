import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    //This could be a functional coponent does not have to be a classd
    componentWillUpdate(){
        console.log('[Order Summary] WillUpdate!');
    }

    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitilize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
        });

        return (
            <Auxiliary>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingrediaents:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout!</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button> 
            </Auxiliary>
        );
        }
};

export default OrderSummary;