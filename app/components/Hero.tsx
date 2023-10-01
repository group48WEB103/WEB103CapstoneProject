import React from 'react';

export default function Hero(locations: any) {

    return ( 
        <div id="Hero">
            <div id="HeroContainer">
                {locations.locations.map((loc: any) => (
                    <div id='' key={loc.id}>
                        <p>{loc.title}</p>
                    </div>
                ))}
            </div>
        <style>
            {`
                #Hero {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100vh;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                #HeroContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                p {
                    color: red;
                }
            `}
        </style>
        </div>
    )
}