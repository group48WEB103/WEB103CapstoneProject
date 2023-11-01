import React, { useState } from 'react';
import updateCustomer from '../../../services/PUT/updateCustomer';
import deleteCustomer from '../../../services/DELETE/deleteCustomer';
import { Customer } from '../../../services/types';

interface ProfileProps {
    user: Customer;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {

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
    
    const handleUpdateInfo = async (id: number, name: string, email: string, password: string, tickets: number[]) => {
        const updatedCustomer = { id, name, email, password, tickets };
        await updateCustomer(updatedCustomer, String(id));
        setShowEditModal(false);
    };
    
    const handleLogout = () => {
        localStorage.removeItem('auth');
        window.location.href = '/';
    };

    const handleProfileDelete = async () => {
        await deleteCustomer(String(user.id));
        localStorage.removeItem('auth');
        window.location.href = '/';
    };
    
    return (
        <div id='Profile'>
            <div id="ProfileContainer">
                {showEditModal ? (
                    <div id='ProfileEditModalContainer'>
                        <div id="ProfileEditModal">
                            <div id="ProfileEditModalHeaderContainer">
                                <p id="ProfileEditModalHeader">Edit Info</p>
                            </div>
                            <div id="ProfileEditModalInputContainer">
                                <input id="ProfileEditModalInput" type="text" placeholder="Name" value={name} onChange={updateName} />
                                <input id="ProfileEditModalInput" type="text" placeholder="Email" value={email} onChange={updateEmail} />
                                <input id="ProfileEditModalInput" type="text" placeholder="Password" value={password} onChange={updatePassword} />
                            </div>
                            <div id="ProfileEditModalButtonContainer">
                                <div id="ProfileEditUpdateModal" onClick={() => handleUpdateInfo(userID, name, email, password, user.tickets)}>Update</div>
                                <div id="ProfileEditCancelModal" onClick={closeEditModal}>Cancel</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id="ProfileInfoContainer">                
                        <div id="ProfileHeaderContainer">
                            <p id="HeaderProfile">User Profile</p>
                        </div>
                        <div id="ProfileUserEditButtonContainer">
                            <div id="ProfileUserEditButton" onClick={openEditModal}>Edit Info</div>
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
                    height: 80%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.7);
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
                #ProfileUserEditButtonContainer {
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
                #ProfileUserEditButton {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
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
                    background-color: rgba(0, 0, 0, 0.7);
                    border-radius: 25px;
                    color: white;
                    font-family: InterBold;
                    font-size: 20px;
                    cursor: pointer;
                }
                #ProfileDelete { background-color: red; }
                @media (max-width: 600px) {
                    #ProfileContainer { width: 90%; }
                    #ProfileUserEditButtonContainer { top: 7px; right: 7px; }
                }
            `}
        </style>
        </div>
    )
}

export default Profile;