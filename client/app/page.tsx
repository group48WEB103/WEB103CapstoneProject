import React from 'react';
import { Metadata } from 'next';
import Header from './global/Header';
import Home from './components/Home';
import getAllEvents from "../services/GET/getAllEvents"
import getAllStadiums from "../services/GET/getAllStadiums"

export const metadata: Metadata = {
  title: 'tickeTeller',
  description: 'Buy a ticket for your favorite event!',
};

export default async function Page() {

  const events = await getAllEvents();
  const stadiums = await getAllStadiums();

  return (
    <html>
      <body>
        <Header />
        <Home events={events} stadiums={stadiums} />
      </body>
    </html>
  )  
}