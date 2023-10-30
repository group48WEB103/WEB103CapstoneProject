'use client'
import React, { useState, useEffect, use } from "react";
import "../../../globals.css";
import { IoIosArrowBack } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { Stadium, Event } from "../../../../services/types";

interface StadiumInfoProps {
    stadium: Stadium;
    event: Event;
    BackgroundColor: string;
    AccentColor: string;
    retryColorThief: () => void;
}

const StadiumInfo: React.FC<StadiumInfoProps> = ({ stadium, BackgroundColor, AccentColor, retryColorThief }) => {
    
    const [showLoading, setShowLoading] = useState(0);
    const [galleryImage, setGalleryImage] = useState(0);
    
    if (BackgroundColor === 'rgba(NaN,NaN,NaN,0.6)' && AccentColor === 'rgba(NaN,NaN,NaN,0.95)') {
        retryColorThief();
    } else {
        setTimeout(() => {
            setShowLoading(showLoading + 1);
        }, 1);
    };

    const homeRedirect = () => {
        window.location.href = '/';
    };
    
    const iterateGallery = () => {
        if (galleryImage + 1 > stadium.gallery.length) {
            setGalleryImage(0);
        } else {
            setGalleryImage(galleryImage + 1);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(iterateGallery, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [galleryImage]);

    return (
        <div id='Stadium'>
            {showLoading <= 1 ? ( 
                <img id='Loading' src='/loading.gif' />
            ) : (
                <div id="StadiumContainer">
                    <div id='BackButtonContainer'>
                        <IoIosArrowBack id='BackButton' onClick={homeRedirect}/>
                    </div>
                    <div id="StadiumInfoContainer">
                        <div id='StadiumInfoImageContainer'>
                            <img id='StadiumInfoImage' src={stadium.image} />
                        </div>
                        <div id='StadiumInfoTextContainer'>
                            <div id="StadiumInfoTitleContainer">
                                <p id='StadiumInfoTitle'>{stadium.title}</p>
                            </div>
                            <div id="StadiumInfoCapacityContainer">
                                <p id='StadiumInfoCapacity'>{stadium.capacity}</p>
                            </div>
                            <div id="StadiumInfoLocationContainer">
                                <p id='StadiumInfoLocation'><CiLocationOn id='LocationIcon'/>{stadium.title}</p>
                            </div>
                        </div>
                    </div>
                    <div id="StadiumInfoDescriptionContainer">
                        <p id='StadiumInfoDescription'>{stadium.description}</p>
                    </div>
                    <div id="StadiumInfoGalleryContainer">
                        {stadium.gallery.map((image: string, index: number) => (
                            <div id="StadiumGalleryImageItem" key={index}>
                                {galleryImage === index ? ( <img id='StadiumGalleryImage' src={image} /> ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        <style>
            {`

                :root {
                    --BackgroundColor: ${BackgroundColor};
                    --AccentColor: ${AccentColor};
                }

                #Stadium {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 90vh;
                    padding-top: 10vh;
                    justify-content: center;
                    align-items: center;
                    background-color: ${showLoading <= 1 ? 'black' : 'var(--BackgroundColor)'};
                    background-image: ${showLoading <= 1 ? 'black' : 'linear-gradient(var(--BackgroundColor), rgba(0, 0, 0, 0.9))'};
                }
                #Loading { width: 200px; height: 150px; margin-top: -10vh; }
                #StadiumContainer {
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
                #BackButton { font-size: 50px; cursor: pointer; }
                #StadiumInfoContainer {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 40%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                #StadiumInfoImageContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 90%;
                    justify-content: center;
                    align-items: center;
                }
                #StadiumInfoImage {
                    width: 50%;
                    height: 100%;
                    object-fit: contain;
                }
                #StadiumInfoTextContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #StadiumInfoTitleContainer, #StadiumInfoCapacityContainer, #StadiumInfoLocationContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 30%;
                    justify-content: flex-start;
                    align-items: center;
                    overflow-y: hidden;
                    overflow-x: scroll;
                }
                #StadiumInfoTitleContainer::-webkit-scrollbar, #StadiumInfoCapacityContainer::-webkit-scrollbar, #StadiumInfoLocationContainer::-webkit-scrollbar { height: 0; }
                #StadiumInfoTitleContainer::-webkit-scrollbar-thumb, #StadiumInfoCapacityContainer::-webkit-scrollbar-thumb, #StadiumInfoLocationContainer::-webkit-scrollbar-thumb { height: 0; }
                #StadiumInfoTitle { font-size: 30px; font-family: InterBold; }
                #StadiumInfoCapacity { font-size: 25px; font-family: InterSemi; }
                #StadiumInfoLocation { font-size: 20px; }
                #LocationIcon { font-size: 20px; margin-right: 3px; margin-bottom: -2px; }
                #StadiumInfoDescriptionContainer {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 20%;
                    overflow-y: scroll;
                }
                #StadiumInfoDescriptionContainer::-webkit-scrollbar {
                    width: 10px;
                    background-color: transparent;
                }
                #StadiumInfoDescriptionContainer::-webkit-scrollbar-thumb {
                    width: 10px;
                    background-color: rgb(195, 195, 195);
                    border-radius: 25px;
                }
                #StadiumInfoGalleryContainer {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 40%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                #StadiumGalleryImageItem {
                    display: flex;
                    position: relative;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    object-fit: contain;
                }
                #StadiumGalleryImage { width: 100%; height: 100%; }
                #StadiumInfoDescription { padding: 5px 0 0 5px; }
                @media (max-width: 600px) {
                    #BackButtonContainer { width: 70px; height: 70px; }
                    #StadiumInfoContainer { width: 70%; height: 40%; flex-direction: column; }
                    #StadiumInfoImageContainer { width: 100%; height: 60%; }
                    #StadiumInfoImage { width: 70%; height: 90%; }
                    #StadiumInfoTextContainer { width: 100%; height: 40%; }
                    #StadiumInfoTitleContainer, #StadiumInfoCapacityContainer, #StadiumInfoLocationContainer { justify-content: center; }
                    #StadiumInfoTitle { font-size: 25px; }
                    #StadiumInfoCapacity { font-size: 20px; }
                    #StadiumInfoLocation { font-size: 15px; }
                    #LocationIcon { font-size: 15px; }
                    #StadiumInfoDescriptionContainer { width: 70%; height: 15%; }
                }
            `}
        </style>
        </div>
    )
}

export default StadiumInfo;