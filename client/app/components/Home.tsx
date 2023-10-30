'use client'
import React, { useState } from "react";
import "../home.css"
import { MockEvents } from "./MockEvents";
import { MockStadium } from "./MockStadium";
import { Event } from "../../services/types";
// import getStadiumByID from "../../services/GET/getStadiumByID"

export default function Home( events: any ) {

    // const [stadiumsData, setStadiumsData] = useState([]);

    // const fetchStadiumsData = async () => {
    //     const res = await getAllStadiumsData();
    //     setStadiumsData(res);
    // }

    // if (stadiumsData && stadiumsData.length === 0) {
    //     fetchStadiumsData();
    // }

    const eventRedirect = (id: string) => {
        window.location.href = `/${id}`;
    }

    return ( 
        <div id='Home'>
            <div id="HomeContainer">
                <div id="HomeHeaderContainer">
                    <p id="HomeHeader">Recent Events</p>
                </div>
                <div id="EventListContainer">
                    {MockEvents.map((event: Event) => (
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
                                        <p id="EventStadium">{MockStadium[event.stadium_id].title}</p>
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
                }
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
                }
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
                    height: 50%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #EventAt, #EventStadium {
                    font-size: 12px;
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