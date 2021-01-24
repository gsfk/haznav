import React, {useEffect, useRef, useState} from "react"

const DisplayMap = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(()=> {
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: `${process.env.REACT_APP_API_KEY}`
        });

        const defaultLayers = platform.createDefaultLayers();

        // Create map instance
        const map = new H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          center: { lat: 45.5, lng: -73.56 },
          zoom: 12,
          pixelRatio: window.devicePixelRatio || 1
        }
      );
        setMap(map);

        //cleanup on unmount
        return (setMap(null))
    });

    return (
        // Set a height on the map so it will display
        <div ref={mapRef} style={{ height: "100vh" }} />
      );

}


export default DisplayMap;