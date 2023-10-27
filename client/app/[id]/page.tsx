import React from 'react';
import { Metadata } from 'next';
import Header from '../global/Header';
import PassedColor from './components/PassedColor';
// import getEventByID from '../../../services/GET/getEventByID';
// import getStadiumByID from '../../../services/GET/getStadiumByID';
import { MockEvents } from '../components/MockEvents'; 

export const metadata: Metadata = {
  title: 'View Event',
  description: 'Buy a ticket for your favorite event!',
};

export default async function Page({ params }: { params: { id: string } }) {

  const event = MockEvents[Number(params.id)] // fetch ticket by id from server and pass into Ticket props. (params.id)
  const stadium = ''; // fetch stadium by id from server and pass into Ticket props. (event.location_id)
  const location = 'Golden Gate Arena'; // going to be stadium.title

  return (
    <html>
      <body>
        <Header />
        <PassedColor image={event.image} event={event} location={location} />
      </body>
    </html>
  )
}