import React, { useState } from "react";
import { Stadium } from "../../../services/types";

interface SeatSelectionProps {
    stadium: Stadium;
};

const SeatSelection: React.FC<SeatSelectionProps> = ({ stadium }) => {

    const [chosenSeat, setChosenSeat] = useState(-1);
    const leftSeatsArray = Array.from({ length: Math.floor(stadium.capacity / 3) }).map((_, index) => index);
    const middleSeatsArray = Array.from({ length: Math.floor(stadium.capacity / 3) }).map((_, index) => index + leftSeatsArray.length);
    const rightSeatsArray = Array.from({ length: stadium.capacity - leftSeatsArray.length - middleSeatsArray.length }).map((_, index) => index + leftSeatsArray.length + middleSeatsArray.length);
    
    const chooseSeat = (seat: number) => {
        if (seat <= stadium.capacity && seat >= 0) {
            setChosenSeat(seat);
        }     
    };

    const sendSeatChoice = (seat: number) => {
        // send seat choice to next step
    }

    return (
        <div id='SeatSelection'>
            <div id="SeatSelectionContainer">
                <div id="SeatGridContainer">
                    <div id="StageContainer">{stadium.title} Stage</div>
                    <div id="SeatLeftContainer">
                        {leftSeatsArray.map((index: number) => (
                            <div id='Seat' key={index} onClick={() => chooseSeat(index)}>
                                <img id="SeatIcon" src="/seatIconLeft.png" className={chosenSeat === index ? 'selected' : ''} />
                            </div>
                        ))}
                    </div>
                    <div id="SeatMiddleContainer">
                        {middleSeatsArray.map((index: number) => (
                            <div id='Seat' key={index} onClick={() => chooseSeat(index)}>
                                <img id="SeatIcon" src="/seatIconMiddle.png" className={chosenSeat === index ? 'selected' : ''} />
                            </div>
                        ))}
                    </div>
                    <div id="SeatRightContainer">
                        {rightSeatsArray.map((index: number) => (
                            <div id='Seat' key={index} onClick={() => chooseSeat(index)}>
                                <img id="SeatIcon" src="/seatIconRight.png" className={chosenSeat === index ? 'selected' : ''} />
                            </div>
                        ))}
                    </div>
                </div>
                <div id="ChooseSeatButtonContainer">
                    {chosenSeat !== -1 ? ( <div id="ChooseSeatButton" onClick={() => sendSeatChoice(chosenSeat)}>Choose Seat</div> ) : null}
                </div>
            </div>
        <style>
            {`
                #SeatSelection {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 40%;
                    justify-content: center;
                    align-items: flex-start;
                }
                #SeatSelectionContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 95%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #SeatGridContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 85%;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
                #SeatLeftContainer, #SeatMiddleContainer, #SeatRightContainer {
                    display: flex;
                    position: relative;
                    width: 25%;
                    height: 100%;
                    flex-wrap: wrap;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
                #SeatMiddleContainer {
                    position: absolute;
                    top: 0;
                    left: 25%;
                    width: 50%;
                    height: 30%;
                }
                #StageContainer {
                    display: flex;
                    position: absolute;
                    left: 25%;
                    bottom: 0;
                    width: 50%;
                    height: 60%;
                    justify-content: center;
                    align-items: center;
                    background-color: black;
                    font-size: 15px;
                    color: white;
                }
                #Seat {
                    display: flex;
                    position: relative;
                    width: 35px;
                    height: 35px;
                    margin: 1px;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-size: 10px;
                }
                #SeatIcon {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    cursor: pointer;
                }
                .selected {
                    background-color: red;
                }
                #ChooseSeatButtonContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 15%;
                    justify-content: center;
                    align-items: center;
                }
                #ChooseSeatButton {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0 0 25px 25px;
                    background-color: #24A0ED;
                    color: white;
                    cursor: pointer;
                }
                @media (max-width: 600px) {
                    #SeatSelection { height: 45%; }
                    #StageContainer { font-size: 10px; }
                }
            `}
        </style>
        </div>
    )
};

export default SeatSelection;