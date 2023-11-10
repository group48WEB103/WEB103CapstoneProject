import React, { useState } from "react";
import { Event, Stadium } from "../../../services/types";

interface SeatSelectionProps {
    event: Event;
    stadium: Stadium;
    changeCartState: (cartLength: number) => void;
};

const SeatSelection: React.FC<SeatSelectionProps> = ({ event, stadium, changeCartState }) => {

    const [showWarning, setShowWarning] = useState(false);
    const [chosenSeat, setChosenSeat] = useState([-1, 0]);
    const leftSeatsArray = Array.from({ length: Math.floor(stadium.capacity / 3) }).map((_, index) => index);
    const middleSeatsArray = Array.from({ length: Math.floor(stadium.capacity / 3) }).map((_, index) => index + leftSeatsArray.length);
    const rightSeatsArray = Array.from({ length: stadium.capacity - leftSeatsArray.length - middleSeatsArray.length }).map((_, index) => index + leftSeatsArray.length + middleSeatsArray.length);
    
    const chooseSeat = (seat: number, price: number) => {
        if (seat <= stadium.capacity && seat >= 0) {
            setChosenSeat([seat, price]);
        }     
    };

    const addToCart = (seat: number, price: number) => {
        const cartString = localStorage.getItem('cart');
        const cart = cartString ? JSON.parse(cartString) : [];
        const seatObject = { id: seat, title: `${stadium.title} - Seat #${seat}`, price: price, event_id: event.id, stadium_id: stadium.id };
        const found = cart.find((item: any) => item.id === seatObject.id);
        if (found) {
            setShowWarning(true);
            setChosenSeat([-1, 0]);
            setTimeout(() => {
                setShowWarning(false);
            }, 2000);
            return;
        }
        cart.push(seatObject);
        localStorage.setItem('cart', JSON.stringify(cart));
        changeCartState(cart.length);
        setChosenSeat([-1, 0]);
    };

    return (
        <div id='SeatSelection'>
            <div id="SeatSelectionContainer">
                <div id="SeatGridContainer">
                    <div id="StageContainer">{stadium.title} Stage</div>
                    <div id="SeatLeftContainer">
                        {leftSeatsArray.map((index: number) => (
                            <div id='Seat' key={index} onClick={() => chooseSeat(index, 50)}>
                                <img id="SeatIcon" src="/seatIconLeft.png" className={chosenSeat[0] === index ? 'selected' : ''} />
                            </div>
                        ))}
                    </div>
                    <div id="SeatMiddleContainer">
                        {middleSeatsArray.map((index: number) => (
                            <div id='Seat' key={index} onClick={() => chooseSeat(index, 75)}>
                                <img id="SeatIcon" src="/seatIconMiddle.png" className={chosenSeat[0] === index ? 'selected' : ''} />
                            </div>
                        ))}
                    </div>
                    <div id="SeatRightContainer">
                        {rightSeatsArray.map((index: number) => (
                            <div id='Seat' key={index} onClick={() => chooseSeat(index, 50)}>
                                <img id="SeatIcon" src="/seatIconRight.png" className={chosenSeat[0] === index ? 'selected' : ''} />
                            </div>
                        ))}
                    </div>
                </div>
                <div id="ChooseSeatButtonContainer">
                    {chosenSeat[0] !== -1 ? ( <div id="ChooseSeatButton" onClick={() => addToCart(chosenSeat[0], chosenSeat[1])}>Choose Seat</div> ) : null}
                    {showWarning ? ( <div id="Warning">Seat already in cart!</div> ) : null}
                </div>
            </div>
        <style>
            {`
                #SeatSelection {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
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
                #SeatRightContainer { flex-wrap: wrap-reverse; }
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
                    border-radius: 25px 25px 0 0;
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
                #ChooseSeatButton, #Warning {
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
                    #StageContainer { font-size: 10px; }
                }
            `}
        </style>
        </div>
    )
};

export default SeatSelection;