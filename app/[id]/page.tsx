import React from 'react';
import getLocationByID from '@/services/getLocationByID';
import Hero from './components/Hero';

export default async function Location({ params }: { params: { id: string } }) {

  const location = await getLocationByID(params.id);

  return (
    <html>
      <body>
        <Hero location={location} />
      </body>
    </html>
  )
}