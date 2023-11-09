'use client'
import React, { useState, useEffect } from 'react';
import checkCredentials from '../../../services/GET/checkCredentials';
import Header from '../../global/Header';
import Login from './Login';
import Profile from './Profile';
import { Customer } from '../../../services/types';

export default function Auth() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState<Customer>({id: 0, name: '', email: '', password: '', tickets: []});

    const createToken = (user: Customer) => { 
        const token = localStorage.getItem('auth');
        if (token) {
            localStorage.removeItem('auth');
        }
        localStorage.setItem('auth', JSON.stringify(user));
    };

    const checkValidity = async (email: string, password: string) => {
        const res = await checkCredentials(email, password);
        if (res) {
            const token = localStorage.getItem('auth');
            if (token) {
                const existingToken = JSON.parse(token);
                if (res == existingToken) {
                    setLoggedIn(true);
                    return true;
                } else {
                    createToken(res);
                }
            }
            createToken(res);
            setLoggedIn(true);
            return true;
        } else {
            return undefined;
        }
    };

    useEffect(() => {
        const tokenString = localStorage.getItem('auth');
        if (tokenString) {
            const token = JSON.parse(tokenString);
            setUserInfo(token);
            const executeCheckValidity = async (email: string, password: string) => {
                const res = await checkValidity(email, password);
                if (res === true) {
                    setLoggedIn(true);
                } 
            }
            executeCheckValidity(token.email, token.password);
        }
    }, [loggedIn, setLoggedIn, setUserInfo]);
        
    return (
      <div>
          <Header /> 
          {loggedIn ? <Profile user={userInfo} /> : <Login updateLoginState={(email: string, password: string) => checkValidity(email, password)} /> }
      </div>
    )
}