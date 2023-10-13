'use client'
import React, { useState, useEffect } from 'react';
import AddToCart from './AddToCart';
import Cart from './Cart';
import Checkout from './Checkout';

export default function Modal( hotel: any ) {

    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const [cartLength, setCartLength] = useState(0);

    const handleCartModal = (cartLength: number) => {
        console.log('in handleCartModal, cartLength is ', cartLength)
        if (cartLength > 0) {
            console.log('in handleCartModal, cartLength is greater than 0, cart length is set to: ', cartLength)
            setCartLength(cartLength);
            setShowCart(true);
        } else {
            console.log('in handleCartModal, cartLength is less than 0, cart length is set to: ', 0)
            setCartLength(0)
            setShowCart(false);
        }
    }

    const showCheckoutModal = () => {
        setShowCart(false);
        setShowCheckout(true);
    }

    const closeCheckoutModal = () => {
        setShowCheckout(false);
    }

    useEffect(() => {

        const cart = localStorage.getItem('cart');
        if (cart) {
            const cartArray = JSON.parse(cart);
            setCartLength(cartArray.length);
            console.log('in useEffect, set cart length to ', cartArray.length);
            handleCartModal(cartArray.length);
        } else {
            setCartLength(0);
            console.log('in useEffect, set cart length to ', 0);
            handleCartModal(0);
        }

    }, []);

    return (
        <div>
            <AddToCart hotel={hotel} changeCartState={(cartLength) => handleCartModal(cartLength)} />
            {showCart && <Cart showCheckout={showCheckoutModal} cartLength={cartLength} />}
            {showCheckout && <Checkout updateCart={(cartLength) => handleCartModal(cartLength)} closeCheckout={closeCheckoutModal} />}
        </div>
    )
}