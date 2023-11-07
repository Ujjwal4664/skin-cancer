import React, { useState } from 'react';
import MapComponent from '../pages/mappage'; // Import your MapComponent

function OpenInformationComponent({ fileContent }) {
  const [showMap, setShowMap] = useState(false);
  const [showMapButton, setShowMapButton] = useState(false);

  const handleOpenMap = () => {
    setShowMap(true);
  };

  const sendToBackend = async () => {
    try {
      // Replace 'http://backend-url' with your actual backend API URL
      const response = await fetch('http://backend-url/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileContent }), // Send the file content to the backend
      });

      if (response.ok) {
        // Backend processing was successful
        console.log('File information sent to the backend successfully');
        handleOpenMap(); // Open the MapComponent
        setShowMapButton(true); // Show the button inside MapComponent
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error sending file information to the backend', error);
    }
  };

  return (
    <div>
      <h2>Open Information Component</h2>
      <p>Collected file information:</p>
      <pre>{fileContent}</pre>
      <button onClick={sendToBackend}>Send to Backend</button>
      {showMap && <MapComponent />}
      {showMapButton && (
        <button onClick={() => console.log('Button inside MapComponent clicked')}>
          Click Me Inside MapComponent
        </button>
      )}
    </div>
  );
}

export default OpenInformationComponent;
