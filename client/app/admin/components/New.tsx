import React, { useState } from 'react';
import createHotel from '../../../services/POST/createHotel';
import { Hotel } from '../../../services/types';

export default function New() {

    const [newHotel, setNewHotel] = useState<Hotel>({title: '', description: '', location: '', address: '', rating: undefined, price: undefined, img: ''});
    const [warning, setWarning] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState('');

    const newHotelSubmit = (title: string, description: string, location: string, address: string, rating: number, price: number, img: string) => {
        if (title !== '' && description !== '' && location !== '' && address !== '' && rating !== undefined && price !== undefined && img !== '') {
            const data = {title, description, location, address, rating, price, img}
            setNewHotel(data);
            createHotel(newHotel);
        } else {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 3000);
            return;
        }
    }

    const newTitle = (e: any) => {
        setTitle(e.target.value);
    }

    const newDescription = (e: any) => {
        setDescription(e.target.value);
    }

    const newLocation = (e: any) => {
        setLocation(e.target.value);
    }

    const newAddress = (e: any) => {
        setAddress(e.target.value);
    }

    const newRating = (e: any) => {
        setRating(e.target.value);
    }

    const newPrice = (e: any) => {
        setPrice(e.target.value);
    }

    const newImg = (e: any) => {
        setImg(e.target.value);
    }
    
    return ( 
        <div id='New'>
            <div id="NewContainer">
                <div id="NewHotelForm">
                    <div id="NewTitleContainer">
                        <input id="NewTitle" onChange={newTitle} placeholder="Title"></input>
                    </div>
                    <div id="NewDescriptionContainer">
                        <input id="NewDescription" onChange={newDescription} placeholder="Description"></input>
                    </div>
                    <div id="NewLocationContainer">
                        <input id="NewLocation" onChange={newLocation} placeholder="Location"></input>
                    </div>
                    <div id="NewAddressContainer">
                        <input id="NewAddress" onChange={newAddress} placeholder="Address"></input>
                    </div>
                    <div id="NewRatingContainer">
                        <input id="NewRating" onChange={newRating} placeholder="Rating"></input>
                    </div>
                    <div id="NewPriceContainer">
                        <input id="NewPrice" onChange={newPrice} placeholder="Price"></input>
                    </div>
                    <div id="NewImgContainer">
                        <input id="NewImg" onChange={newImg} placeholder="Img"></input>
                    </div>
                </div>
                <div id='NewHotelSubmitContainer'>
                    <div id="NewHotelSubmit" onClick={() => newHotelSubmit(title, description, location, address, rating, price, img)}>Submit New Hotel</div>
                </div>
                {warning &&
                    <div id='ShowWarningContainer'>
                        <div id='ShowWarning'>Invalid Entry</div>
                    </div>
                }
            </div>
        <style>
            {`
                #New {
            `}
        </style>
        </div>
    )
}