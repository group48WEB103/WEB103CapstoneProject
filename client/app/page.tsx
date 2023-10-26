import React from 'react';
import { Metadata } from 'next';
import Header from './global/Header';
import Home from './components/Home';

export const metadata: Metadata = {
  title: 'tickeTeller',
  description: 'Buy a ticket for your favorite event!',
};

export default async function Page() {

  // fetch tickets from server and pass into Home props

  return (
    <html>
      <body>
        <Header />
        <Home />
      </body>
    </html>
  )  
}