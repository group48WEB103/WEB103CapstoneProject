import React from 'react';
import { Metadata } from 'next';
import Header from '../global/Header';
import PassedColor from '../global/BackgroundColorComponents/PassedColor';
import getEventByID from '../../services/GET/getEventByID';
import getStadiumByID from '../../services/GET/getStadiumByID';

export const metadata: Metadata = {
  title: 'ticketTeller | Event',
  description: 'Buy a ticket for your favorite event!',
};

export default async function Page({ params }: { params: { id: string } }) {

  const event = await getEventByID(params.id);
  const stadium = await getStadiumByID(event.stadium_id);

  return (
    <html>
      <body>
        <Header />
        <PassedColor image={event.image} event={event} stadium={stadium} render={'event'} />
      </body>
    </html>
  )
}