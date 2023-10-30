import React from 'react';
import { Metadata } from 'next';
import Header from '../global/Header';
import PassedColor from '../global/BackgroundColorComponents/PassedColor';
// import getEventByID from '../../../services/GET/getEventByID';
// import getStadiumByID from '../../../services/GET/getStadiumByID';
import { MockEvents } from '../components/MockEvents'; 
import { MockStadium } from '../components/MockStadium';

export const metadata: Metadata = {
  title: 'ticketTeller | Event',
  description: 'Buy a ticket for your favorite event!',
};

export default async function Page({ params }: { params: { id: string } }) {

  const event = await MockEvents[Number(params.id)] 
  const stadium = await MockStadium[Number(event.stadium_id)];

  return (
    <html>
      <body>
        <Header />
        <PassedColor image={event.image} event={event} stadium={stadium} render={'event'} />
      </body>
    </html>
  )
}