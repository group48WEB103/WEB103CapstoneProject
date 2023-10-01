import React from 'react';

export default function Hero(locations: any) {
    
    // console.log(locations);

    return ( 
        <div id="Hero">
            <div id="HeroContainer">
                {locations.locations.map((loc: any) => (
                    <div key={loc.id}>
                        <p>{loc.title}</p>
                    </div>
                ))}
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