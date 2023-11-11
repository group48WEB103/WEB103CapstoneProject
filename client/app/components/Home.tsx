'use client'
import React from "react";
import "../home.css"
import { Event, Stadium } from "../../services/types";

interface HomeProps {
    events: Event[],
    stadiums: Stadium[]
}

const Home: React.FC<HomeProps> = ({ events, stadiums }) => {

    const eventRedirect = (id: string) => {
        window.location.href = `/${id}`;
    };

    return ( 
        <div id='Home'>
            <div id="HomeContainer">
                <div id="HomeHeaderContainer">
                    <p id="HomeHeader">Recent Events</p>
                </div>
                <div id="EventListContainer">
                    {events.map((event: Event) => (
                        <div id='Event' key={event.id} onClick={() => eventRedirect(String(event.id))}>
                            <img id="EventImage" src={event.image} />
                            <div id="EventInfo">
                                <div id="EventLeftContainer">
                                    <div id="EventTitleContainer">
                                        <p id="EventTitle">{event.title}</p>
                                    </div>
                                    <div id="EventPreformerContainer">
                                        <p id="EventPreformer">{event.performer}</p>
                                    </div>    
                                </div>
                                <div id="EventMiddleContainer">
                                    <p id="EventAt">@</p>
                                </div>
                                <div id="EventRightContainer">
                                    <div id="EventStadiumContainer">
                                        <p id="EventStadium">
                                            {(() => {
                                                const foundStadium = stadiums.find(stadium => stadium.id === event.stadium_id);
                                                return foundStadium ? foundStadium.title : "Unknown Stadium";
                                            })()}
                                        </p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        <style>
            {`
                #Home {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100%;
                    padding-top: 10vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;  
                }
                #HomeContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #HomeHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 15%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                }
                #HomeHeader {
                    font-size: 40px;
                    color: white;
                    font-family: InterBold;
                }
                #EventListContainer {
                    display: grid;
                    position: relative;
                    width: 90%;
                    height: 85%;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    grid-gap: 25px;
                }
                #Event {
                    display: flex;
                    position: relative;
                    width: 250px;
                    height: 250px;
                    margin-bottom: 25px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 15px;
                    cursor: pointer;
                    overflow: hidden;
                    transition: 0.2s;
                }
                #Event:hover {
                    transform: scale(1.05);
                }
                #EventImage {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    user-select: none;
                }
                #EventInfo {
                    display: flex;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 27%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 1));
                }
                #EventLeftContainer {
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
                #EventTitleContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 40%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                #EventTitleContainer::-webkit-scrollbar { display: none; }
                #EventTitle {
                    font-size: 20px;
                    color: white;
                    font-family: InterBold;
                }
                #EventPreformerContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 40%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                #EventPreformerContainer::-webkit-scrollbar { display: none; }
                #EventPreformer {
                    font-size: 15px;
                    color: white;
                }
                #EventMiddleContainer {
                    display: flex;
                    position: relative;
                    width: 5%;
                    height: 100%;
                    margin-right: 3px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #EventRightContainer {
                    display: flex;
                    position: relative;
                    width: 30%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
                #EventStadiumContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #EventAt, #EventStadium {
                    font-size: 14px;
                    color: white;
                    font-family: InterSemi;
                    text-align: center;
                }
                @media (max-width: 600px) {
                    #EventListContainer { justify-items: center; }
                }
            `}
        </style>
        </div>
    )
}

export default Home;