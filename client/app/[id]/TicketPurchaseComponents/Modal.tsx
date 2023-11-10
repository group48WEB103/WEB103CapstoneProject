'use client'
import React, { useState, useEffect } from 'react';
import SeatSelection from './SeatSelection';
import Cart from './Cart';
import Checkout from './Checkout';
import Information from './Information';
import Confirmation from './Confirmation';
import { Stadium, Event, Ticket, Customer } from '../../../services/types';

interface ModalProps {
    stadium: Stadium;
    event: Event;
}

const Modal: React.FC<ModalProps> = ({ stadium, event }) => {

    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const [showInformation, setShowInformation] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [ticketID, setTicketID] = useState(0);
    const [cartLength, setCartLength] = useState(0);
    const [ticket, setTicket] = useState<Ticket>({ event_id: 0, seat_numbers: [], stadium_id: 0, price: 0 });
    const [customer, setCustomer] = useState<Customer>({ name: '', email: '', password: '', tickets: [] });

    const handleCartModal = (cartLength: number) => {
        if (cartLength > 0) {
            setCartLength(cartLength);
            setShowCart(true);
        } else {
            setCartLength(0)
            setShowCart(false);
        }
    };

    const showCheckoutModal = () => {
        setShowCheckout(true);
    };

    const closeCheckoutModal = () => {
        setShowCheckout(false);
    };

    const showInformationModal = (ticketID: number, ticket: Ticket) => {
        setTicketID(ticketID);
        setTicket(ticket);
        setShowCheckout(false);
        setShowInformation(true);
    };

    const closeInformationModal = () => {
        setShowInformation(false);
        setShowCheckout(true);
    };

    const showConfirmationModal = (customer: Customer) => {
        setCustomer(customer);
        setShowCheckout(false);
        setShowConfirmation(true);
    };

    useEffect(() => {

        const cartString = localStorage.getItem('cart');
        if (cartString) {
            const cart = JSON.parse(cartString);
            setCartLength(cart.length);
            handleCartModal(cart.length);
        } else {
            setCartLength(0);
            handleCartModal(0);
            setShowCart(false);
        }

    }, [cartLength]);

    return (
        <div id='Modal'>
            <SeatSelection stadium={stadium} event={event} changeCartState={(cartLength: number) => handleCartModal(cartLength)} />
            {showCart && <Cart showCheckout={showCheckoutModal} cartLength={cartLength} />}
            {showCheckout && <Checkout event={event} updateCart={(cartLength: number) => handleCartModal(cartLength)} showInformation={(ticketID: number, ticket: Ticket) => showInformationModal(ticketID, ticket)} closeCheckout={closeCheckoutModal} />}
            {showInformation && <Information ticketID={ticketID} showConfirmation={(customer: Customer) => showConfirmationModal(customer)} closeInformation={closeInformationModal} />}
            {showConfirmation && <Confirmation event={event} stadium={stadium} ticket={ticket} customer={customer} />}
        <style>
            {`
                #Modal { position: relative; width: 80%; height: 40%; }
                @media (max-width: 600px) { #Modal { height: 45%; } }
            `}
        </style>
        </div>
    )
};

export default Modal;