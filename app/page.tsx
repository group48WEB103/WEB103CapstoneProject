import React from 'react';
import getAllLocations from '@/services/getAllLocations';
import Hero from './components/Hero';

export default async function Home() {

  const locations = await getAllLocations();

  return (
    <html>
      <body>
        <Hero locations={locations} />
      </body>
    </html>
  )  
}