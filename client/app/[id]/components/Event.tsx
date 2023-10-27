import React, { useState } from "react";
import "../../globals.css"
import { IoIosArrowBack } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { Event } from "../../../services/types";

interface EventInfoProps {
    event: Event;
    location: string;
    BackgroundColor: string;
    AccentColor: string;
    retryColorThief: () => void;
}

const EventInfo: React.FC<EventInfoProps> = ({ event, location, BackgroundColor, AccentColor, retryColorThief }) => {
    
    const [showLoading, setShowLoading] = useState(0);
    
    if (BackgroundColor === 'rgba(NaN,NaN,NaN,0.5)' && AccentColor === 'rgba(NaN,NaN,NaN,0.95)') {
        retryColorThief();
    } else {
        setTimeout(() => {
            setShowLoading(showLoading + 1);
        }, 1);
    }

    const homeRedirect = () => {
        window.location.href = '/';
    }
    
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
                            <div id="EventInfoTitleContainer">
                                <p id='EventInfoSubTitle'>{event.performer}</p>
                            </div>
                            <div id="EventInfoTitleContainer">
                                <p id='EventInfoVenue'><CiLocationOn id='LocationIcon'/>{location}</p>
                            </div>
                            <div id="EventInfoTitleContainer">
                                <p id='EventInfoDescription'>{event.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        <style>
            {`

                :root {
                    --BackgroundColor: ${BackgroundColor};
                    --AccentColor: ${AccentColor};
                }

                #Event {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 90vh;
                    padding-top: 10vh;
                    justify-content: center;
                    align-items: center;
                    background-color: ${showLoading <= 1 ? 'black' : 'var(--BackgroundColor)'};
                    background-image: ${showLoading <= 1 ? 'black' : 'linear-gradient(var(--BackgroundColor), rgba(0, 0, 0, 0.95))'};
                }
                #Loading { width: 200px; height: 150px; margin-top: -10vh; }
                #EventInfoImage {
                    width: 100px;
                    height: 100px;
                }
            `}
        </style>
        </div>
    )
}

export default EventInfo;