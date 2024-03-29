import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MONTREAL_LATITUDE = 45.5;
const MONTREAL_LONGITIUDE = -73.56;
const ZOOM_LEVEL = 12;

const DisplayMap = ({ height, width }) => {
  const mapRef = useRef(null);

  React.useLayoutEffect(() => {
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: `${process.env.REACT_APP_API_KEY}`,
    });

    const defaultLayers = platform.createDefaultLayers();

    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: MONTREAL_LATITUDE, lng: MONTREAL_LONGITIUDE },
      zoom: ZOOM_LEVEL,
      pixelRatio: window.devicePixelRatio || 1,
    });

    console.log({ hMap });
    console.log({ H: H });
    console.log({ window: window });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    // cleanup on unmount
    return () => {
      hMap.dispose();
    };
  }, [mapRef]);

  // useEffect(() => {
  //   console.log("useEffect");
  //   const H = window.H;
  //   const platform = new H.service.Platform({
  //     apikey: `${process.env.REACT_APP_API_KEY}`,
  //   });

  //   const defaultLayers = platform.createDefaultLayers();

  //   // Create map instance
  //   new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
  //     center: { lat: MONTREAL_LATITUDE, lng: MONTREAL_LONGITIUDE },
  //     zoom: ZOOM_LEVEL,
  //     pixelRatio: window.devicePixelRatio || 1,
  //   });
  // }, []);

  return (
    // Set a height on the map so it will display
    <MapGraphic ref={mapRef} height={height} width={width} />
  );
};

const MapGraphic = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 5px solid grey;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export default DisplayMap;
