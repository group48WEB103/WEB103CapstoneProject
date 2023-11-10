import React, { useState } from "react";
import "../../globals.css";
import Modal from "../TicketPurchaseComponents/Modal";
import { IoIosArrowBack } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { Event, Stadium } from "../../../services/types";

interface EventInfoProps {
    event: Event;
    stadium: Stadium;
    BackgroundColor: string;
    AccentColor: string;
    retryColorThief: () => void;
}

const EventInfo: React.FC<EventInfoProps> = ({ event, stadium, BackgroundColor, AccentColor, retryColorThief }) => {
    
    const [showLoading, setShowLoading] = useState(0);
    const [textColor, setTextColor] = useState('black');
    
    if (BackgroundColor === 'rgba(NaN,NaN,NaN,0.6)' && AccentColor === 'rgba(NaN,NaN,NaN,0.95)') {
        retryColorThief();
    } else {
        setTimeout(() => {
            setShowLoading(showLoading + 1);
        }, 1);
    };

    const rgbaColor = BackgroundColor.replace("rgba(", "").replace(")", "").split(",");
    const red = parseInt(rgbaColor[0], 10);
    const green = parseInt(rgbaColor[1], 10);
    const blue = parseInt(rgbaColor[2], 10);
    const lightness = (Math.max(red, green, blue) + Math.min(red, green, blue)) / 510;

    if (lightness > 0.5) { 
        setTimeout(() => {
            setTextColor('black');
        }, 1);
    } else {
        setTimeout(() => {
            setTextColor('white');
        }, 1);
    };

    const homeRedirect = () => {
        window.location.href = '/';
    };
    
    return (
        <div id='Event'>
            {showLoading <= 1 ? ( 
                <img id='Loading' src='/loading.gif' />
            ) : (
                <div id="EventContainer">
                    <div id='BackButtonContainer'>
                        <IoIosArrowBack id='BackButton' onClick={homeRedirect}/>
                    </div>
                    <div id="EventInfoContainer">
                        <div id='EventInfoImageContainer'>
                            <img id='EventInfoImage' src={event.image} />
                        </div>
                        <div id='EventInfoTextContainer'>
                            <div id="EventInfoTitleContainer">
                                <p id='EventInfoTitle'>{event.title}</p>
                            </div>
                            <div id="EventInfoPerformerContainer">
                                <p id='EventInfoPerformer'>{event.performer}</p>
                            </div>
                            <div id="EventInfoLocationContainer">
                                <p id='EventInfoLocation'><CiLocationOn id='LocationIcon'/>{stadium.title ? <a href={`/stadiums/${stadium.id}`}>{stadium.title}</a> : "Unknown Stadium"}</p>
                            </div>
                        </div>
                    </div>
                    <div id="EventInfoDescriptionContainer">
                        <p id='EventInfoDescription'>{event.description}</p>
                    </div>
                    <Modal stadium={stadium} event={event} />
                </div>
            )}
        <style>
            {`

                :root {
                    --BackgroundColor: ${BackgroundColor};
                    --AccentColor: ${AccentColor};
                    --TextColor: ${textColor};
                }

                #Event {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 90vh;
                    padding-top: 10vh;
                    justify-content: center;
                    align-items: center;
                    background-color: ${showLoading <= 1 ? '#080707' : 'var(--BackgroundColor)'};
                    background-image: ${showLoading <= 1 ? '#080707' : 'linear-gradient(var(--BackgroundColor), rgba(0, 0, 0, 0.9))'};
                }
                #Loading { width: 200px; height: 150px; margin-top: -10vh; }
                #EventContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #BackButtonContainer {
                    display: flex;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100px;
                    height: 100px;
                    justify-content: center;
                    align-items: center;
                }
                #BackButton { font-size: 50px; cursor: pointer; color: var(--TextColor); }
                #EventInfoContainer {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 40%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                #EventInfoImageContainer {
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 90%;
                    justify-content: center;
                    align-items: center;
                }
                #EventInfoImage {
                    width: 50%;
                    height: 100%;
                    object-fit: contain;
                    user-select: none;
                }
                #EventInfoTextContainer {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: var(--TextColor);
                }
                #EventInfoTitleContainer, #EventInfoPerformerContainer, #EventInfoLocationContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 30%;
                    justify-content: flex-start;
                    align-items: center;
                    overflow-y: hidden;
                    overflow-x: scroll;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: var(--TextColor);
                }
                #EventInfoTitleContainer::-webkit-scrollbar, #EventInfoPerformerContainer::-webkit-scrollbar, #EventInfoLocationContainer::-webkit-scrollbar { height: 0; }
                #EventInfoTitleContainer::-webkit-scrollbar-thumb, #EventInfoPerformerContainer::-webkit-scrollbar-thumb, #EventInfoLocationContainer::-webkit-scrollbar-thumb { height: 0; }
                #EventInfoTitle { font-size: 30px; font-family: InterBold; }
                #EventInfoPerformer { font-size: 25px; font-family: InterSemi; }
                #EventInfoLocation { font-size: 20px; }
                #EventInfoLocation a { color: var(--TextColor); }
                #LocationIcon { font-size: 20px; margin-right: 3px; margin-bottom: -2px; }
                #EventInfoDescriptionContainer {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 20%;
                    overflow-y: scroll;
                }
                #EventInfoDescriptionContainer::-webkit-scrollbar {
                    width: 10px;
                    background-color: transparent;
                }
                #EventInfoDescriptionContainer::-webkit-scrollbar-thumb {
                    width: 10px;
                    background-color: rgb(195, 195, 195);
                    border-radius: 25px;
                }
                #EventInfoDescription { padding: 5px 0 0 5px; color: var(--TextColor); }
                @media (max-width: 600px) {
                    #BackButtonContainer { width: 70px; height: 70px; }
                    #EventInfoContainer { width: 70%; height: 40%; flex-direction: column; }
                    #EventInfoImageContainer { width: 100%; height: 60%; }
                    #EventInfoImage { width: 70%; height: 90%; }
                    #EventInfoTextContainer { width: 100%; height: 40%; }
                    #EventInfoTitle { font-size: 25px; }
                    #EventInfoPerformer { font-size: 20px; }
                    #EventInfoLocation { font-size: 15px; }
                    #LocationIcon { font-size: 15px; }
                    #EventInfoDescriptionContainer { width: 70%; height: 15%; }
                }
            `}
        </style>
        </div>
    )
}

export default EventInfo;