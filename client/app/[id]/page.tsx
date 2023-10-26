import React from 'react';
import { Metadata } from 'next';
import Header from '../global/Header';
import Ticket from './components/Ticket';

export const metadata: Metadata = {
  title: 'View Ticket',
  description: 'Buy a ticket for your favorite event!',
};

export default async function Page({ params }: { params: { id: string } }) {

  // fetch ticket by id from server and pass into Ticket props. (params.id)

  return (
    <html>
      <body>
        <Header />
        <Ticket />
      </body>
    </html>
  )
}