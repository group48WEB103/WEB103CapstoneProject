'use client'
import React, { useState } from 'react';
import ColorThief from './ColorThief';
import Event from './Event';

export default function PassedColor( image: any, event: any ) {

    const [BackgroundColor, setBackgroundColor] = useState('');
    const [AccentColor, setAccentColor] = useState('');
    const [gotColor, setGotColor] = useState(0);

    const getNewBackgroundColor = (newBackgroundColor: string) => {
        setBackgroundColor(newBackgroundColor);
        setGotColor(gotColor + 1);
    };

    const getNewAccentColor = (newAccentColor: string) => {
        setAccentColor(newAccentColor);
        setGotColor(gotColor + 1);
    };

    return (
        <div>
            {gotColor < 2 ? <ColorThief getBackgroundColor={(value: any) => getNewBackgroundColor(value)} getAccentColor={(value: any) => getNewAccentColor(value)} image={image} /> : null}
            {gotColor === 2 ? <Event event={event} BackgroundColor={BackgroundColor} AccentColor={AccentColor} /> : null}
        </div>
    )
}