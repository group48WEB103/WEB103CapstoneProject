import React from 'react';
import { Event, Stadium, Ticket, Customer } from '../../../services/types';

interface ConfirmationProps {
    event: Event
    stadium: Stadium;
    ticket: Ticket;
    customer: Customer;
}

const Confirmation: React.FC<ConfirmationProps> = ({ event, stadium, ticket, customer }) => {

    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--AccentColor').trim();

    return (
        <div id="Confirmation">
            <div id="ConfirmationContainer">
                <div id="ConfirmationHeaderContainer">
                    <p id="ConfirmationHeader">Confirmation</p>
                </div>
                <div id="ConfirmationDetailsContainer">
                    <div id="TicketOverviewContainer">
                        <div id="TicketOverviewHeaderContainer">
                            <p id="TicketOverviewHeader">Ticket Overview</p>
                        </div>
                        <div id="TicketTitleContainer">
                            <p id="TicketTitle">{event.title} @ {stadium.title}</p>
                        </div>
                        <div id="TicketSeatsContainer">
                            <p id="TicketSeats">Selected Seats: {ticket.seat_numbers}</p>
                        </div>
                        <div id="TicketTotalPriceContainer">
                            <p id="TicketTotalPrice">Total Price: ${ticket.price}</p>
                        </div>
                    </div>
                    <div id="UserOverviewContainer">
                        <div id="UserOverviewHeaderContainer">
                            <p id="UserOverviewHeader">Thank you {customer.name}!</p>
                        </div>
                        <div id="UserNameContainer">
                            <p id="UserName">Your account's email is {customer.email}</p>
                        </div>
                        <div id='UserTicketNumberContainer'>
                            <p id="UserTicketNumber">Ticket Order Number: #{customer.tickets.length > 0 ? customer.tickets[customer.tickets.length - 1] : customer.tickets[0]}</p>
                        </div>
                    </div>
                </div>
                <div id="CloseConfirmationContainer">
                    <a id="CloseConfirmation" href='/profile'>View Profile</a>
                    <a id="CloseConfirmation" href='/'>Go Home</a>
                </div>
            </div>
            <style>
                {`
                    #Confirmation {
                        display: flex;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        justify-content: center;
                        align-items: center;
                        background-color: rgba(0, 0, 0, 0.7);
                        z-index: 10;
                    } 
                    #ConfirmationContainer {
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
                    #ConfirmationHeaderContainer {
                        display: flex;
                        width: 100%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                    }
                    #ConfirmationHeader {
                        font-size: 30px;
                        font-family: InterBold;
                    }
                    #ConfirmationDetailsContainer {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 70%;
                        flex-direction: column;
                        align-items: center;
                        overflow-y: scroll;
                    }
                    #ConfirmationDetailsContainer::-webkit-scrollbar {
                        width: 10px;
                        background-color: transparent;
                    }
                    #ConfirmationDetailsContainer::-webkit-scrollbar-thumb {
                        background-color: #c4c4c4;
                        border-radius: 10px;
                    }
                    #TicketOverviewContainer, #UserOverviewContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 50%;
                        flex-direction: column;
                        align-items: center;
                    }
                    #TicketOverviewHeaderContainer, #UserOverviewHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        justify-content: flex-start;
                        align-items: center;
                        font-size: 18px;
                        font-family: InterSemi;
                        border-bottom: 1px solid black;
                    }
                    #TicketTitleContainer, #TicketSeatsContainer, #TicketTotalPriceContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 29%;
                        justify-content: center;
                        align-items: center;
                        font-size: 16px;
                    }
                    #UserNameContainer, #UserTicketNumberContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 25%;
                        justify-content: center;
                        align-items: center;
                        font-size: 16px;
                    }
                    #CloseConfirmationContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                    }
                    #CloseConfirmation {
                        display: flex;
                        position: relative;
                        width: 180px;
                        height: 60px;
                        margin: 0 20px;
                        justify-content: center;
                        align-items: center;
                        text-decoration: none;
                        color: var(--TextColor);
                        font-size: 18px;
                        font-family: InterSemi;
                        background-color: ${accentColor === 'rgba(255,255,255,0.95)' ? 'rgb(169,169,169)' : 'var(--AccentColor)'};
                        border-radius: 25px;
                        box-shadow: -1px 1.5px 5px black;
                        cursor: pointer;
                    }
                    @media (max-width: 600px) {
                        #ConfirmationContainer { height: 75%; }
                        #BackIcon { top: 5px; }
                    }
                `}
            </style>
        </div>
    );
}

export default Confirmation;