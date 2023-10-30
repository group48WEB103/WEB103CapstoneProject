import React from 'react';
import { Metadata } from 'next';
import Header from '../global/Header';
import PassedColor from './components/PassedColor';
// import getEventByID from '../../../services/GET/getEventByID';
// import getStadiumByID from '../../../services/GET/getStadiumByID';
import { MockEvents } from '../components/MockEvents'; 
import { MockStadium } from '../components/MockStadium';

export const metadata: Metadata = {
  title: 'View Event',
  description: 'Buy a ticket for your favorite event!',
};

export default async function Page({ params }: { params: { id: string } }) {

  const event = MockEvents[Number(params.id)] // fetch ticket by id from server and pass into Ticket props. (params.id)
  const stadium = MockStadium[Number(event.stadium_id)]; // fetch stadium by id from server and pass into Ticket props. (event.stadium_id)

  return (
    <html>
      <body>
        <Header />
        <PassedColor image={event.image} event={event} stadium={stadium} />
      </body>
    </html>
  )
}