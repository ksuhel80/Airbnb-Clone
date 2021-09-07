import { useState } from 'react';
import ReactMapGl, {Marker, Popup} from 'react-map-gl';
import{ getCenter}  from 'geolib';



function Map({searchResults}) {
    const [selecteLocation , setSelectedLocation] = useState({});

    const coordinates = searchResults.map(result => ({
      longitude: result.long,
      latitude: result.lat,
    }))

    const center = getCenter(coordinates); 

    const [viewPort,setViewPort]=useState({
      width: "100%",
      height: "100%",
      latitude : center.latitude,
      longitude: center.longitude,
      zoom: 11,
  })

    return (
      <ReactMapGl mapStyle="mapbox://styles/ksuhel80/ckt9zt4k66epj18uq2ehjfs11" 
      
      mapboxApiAccessToken={process.env.mapbox_key} {...viewPort} 
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
      >
          {searchResults.map(result => (
            <div key={result.long}>
           
              <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}>
                <p
                onClick={() => setSelectedLocation(result)}
                className="font-bold cursor-pointer animate-bounce
                text-xl text-white  "
                > 
                  {result.star}
                </p>
              </Marker>
              {selecteLocation.long === result.long ? (
                <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
                >
                  {result.title}
                </Popup>
              ) : (false)}
            </div>
          ))}
      </ReactMapGl>
    )
}

export default Map

