import React from 'react';

export default function Hero(location: any) {
    
    console.log(location);

    return ( 
        <div id="Hero">
            <div id="HeroContainer">
                <p>{location.location.title}</p>
            </div>
        <style>
            {`
                #Hero {}
                #HeroContainer {}
                p {
                    color: red;
                }
            `}
        </style>
        </div>
    )
}