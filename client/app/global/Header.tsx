'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {

    const [scrolled, setScrolled] = useState(false);
    const [showMobileView, setShowMobileView] = useState(false);
    const [showBars, setShowBars] = useState(true);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showMobileMenuItems, setShowMobileMenuItems] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
            closeMobileMenu();
        }
    };

    const handleMediaQuery = () => {
        if (window.innerWidth < 600) {
            setShowBars(true);
            setShowMobileView(true);
            setShowMobileMenu(false);
        } else {
            setShowBars(false);
            setShowMobileView(false);
            setShowMobileMenu(false);
        }
    };

    const openMobileMenu = () => {
        setShowMobileMenu(true);
        setShowBars(false);
        setScrolled(true);
        setTimeout(() => {
            setShowMobileMenuItems(true);
        }, 1);
    };

    const closeMobileMenu = () => {
        setShowMobileMenu(false);
        setShowBars(true);
        if (window.scrollY <= 10) {
            setScrolled(false);
        }
        setTimeout(() => {
            setShowMobileMenuItems(false);
        }, 1);
    };

    const checkLoggedIn = () => {
        const tokenString = localStorage.getItem('auth');
        const token = tokenString ? JSON.parse(tokenString) : [];
        if (tokenString) {
            setLoggedIn(true);
            setUsername(token.name);
        } else {
            setLoggedIn(false);
        }
    };

    useEffect(() => {

        if (window.innerWidth < 600) {
            setShowMobileView(true);
        } else {
            setShowMobileView(false);
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleMediaQuery);
        checkLoggedIn();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleMediaQuery);
        };

    }, []);

    return (
        <div id="Header">
            <div id="HeaderContainer" className={scrolled ? 'scrolled' : ''}>
                <div id="HeaderLogoContainer">
                    <Link id="HeaderLogoLink" href='/'>
                        <img id='HeaderLogo' src="/ticketellerLogo.webp" />
                    </Link>
                </div>
                {showMobileView ? (
                    <div id="MobileMenuContainer">
                        {showBars ? (
                            <div id="MobileMenuOpenContainer">
                                <FaBars id='MobileMenuOpen' onClick={openMobileMenu} />
                            </div>
                        ) : (    
                            <div id="MobileMenuCloseContainer">
                                <AiOutlineClose id='MobileMenuClose' onClick={closeMobileMenu} />
                            </div>
                        )}
                        {showMobileMenu ? (
                            <div id='MobileMenu'>
                                <div id="MobileMenuItems" className={showMobileMenuItems ? 'opened' : ''}>
                                    <div id="MobileStadiumItemContainer">
                                        <Link id="MobileStadiumItem" href="/stadiums">Stadiums</Link>
                                    </div>
                                    <div id="MobileAuthItemContainer">
                                        {loggedIn ? ( <Link id='MobileUsernameItem' href='/profile'>{username}</Link> ) : ( <Link id="MobileLoginItem" href="/profile">Login</Link> )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            null
                        )}
                    </div>
                ) : (
                    <div id="MenuContainer">
                        <div id="MenuItems">
                            <div id="StadiumItemContainer">
                                <Link id="StadiumItem" href="/stadiums">Stadiums</Link>
                            </div>
                            <div id="AuthItemContainer">
                                {loggedIn ? ( <Link id='UsernameItem' href='/profile'>{username}</Link> ) : ( <Link id="LoginItem" href="/profile">Login</Link> )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        <style>
            {`
                #Header {
                    display: flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 12vh;
                    background-color: rgba(0, 0, 0, 0);
                    align-items: center;
                    justify-content: center;
                    z-index: 3;
                }
                #HeaderContainer {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0);
                    transition: 0.5s;
                }
                #HeaderContainer.scrolled {
                    padding: 0 2.5%;
                    background-color: rgba(0, 0, 0, 0.85);
                }
                #HeaderLogoContainer {
                    display: flex;
                    position: relative;
                    width: 300px;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                }
                #HeaderLogoLink {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    align-items: center;
                    justify-content: flex-start;
                }
                #HeaderLogo {
                    width: 300px;
                    height: 100px;
                    object-fit: contain;
                    user-select: none;
                }
                #MenuContainer {
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 100%;
                    align-items: center;
                    justify-content: flex-end;
                }
                #MenuItems {
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 100%;
                    align-items: center;
                    justify-content: space-around;
                }
                #StadiumItem, #UsernameItem, #LoginItem { 
                    font-size: 20px;
                    color: white; 
                    text-decoration: none;
                    font-family: InterSemi; 
                    overflow-x: scroll;
                    overflow-y: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    transition: 0.5s;
                }
                #UsernameItem::-webkit-scrollbar, #LoginItem::-webkit-scrollbar { display: none; }
                #StadiumItem:hover, #UsernameItem:hover, #LoginItem:hover { opacity: 0.7; }
                #MobileMenuContainer {
                    display: flex;
                    position: relative;
                    width: 100px;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                }
                #MobileMenuOpenContainer, #MobileMenuCloseContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                }
                #MobileMenuOpen, #MobileMenuClose {
                    width: 60%;
                    height: 60%;
                    color: white;
                    cursor: pointer;
                }
                #MobileMenu {
                    display: flex;
                    position: fixed;
                    top: 12vh;
                    left: 0;
                    width: 100vw;
                    height: 10vh;
                    align-items: center;
                    justify-content: center;
                    background-color: rgba(0, 0, 0, 0);
                }
                #MobileMenuItems {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0);
                    transition: 0.5s;
                    border-radius: 0 0 10px 10px;
                }
                #MobileMenuItems.opened {
                    padding: 0 2.5%;
                    background-color: rgba(0, 0, 0, 0.85);
                }
                #MobileStadiumItem, #MobileUsernameItem, #MobileLoginItem { 
                    font-size: 20px;
                    color: white; 
                    text-decoration: none; 
                    font-family: InterSemi; 
                    transition: 0.5s;
                }
                #MobileStadiumItem:hover, #MobileUserItem:hover, #MobileLoginItem:hover { opacity: 0.7; }
                @media (max-width: 600px) {
                    #HeaderLogo { width: 200px; height: 75px; margin-left: 10px; }
                    #MenuContainer { display: none; }
                }
            `}
        </style>
        </div>
    )
}