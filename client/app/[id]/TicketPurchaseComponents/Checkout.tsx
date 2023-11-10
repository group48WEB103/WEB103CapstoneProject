'use client'
import React, { useState, useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';
import createTicket from '../../../services/POST/createTicket';
import { Event, Ticket } from '../../../services/types';

interface CheckoutProps {
    event: Event;
    closeCheckout: () => void;
    updateCart: (cartLength: number) => void;
    showInformation: (ticketID: number, ticket: Ticket) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ event, closeCheckout, updateCart, showInformation }) => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--AccentColor').trim();

    const getTotalPrice = () => {
        const cartString = localStorage.getItem('cart');
        const cart = cartString ? JSON.parse(cartString) : [];
        let total = 0;
        cart.forEach((item: any) => {
            total += item.price;
        });
        setTotalPrice(total);
    };

    const setItems = () => {
        const cartString = localStorage.getItem('cart');
        const cart = cartString ? JSON.parse(cartString) : [];
        setCart(cart);
        getTotalPrice();
    };

    const removeItem = (index: number) => {
        const cartString = localStorage.getItem('cart');
        const cart = cartString ? JSON.parse(cartString) : [];
        if (cart.length <= 1) {
            localStorage.removeItem('cart');
            updateCart(0);
        } else {
            const updatedCart = cart.filter((item: any) => item.id !== index);
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            updateCart(updatedCart.length);
        }
        setItems();
        getTotalPrice();
    };

    const getSelectedSeats = () => {
        const cartString = localStorage.getItem('cart');
        const cart = cartString ? JSON.parse(cartString) : [];
        return [cart.map((item: any) => item.id)];
    };

    const validateTicket = async (event_id: number, seat_numbers: number[], stadium_id: number, price: number) => {
        const ticket: Ticket = { event_id: event_id, seat_numbers: seat_numbers, stadium_id: stadium_id, price: price };
        const newTicket = await createTicket(ticket);
        showInformation(newTicket.id, ticket);
    };

    useEffect(() => {
        setItems();
        getSelectedSeats();
    }, []);

    return (
        <div id='Checkout'>
            <div id="Exit" onClick={closeCheckout}>
                <IoIosClose id="ExitIcon" onClick={closeCheckout} />
            </div>
            <div id="CheckoutContainer">
                <div id="CheckoutHeaderContainer">
                    <p id="CheckoutHeader">Checkout</p>
                </div>
                <div id="CheckoutItemsContainer">
                    {cart.length === 0 ? ( 
                        <div id="CheckoutEmptyContainer">
                            <p id="CheckoutEmpty">Your cart is empty.</p>
                        </div> 
                    ) : ( 
                        cart.map((item: any) => (
                            <div id="CheckoutItem" key={item.id}>
                                <div id="CheckoutItemInfoContainer">
                                    <div id="CheckoutItemNameContainer">
                                        <p id="CheckoutItemName">{item.title}</p>
                                    </div>
                                    <div id="CheckoutItemPriceContainer">
                                        <p id="CheckoutItemPrice">${item.price}</p>
                                    </div>
                                </div>
                                <div id="CheckoutItemRemoveContainer">
                                    <p id="CheckoutItemRemove" onClick={() => removeItem(item.id)}>Remove</p>
                                </div>
                            </div>
                        )) 
                    )}
                </div>
                <div id="TotalPriceContainer">
                    <p id="TotalPrice">Total: ${totalPrice}</p>
                </div>
                <div id="CheckoutButtonContainer">
                    {totalPrice > 0 ? ( <div id="CheckoutButton" onClick={() => validateTicket(event.id, getSelectedSeats(), event.stadium_id, totalPrice)}>Checkout</div> ) : null}
                </div>
            </div>
            <style>
                {`
                    #Checkout {
                        display: flex;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        justify-content: center;
                        align-items: center;
                        background-color: rgba(0, 0, 0, 0.7);
                        cursor: pointer;
                        z-index: 10;
                    }
                    #Exit {
                        display: flex;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                    }
                    #ExitIcon {
                        display: flex;
                        position: fixed;
                        top: 10px;
                        left: 10px;
                        font-size: 80px;
                        color: white;
                        cursor: pointer;
                        z-index: 12;
                    }
                    #CheckoutContainer {
                        display: flex;
                        position: relative;
                        width: 85%;
                        height: 80%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border-radius: 10px;
                        background-color: white;
                        cursor: default; 
                        z-index: 13;
                    }
                    #CheckoutHeaderContainer {
                        display: flex;
                        width: 100%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                    }
                    #CheckoutHeader {
                        font-size: 30px;
                        font-family: InterBold;
                    }
                    #CheckoutItemsContainer {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 60%;
                        flex-direction: column;
                        align-items: center;
                        overflow-y: scroll;
                    }
                    #CheckoutItemsContainer::-webkit-scrollbar {
                        width: 10px;
                        background-color: transparent;
                    }
                    #CheckoutItemsContainer::-webkit-scrollbar-thumb {
                        background-color: #c4c4c4;
                        border-radius: 10px;
                    }
                    #CheckoutItem {
                        display: flex;
                        position: relative;
                        width: 95%;
                        height: 110px;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;
                        border-bottom: 1px solid black;
                    }
                    #CheckoutItemInfoContainer {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #CheckoutItemNameContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 70%;
                        flex-direction: row;
                    }
                    #CheckoutItemPriceContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 30%;
                        padding-bottom: 10px;
                        flex-direction: row;
                        align-items: center;
                    }
                    #CheckoutItemRemoveContainer {
                        display: flex;
                        position: relative;
                        width: 20%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                    }
                    #TotalPriceContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                    }
                    #CheckoutItemName {
                        font-size: 18px;
                        font-family: InterSemi;
                        overflow-x: scroll;
                    }
                    #CheckoutItemName::-webkit-scrollbar {
                        display: none;
                    }
                    #TotalPrice {
                        font-size: 25px;
                        font-family: InterBold;
                    }
                    #CheckoutEmptyContainer {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 100%;
                        font-size: 20px;
                        font-family: InterSemi;
                        justify-content: center;
                        align-items: center;
                    }
                    #CheckoutButtonContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                    }
                    #CheckoutButton {
                        display: flex;
                        position: relative;
                        width: 300px;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                        color: var(--TextColor);
                        font-size: 20px;
                        font-family: InterSemi;
                        background-color: ${accentColor === 'rgba(255,255,255,0.95)' ? 'rgb(169,169,169)' : 'var(--AccentColor)'};
                        border-radius: 25px;
                        box-shadow: -1px 1.5px 5px black;
                        cursor: pointer;
                    }
                    @media (max-width: 600px) {
                        #CheckoutContainer { height: 75%; }
                        #CheckoutItem { height: 80px; }
                        #CheckoutItemNameContainer { height: 80%; }
                        #CheckoutItemPriceContainer { 
                            height: 20%; 
                            align-items: flex-end; 
                            padding-bottom: 0px;
                            padding-top: 3px;
                        }
                        #CheckoutItemName { font-size: 15px; }
                        #CheckoutItemPrice { font-size: 13px; }
                    }
                `}
            </style>
        </div>
    )
}

export default Checkout;