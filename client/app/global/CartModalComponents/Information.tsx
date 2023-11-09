import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import getCustomerByEmail from '../../../services/GET/getCustomerByEmail';
import createCustomer from '../../../services/POST/createCustomer';
import updateCustomer from '../../../services/PUT/updateCustomer';
import { Customer } from '../../../services/types';

interface InformationProps {
    ticketID: number;
    showConfirmation: (customer: Customer) => void;
    closeInformation: () => void;
}

const Information: React.FC<InformationProps> = ({ ticketID, showConfirmation, closeInformation }) => {

    const [showWarning, setShowWarning] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [customer, setCustomer] = useState<Customer>({ name: name, email: email, password: password, tickets: [ticketID] });
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--AccentColor').trim();

    const fetchSavedInfo = () => {
        const token = localStorage.getItem('auth');
        const tokenArray = token ? JSON.parse(token) : [];
        if (tokenArray.email && tokenArray.password) {
            setEmail(tokenArray.email);
            setPassword(tokenArray.password);
        }
    };

    if (email.length === 0 && password.length === 0) {
        fetchSavedInfo();
    };

    const updateName = (e: any) => {
        setName(e.target.value);
    };

    const updateEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const validateInformation = async () => {
        const regex = /.+@.+\..+/;
        if (name.length > 0 && regex.test(email) === true && password.length > 0) {
            setCustomer({ name: name, email: email, password: password, tickets: [ticketID] });
            // add new ticket to their previous tickets array
            try {
                const customerByEmail = await getCustomerByEmail(email);
                if (customerByEmail) {
                    const tokenString = localStorage.getItem('auth');
                    const token = tokenString ? JSON.parse(tokenString) : [];
                    if (token) {
                        setCustomer(token);
                        showConfirmation(token);
                    } else {
                        setShowSignIn(true);
                        setTimeout(() => {
                            setShowSignIn(false);
                        }, 3000);
                    }
                } else {
                    createCustomer(customer);
                    showConfirmation(customer);
                }
            } catch (error) {
                console.error("Error while fetching or creating customer:", error);
                setShowWarning(true);
                setTimeout(() => {
                    setShowWarning(false);
                }, 3000);
            }
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
                <div id="InformationFormContainer">
                    <div id="NameInputContainer">
                        <input id="NameInput" type="text" placeholder="Name" value={name} onChange={updateName} />
                    </div>
                    <div id="EmailInputContainer">
                        <input id="EmailInput" type="text" placeholder="Email" value={email} onChange={updateEmail} />
                    </div>
                    <div id="PasswordInputContainer">
                        <input id="PasswordInput" type="password" placeholder="Password" value={password} onChange={updatePassword} />
                    </div>
                </div>
                <div id="InformationButtonContainer">
                    <div id="InformationButton" onClick={validateInformation}>Confirm Ticket</div>
                </div>
                <div id="InformationWarningContainer">
                    {showWarning && <p id="InformationWarning">Invalid Input</p>}
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
                    #InformationFormContainer {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 60%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        overflow-y: scroll;
                    }
                    #InformationFormContainer::-webkit-scrollbar {
                        width: 10px;
                        background-color: transparent;
                    }
                    #InformationFormContainer::-webkit-scrollbar-thumb {
                        background-color: #c4c4c4;
                        border-radius: 10px;
                    }
                    #NameInputContainer, #EmailInputContainer, #PasswordInputContainer {
                        display: flex;
                        position: relative;
                        width: 500px;
                        height: 50px;
                        margin: 10px;
                        justify-content: center;
                        align-items: center;
                    }
                    #NameInput, #EmailInput, #PasswordInput {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        padding-left: 10px;
                        font-size: 20px;
                        font-family: Inter;
                        border-radius: 10px;
                        border: 1px solid black;
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
                    @media (max-width: 700px) {
                        #BackIcon { top: 5px; }
                        #NameInputContainer, #EmailInputContainer, #PasswordInputContainer { width: 90%; }
                    }
                `}
            </style>
        </div>
    );
}

export default Information;