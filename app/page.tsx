'use client';

import { MapContainer, TileLayer } from 'react-leaflet';

const Home = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <MapContainer
        center={[40.73061, -73.935242]}
        zoom={10}
        style={{ height: '100vh', width: '100%', position: 'absolute' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default Home;
