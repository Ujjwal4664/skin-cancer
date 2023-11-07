import React, { useEffect, useState } from 'react';

const MapComponent = () => {
  const apiKey = '47JAuf5zjDFWxJz0Hnsq'; // Replace with your actual HERE Maps API key
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [hospitalNames, setHospitalNames] = useState([]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        fetchNearbyHospitals();
      });
    } else {
      console.error('Geolocation is not available in your browser.');
    }
  }, []);

  const fetchNearbyHospitals = () => {
    const platform = new window.H.service.Platform({
      apikey: apiKey,
    });

    const service = platform.getPlacesService();
    const params = {
      at: `${latitude},${longitude}`,
      q: 'hospital',
      size: 10,
    };

    service.request(params, (data) => {
      if (data.results.items) {
        const names = data.results.items.map((item) => item.title);
        setHospitalNames(names);
      }
    });
  };

  return (
    <div>
      <h2>Nearby Hospitals</h2>
      <ul>
        {hospitalNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MapComponent;
