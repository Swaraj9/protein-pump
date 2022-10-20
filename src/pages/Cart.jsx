import React from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import { useCartContext } from '../context/CartContext'
import '../styles/cart.css'
import {loadStripe} from '@stripe/stripe-js'

let stripe;

const getStripe = () => {
    if(!stripe){
        stripe = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }

    return stripe;
}

const CartItem = ({name, amount, value}) => {
    return(
        <tr className='cartItem'>
            <td className='cartItemCol'>{name}</td>
            <td className='cartItemCol'>{amount}</td>
            <td className='cartItemCol'>{value + ' ₹'}</td>
            <td className='cartItemCol'>{amount*value + ' ₹'}</td>
        </tr>
    )
}

const Cart = () => {

    const {items} = useCartContext();

    const checkoutOptions = {
        lineItems: items.map(item => {return{price:item.priceLink, quantity: item.amount}}),
        mode: 'payment',
        successUrl: window.location.origin,
        cancelUrl: window.location.origin,
    }
    
    const redirectToCheckout = async() => {
        const stripe = await getStripe();
        const {error} = await stripe.redirectToCheckout(checkoutOptions);
        alert("Stripe Checkout Error: " + error)
    }

    const sum = (items) => {
        let s = 0;
        for(let i = 0; i < items.length; i++){
            s += (items[i].amount * items[i].value);
        }
        return(s);
    }

    return (
    <div className='cart'>
        <Title style={{marginBottom:'2rem', fontSize:'2.5rem'}}>Cart Items</Title>
        <table className='cartItems'>
            <tbody>
                <tr style={{color: 'var(--primary)', backgroundColor: 'var(--black)'}}>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Value</th>
                    <th>Total</th>
                </tr>
                {items.map(item => <CartItem name={item.name} amount={item.amount} value={item.value}/>)}
            </tbody>
        </table>
        <div className='cartItemsTotal'>{`Total: ${sum(items)} ₹`}</div>
        <Button onClick={items ? redirectToCheckout : ()=>{}}>Pay</Button>
    </div>
    )
}

export default Cart