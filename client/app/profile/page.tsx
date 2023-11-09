import React from 'react';
import { Metadata } from 'next';
import Auth from './components/Auth';

export const metadata: Metadata = {
  title: 'ticketTeller | User Profile',
  description: 'View Our Hotels',
};

export default async function Home() {

  return (
    <html>
      <body>
        <Auth />
      </body>
    </html>
  )  
}