import React from 'react';
import { Metadata } from 'next';
import Header from '../global/Header';
import PassedColor from './components/PassedColor';

export const metadata: Metadata = {
  title: 'View Event',
  description: 'Buy a ticket for your favorite event!',
};

export default async function Page({ params }: { params: { id: string } }) {

  const event = ''; // fetch ticket by id from server and pass into Ticket props. (params.id)
  const img = 'https://hips.hearstapps.com/hmg-prod/images/close-up-of-purple-crocus-flowers-united-kingdom-uk-royalty-free-image-1674159456.jpg'; // going to be res.image
  
  return (
    <html>
      <body>
        <Header />
        <PassedColor image={img} event={event} />
      </body>
    </html>
  )
}