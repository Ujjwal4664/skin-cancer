import React, { useState } from 'react';
import FileReaderComponent from '../components/filereader';
import OpenInformationComponent from '../components/informationComponent';
import MapComponent from '../pages/mappageS'; // Import your MapComponent

function Home() {
  const [fileContent, setFileContent] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const handleFileRead = (content) => {
    setFileContent(content);
  };

  const handleOpenMap = () => {
    setShowMap(true);
  };

  const handleOpenFiles = () => {
    // Add code to handle opening files here
  };

  return (
    <div className="HomePage">
      {fileContent ? (
        <OpenInformationComponent fileContent={fileContent} />
      ) : (
        <FileReaderComponent onFileRead={handleFileRead} />
      )}

      <div>
        {fileContent && !showMap && (
          <button onClick={handleOpenMap}>Open Maps</button>
        )}

        {!showMap && (
          <button onClick={handleOpenFiles}>Open Files</button>
        )}
      </div>

      {showMap && <MapComponent />} {/* Conditionally render MapComponent */}
    </div>
  );
}

export default Home;
