'use client'
import React, { useState, useEffect } from 'react';
import checkCredentials from '../../../services/GET/checkCredentials';
import Header from '../../global/Header';
import Login from './Login';
import Profile from './Profile';

export default function Auth() {

    const [loggedIn, setLoggedIn] = useState(false);

    const createToken = (username: string, password: string) => { 
        const token = localStorage.getItem('auth');
        if (token) {
            localStorage.removeItem('auth');
        }
        const tokenArray = [username, password];
        localStorage.setItem('auth', JSON.stringify(tokenArray));
    };

    const checkValidity = async (username: string, password: string) => {
        const res = await checkCredentials(username, password);
        if (res !== undefined) {
            const resArray = [res.username, res.password];
            const token = localStorage.getItem('auth');
            if (token) {
                const existingToken = [token[0], token[1]];
                if (resArray == existingToken) {
                    setLoggedIn(true);
                return true;
                } else {
                    createToken(username, password);
                }
            }
            createToken(username, password);
            setLoggedIn(true);
            return true;
        } else {
            return undefined;
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('auth');
        if (token) {
            const tokenArray = JSON.parse(token);
            const tokenUsername = tokenArray[0];
            const tokenPassword = tokenArray[1];
            const executeCheckValidity = async (username: string, password: string) => {
                const res = await checkValidity(username, password);
                if (res === true) {
                    setLoggedIn(true);
                } 
            }
            executeCheckValidity(tokenUsername, tokenPassword);
        }
    }, [loggedIn, setLoggedIn]);
        
    return (
      <div>
          {loggedIn ? <Header /> : <Login updateLoginState={(username, password) => checkValidity(username, password)} /> }
          {loggedIn ? <Profile /> : null}
      </div>
    )
}