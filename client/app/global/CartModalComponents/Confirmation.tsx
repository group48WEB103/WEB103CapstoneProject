import React from 'react';
import { Stadium, Ticket, Customer } from '../../../services/types';

interface ConfirmationProps {
    stadium: Stadium;
    ticket: Ticket;
    customer: Customer;
}

const Confirmation: React.FC<ConfirmationProps> = ({ stadium, ticket, customer }) => {

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
                            <p id="TicketTitle">{ticket.id}</p>
                        </div>
                        <div id="TicketStadiumTitleContainer">
                            <p id="TicketStadiumTitle">@ {stadium.title}</p>
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
                            <p id="UserOverviewHeader">User Overview</p>
                        </div>
                        <div id="UserNameContainer">
                            <p id="UserName">{customer.name} - {customer.email}</p>
                        </div>
                        <div id='UserTicketNumberContainer'>
                            <p id="UserTicketNumber">Ticket Order Number: #{customer.tickets.length > 0 ? customer.tickets[customer.tickets.length - 1] : customer.tickets[0]}</p>
                        </div>
                    </div>
                    <div id="CloseConfirmationContainer">
                        <a id="CloseConfirmation" href='/profile'>View Profile</a>
                    </div>
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
                    #Back {
                        display: flex;
                        position: absolute;
                        top: 2%;
                        left: 1%;
                        width: 10%;
                        height: 10%;
                    }
                    #BackIcon {
                        display: flex;
                        position: relative;
                        font-size: 50px;
                        color: black;
                        cursor: pointer;
                        z-index: 12;
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
                    #ConfirmTicketContainer {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 60%;
                        flex-direction: column;
                        align-items: center;
                        overflow-y: scroll;
                    }
                    #ConfirmTicketContainer::-webkit-scrollbar {
                        width: 10px;
                        background-color: transparent;
                    }
                    #ConfirmTicketContainer::-webkit-scrollbar-thumb {
                        background-color: #c4c4c4;
                        border-radius: 10px;
                    }
                    #ConfirmationItem {
                        display: flex;
                        position: relative;
                        width: 80%;
                        height: 20%;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 1px solid black;
                    }
                    #ConfirmationItemRemoveContainer {
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
                    #ConfirmationItemName {
                        font-size: 18px;
                        font-family: InterSemi;
                        overflow-x: scroll;
                    }
                    #ConfirmationItemName::-webkit-scrollbar {
                        display: none;
                    }
                    #TotalPrice {
                        font-size: 25px;
                        font-family: InterBold;
                    }
                    #ConfirmationEmptyContainer {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 100%;
                        font-size: 20px;
                        font-family: InterSemi;
                        justify-content: center;
                        align-items: center;
                    }
                    #ConfirmationButtonContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                    }
                    #ConfirmationButton {
                        display: flex;
                        position: relative;
                        width: 300px;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                        background-color: ${accentColor === 'rgba(255,255,255,0.95)' ? 'rgb(169,169,169)' : 'var(--AccentColor)'};
                        border-radius: 25px;
                        box-shadow: -1px 1.5px 5px black;
                        cursor: pointer;
                    }
                    @media (max-width: 600px) {
                        #BackIcon { top: 5px; }
                    }
                `}
            </style>
        </div>
    );
}

export default Confirmation;