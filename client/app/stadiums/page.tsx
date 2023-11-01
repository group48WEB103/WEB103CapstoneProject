import React from 'react';
import { Metadata } from 'next';
import Header from '../global/Header';
import Stadiums from './components/Stadiums';
import getAllStadiums from '../../services/GET/getAllStadiums';
import { MockStadium } from '../components/MockStadium';

export const metadata: Metadata = {
  title: 'tickeTeller | Stadiums',
  description: 'Buy a ticket for your favorite event!',
};

export default async function Page() {

  const stadiums = await MockStadium;

  return (
    <html>
      <body>
        <Header />
        <Stadiums stadiums={stadiums} />
      </body>
    </html>
  )  
}