import React, { useState } from 'react';
import updateCustomer from '../../../services/PUT/updateCustomer';
import deleteCustomer from '../../../services/DELETE/deleteCustomer';
import { Customer } from '../../../services/types';

interface ProfileProps {
    user: Customer;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {

    const [showWarning, setShowWarning] = useState(false);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [showEditModal, setShowEditModal] = useState(false);
    const userTickets = String(user.tickets);
    const userID = user.id ? user.id : 0;

    const updateName = (e: any) => {
        setName(e.target.value);
    };

    const updateEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const openEditModal = () => {
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
    };

    const validateUpdatedInfo = (id: number, name: string, email: string, password: string, tickets: number[]) => {
        const regex = /.+@.+\..+/;
        if (name.length > 0 && regex.test(email) === true && password.length > 0) {
            const updatedCustomer = { id, name, email, password, tickets };
            localStorage.setItem('auth', JSON.stringify(updatedCustomer));
            updateCustomer(updatedCustomer, String(id), password);
            setTimeout(() => {
                window.location.reload();
            }, 10);
        } else {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        }
    };
    
    const handleLogout = () => {
        localStorage.removeItem('auth');
        window.location.href = '/';
    };

    const handleProfileDelete = () => {
        const tokenString = localStorage.getItem('auth');
        const token = tokenString ? JSON.parse(tokenString) : [];
        if (token) {
            deleteCustomer(String(user.id), token.password);
            localStorage.removeItem('auth');
            setTimeout(() => {
                window.location.href = '/';
            }, 1);
        }
    };
    
    return (
        <div id='Profile'>
            <div id="ProfileContainer">
                {showEditModal ? (
                    <div id='ProfileEditInfoContainer'>
                        <div id="ProfileEditInfoCancelContainer">
                            <div id="ProfileEditInfoCancel" onClick={closeEditModal}>Cancel</div>
                        </div>
                        <div id="ProfileEditInfoHeaderContainer">
                            <p id="ProfileEditInfoHeader">Edit User</p>
                        </div>
                        <div id="ProfileEditInfoInputContainer">
                            <input id="ProfileEditInfoInput" type="text" placeholder="Update Name" value={name} onChange={updateName} />
                            <input id="ProfileEditInfoInput" type="text" placeholder="Update Email" value={email} onChange={updateEmail} />
                            <input id="ProfileEditInfoInput" type="text" placeholder="Update Password" value={password} onChange={updatePassword} />
                        </div>
                        <div id="ProfileEditInfoErrorContainer">
                            {showWarning && <p id="ProfileEditInfoError">Invalid Input</p>}
                        </div>
                        <div id="ProfileEditInfoUpdateContainer">
                            <div id="ProfileEditInfoUpdate" onClick={() => validateUpdatedInfo(userID, name, email, password, user.tickets)}>Update Info</div>
                        </div>
                    </div>
                ) : (
                    <div id="ProfileInfoContainer"> 
                        <div id="ProfileUserEditButtonContainer">
                            <div id="ProfileUserEditButton" onClick={openEditModal}>Edit Info</div>
                        </div>               
                        <div id="ProfileHeaderContainer">
                            <p id="HeaderProfile">User Profile</p>
                        </div>
                        <div id="ProfileInfoDetailsContainer">
                            <div id="ProfileUserNameContainer">
                                <p id="ProfileUserName">{user.name}</p>
                            </div>
                            <div id="ProfileUserEmailContainer">
                                <p id="ProfileUserEmail">{user.email}</p>
                            </div>
                            <div id="ProfileUserTicketsContainer">
                                <p id="ProfileUserTickets">Purchased Ticket Order Numbers: {userTickets}</p>
                            </div>
                        </div>
                        <div id="ProfileLogoutContainer">
                            <div id="ProfileLogout" onClick={handleLogout}>Logout</div>
                        </div>
                        <div id="ProfileDeleteContainer">
                            <div id="ProfileDelete" onClick={handleProfileDelete}>Delete Account</div>
                        </div>
                    </div>
                )}
            </div>
        <style>
            {`
                #Profile {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 90vh;
                    padding-top: 10vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #ProfileContainer {
                    display: flex;
                    position: relative;
                    width: 70%;
                    height: 90%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.8);
                    border-radius: 25px;
                }
                #ProfileInfoContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #ProfileUserEditButtonContainer {
                    display: flex;
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    width: 100px;
                    height: 50px;
                    justify-content: center;
                    align-items: center;
                }
                #ProfileUserEditButton {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    cursor: pointer;
                    z-index: 2;
                    user-select: none;
                }
                #ProfileHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 20%;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-family: InterBold;
                    font-size: 30px;
                }
                #ProfileInfoDetailsContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 45%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #ProfileUserNameContainer, #ProfileUserEmailContainer, #ProfileUserTickets {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 25%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-size: 20px;
                }
                #ProfileUserTickets { font-size: 15px; }
                #ProfileLogoutContainer, #ProfileDeleteContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 15%;
                    justify-content: center;
                    align-items: center;
                }
                #ProfileLogout, #ProfileDelete {
                    display: flex;
                    position: relative;
                    width: 250px;
                    height: 70px;
                    justify-content: center;
                    align-items: center;
                    background-color: #286387;
                    border-radius: 25px;
                    color: white;
                    font-family: InterBold;
                    font-size: 20px;
                    cursor: pointer;
                }
                #ProfileDelete { background-color: red; }
                #ProfileEditInfoContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #ProfileEditInfoCancelContainer {
                    display: flex;
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    width: 100px;
                    height: 50px;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    cursor: pointer;
                }
                #ProfileEditInfoCancel {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    cursor: pointer;
                    z-index: 2;
                    user-select: none;
                }
                #ProfileEditInfoHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 20%;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-family: InterBold;
                    font-size: 30px;
                }
                #ProfileEditInfoInputContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 45%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #ProfileEditInfoInput {
                    display: flex;
                    position: relative;
                    width: 500px;
                    height: 50px;
                    margin: 10px;
                    justify-content: center;
                    align-items: center;
                    padding-left: 10px;
                    font-size: 20px;
                    font-family: Inter;
                    border-radius: 10px;
                    border: 1px solid black;
                }
                #ProfileEditInfoUpdateContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 15%;
                    justify-content: center;
                    align-items: center;
                }
                #ProfileEditInfoUpdate {
                    display: flex;
                    position: relative;
                    width: 250px;
                    height: 70px;
                    justify-content: center;
                    align-items: center;
                    background-color: #286387;
                    border-radius: 25px;
                    color: white;
                    font-family: InterBold;
                    font-size: 20px;
                    cursor: pointer;
                }
                #ProfileEditInfoErrorContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 15%;
                    justify-content: center;
                    align-items: center;
                }   
                #ProfileEditInfoError {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    color: red;
                    font-family: InterBold;
                    font-size: 20px;
                }
                @media (max-width: 600px) {
                    #ProfileContainer { width: 90%; }
                    #ProfileUserEditButtonContainer, #ProfileEditInfoCancelContainer { top: 7px; right: 7px; }
                    #ProfileEditInfoInput { width: 90%; }
                }
            `}
        </style>
        </div>
    )
}

export default Profile;