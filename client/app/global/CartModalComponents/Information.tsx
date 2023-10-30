import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
// import getAllCustomers from '../../../services/GET/getAllCustomers';
// import createCustomer from '../../../services/POST/createCustomer';
import { Customer } from '../../../services/types';

interface InformationProps {
    ticketID: number;
    showConfirmation: (customer: Customer) => void;
    closeInformation: () => void;
}

const Information: React.FC<InformationProps> = ({ ticketID, showConfirmation, closeInformation }) => {

    const [showWarning, setShowWarning] = useState(false);
    const [name, setName] = useState('');
    const [customer, setCustomer] = useState<Customer>({ name: name, ticket_id: undefined, bundle_id: undefined });
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--AccentColor').trim();

    const updateName = (e: any) => {
        setName(e.target.value);
    };

    const validateInformation = () => {
        if (name.length > 0) {
            setCustomer({ name: name, ticket_id: ticketID, bundle_id: undefined });
            // const allCustomers = await getAllCustomers();
            // const foundCustomer = allCustomers.find((item: any) => item.seat_numbers === customer.seat_numbers && item.event_id === customer.event_id);
            // if (foundCustomer) {
            //     setcustomer(foundCustomer);
            // } else {
            //     createNewCustomer(customer);
            //     const getNewCustomers = await getAllCustomers();
            //     const foundNewCustomer = getNewCustomers.find((item: any) => item.seat_numbers === customer.seat_numbers && item.event_id === customer.event_id);
            //     showConfirmation(customer);
            // }
        } else {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        }
    };

    return (
        <div id="Information">
            <div id="InformationContainer">
                <div id="Back" onClick={closeInformation}>
                    <IoIosArrowBack id="BackIcon" onClick={closeInformation} />
                </div>
                <div id="InformationHeaderContainer">
                    <p id="InformationHeader">Information</p>
                </div>
                <div id="ConfirmTicketContainer">
                </div>
            </div>
            <style>
                {`
                    #Information {
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
                    #InformationContainer {
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
                    #InformationHeaderContainer {
                        display: flex;
                        width: 100%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                    }
                    #InformationHeader {
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
                    #InformationItem {
                        display: flex;
                        position: relative;
                        width: 80%;
                        height: 20%;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 1px solid black;
                    }
                    #InformationItemRemoveContainer {
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
                    #InformationItemName {
                        font-size: 18px;
                        font-family: InterSemi;
                        overflow-x: scroll;
                    }
                    #InformationItemName::-webkit-scrollbar {
                        display: none;
                    }
                    #TotalPrice {
                        font-size: 25px;
                        font-family: InterBold;
                    }
                    #InformationEmptyContainer {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 100%;
                        font-size: 20px;
                        font-family: InterSemi;
                        justify-content: center;
                        align-items: center;
                    }
                    #InformationButtonContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                    }
                    #InformationButton {
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

export default Information;