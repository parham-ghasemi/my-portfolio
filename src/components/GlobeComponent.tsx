import React, { useRef, useEffect } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';

const GlobeComponent: React.FC = () => {
  // Define the ref with the correct type
  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  useEffect(() => {
    const globeInstance = globeRef.current;
    if (globeInstance) {
      // Define the label's position with type safety
      const labelPosition: { lat: number; lng: number;} = {
        lat: 35,
        lng: 51,
      };

      // Animate the camera to the label's position
      globeInstance.pointOfView(labelPosition, 1000); // 1000ms animation duration
    }
  }, []);

  return (
    <Globe
      ref={globeRef}
      height={325}
      width={325}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere
      showGraticules
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.jpg"
      labelsData={[
        {
          lat: 35,
          lng: 51,
          text: "I'm here!",
        },
      ]}
      labelSize={2}
      labelDotRadius={0.5}
    />
  );
};

export default GlobeComponent;
