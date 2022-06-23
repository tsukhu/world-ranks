import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

const Maps = ({
  latitude,
  longitude,
  parentDimensions,
}: {
  latitude: number;
  longitude: number;
  parentDimensions?: number;
}) => {
  const [viewport, setViewport] = useState({
    latitude: 41.5868,
    longitude: -93.625,
    zoom: 5,
  });

  useEffect(() => {
    if (latitude && longitude) {
      //  console.log(latitude, longitude);
      setViewport({
        ...viewport,
        latitude,
        longitude,
      });
    }
  }, []);

  //console.log(process.env.NEXT_PUBLIC_MAPBOX_TOKEN);
  return (
    <>
      {viewport && (
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          {...viewport}
          style={{ width: '100%', height: 400 }}
        />
      )}
    </>
  );
};

export default Maps;
