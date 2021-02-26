import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

const Maps = ({
  latitude,
  longitude,
  parentDimensions,
}: {
  latitude: number,
  longitude: number,
  parentDimensions?: number,
}) => {
  const [viewport, setViewport] = useState({
    latitude: 41.5868,
    longitude: -93.625,
    zoom: 5,
  });

  useEffect(() => {
    if (latitude && longitude) {
      console.log(latitude, longitude);
      setViewport({
        ...viewport,
        latitude,
        longitude,
      });
    }
  }, []);

  console.log(parentDimensions);
  return (
    <>
      {viewport && (
        <ReactMapGL
          height={320}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          onViewportChange={(viewport) => setViewport({ ...viewport })}
          {...viewport}
          width={
            "100%" /* this must come after viewport, or width gets set to fixed size via onViewportChange */
          }
        />
      )}
    </>
  );
};

export default Maps;
