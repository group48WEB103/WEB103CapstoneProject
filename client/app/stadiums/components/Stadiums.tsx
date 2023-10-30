'use client'
import React from "react";
import "../../home.css"
import { Stadium } from "../../../services/types";

interface StadiumsProps {
    stadiums: Stadium[]
}

const Stadiums: React.FC<StadiumsProps> = ({ stadiums }) => {

    const stadiumRedirect = (id: string) => {
        window.location.href = `/stadiums/${id}`;
    }

    return ( 
        <div id='Stadiums'>
            <div id="StadiumsContainer">
                <div id="StadiumsHeaderContainer">
                    <p id="StadiumsHeader">Stadiums</p>
                </div>
                <div id="StadiumsListContainer">
                    {stadiums.map((stadium: Stadium) => (
                        <div id='Stadium' key={stadium.id} onClick={() => stadiumRedirect(String(stadium.id))}>
                            <img id="StadiumImage" src={stadium.image} />
                            <div id="StadiumInfo">
                                <div id="StadiumLeftContainer">
                                    <div id="StadiumTitleContainer">
                                        <p id="StadiumTitle">{stadium.title}</p>
                                    </div>
                                    <div id="StadiumLocationContainer">
                                        <p id="StadiumLocation">{stadium.location}</p>
                                    </div>    
                                </div>
                                <div id="StadiumRightContainer">
                                    <div id="StadiumCapacityContainer">
                                        <p id="StadiumCapacity">Holds {stadium.capacity}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        <style>
            {`
                #Stadiums {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100%;
                    padding-top: 10vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;  
                }
                #StadiumsContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #StadiumsHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 15%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                }
                #StadiumsHeader {
                    font-size: 40px;
                    color: white;
                    font-family: InterBold;
                }
                #StadiumsListContainer {
                    display: grid;
                    position: relative;
                    width: 90%;
                    height: 85%;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    grid-gap: 25px;
                }
                #Stadium {
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
                #Stadium:hover {
                    transform: scale(1.05);
                }
                #StadiumImage {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    user-select: none;
                }
                #StadiumInfo {
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
                #StadiumLeftContainer {
                    display: flex;
                    position: relative;
                    width: 70%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
                #StadiumTitleContainer {
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
                #StadiumTitleContainer::-webkit-scrollbar { display: none; }
                #StadiumTitle {
                    font-size: 20px;
                    color: white;
                    font-family: InterBold;
                }
                #StadiumLocationContainer {
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
                #StadiumLocationContainer::-webkit-scrollbar { display: none; }
                #StadiumLocation {
                    font-size: 15px;
                    color: white;
                }
                #StadiumRightContainer {
                    display: flex;
                    position: relative;
                    width: 25%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
                #StadiumCapacityContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #StadiumCapacity {
                    font-size: 15px;
                    color: white;
                    font-family: InterSemi;
                    text-align: center;
                }
                @media (max-width: 600px) {
                    #StadiumsListContainer { justify-items: center; }
                }
            `}
        </style>
        </div>
    )
}

export default Stadiums;