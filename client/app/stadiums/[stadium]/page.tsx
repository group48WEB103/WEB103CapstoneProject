import React from 'react';
import { Metadata } from 'next';
import Header from '../../global/Header';
import PassedColor from '../../global/BackgroundColorComponents/PassedColor';
import getStadiumByID from '../../../services/GET/getStadiumByID';

export const metadata: Metadata = {
  title: 'tickeTeller | Stadium',
  description: 'Buy a ticket for your favorite event!',
};

export default async function Page({ params }: { params: { stadium: string } }) {

  const stadium = await getStadiumByID(params.stadium); 
  // event doesn't matter here, it's just a placeholder
  const event = {id: 0, stadium_id: 0, title: '', description: '', performer: '', image: 'j'};

  return (
    <html>
      <body>
        <Header />
        <PassedColor image={stadium.image} stadium={stadium} event={event} render={'stadium'} />
      </body>
    </html>
  )  
}