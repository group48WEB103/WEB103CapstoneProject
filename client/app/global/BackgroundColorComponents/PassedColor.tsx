'use client'
import React, { useState } from 'react';
import ColorThief from '../../global/BackgroundColorComponents/ColorThief';
import EventInfo from '../../[id]/components/Event';
import StadiumInfo from '../../stadiums/[stadium]/components/Stadium';
import { Event, Stadium } from "../../../services/types";

interface PassedColorProps {
    image: string;
    stadium: Stadium;
    event: Event;
    render: string;
}

const PassedColor: React.FC<PassedColorProps> = ({ image, stadium, event, render }) => {

    const [BackgroundColor, setBackgroundColor] = useState('');
    const [AccentColor, setAccentColor] = useState('');
    const [gotColor, setGotColor] = useState(0);
    const [resetCount, setresetCount] = useState(0);

    const getNewBackgroundColor = (newBackgroundColor: string) => {
        setBackgroundColor(newBackgroundColor);
        setGotColor(gotColor + 1);
    };

    const getNewAccentColor = (newAccentColor: string) => {
        setAccentColor(newAccentColor);
        setGotColor(gotColor + 1);
    };

    const catchColorThiefError = () => {
        setBackgroundColor('rgba(255,255,255,0.4)');
        setAccentColor('rgba(255,255,255,0.95)');
        setGotColor(2);
    };

    const resetGotColor = () => {
        setGotColor(0);
        setresetCount(resetCount + 1);
        if (resetCount > 300) {
            catchColorThiefError();
        }
    };

    return (
        <div>
            {gotColor < 2 && <ColorThief getBackgroundColor={(value: any) => getNewBackgroundColor(value)} getAccentColor={(value: any) => getNewAccentColor(value)} image={image} />}
            {gotColor === 2 && 
                render === 'event' ? (
                    <EventInfo event={event} stadium={stadium} BackgroundColor={BackgroundColor} AccentColor={AccentColor} retryColorThief={resetGotColor} />
                ) : render === 'stadium' ? (
                    <StadiumInfo stadium={stadium} event={event} BackgroundColor={BackgroundColor} AccentColor={AccentColor} retryColorThief={resetGotColor} />
                ) : null
            }
        </div>
    )
}

export default PassedColor;