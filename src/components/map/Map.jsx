import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { useGeolocated } from "react-geolocated";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import carIcon from "../../assets/car.svg";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Map({ datas }) {
  ///////

  ///////

  const [showMarker, setShowMarker] = useState(false);

  //workers
  const workers = Object.values(datas[0]?.workers);

  //user
  const users = Object.values(datas[0].emergency_calls);

  console.log(users);
  // for line
  const latStart = Number(workers[0].lat);
  const lngStart = Number(workers[0].long);

  const latEnd = Number(users[0].user_location_lat);
  const lngEnd = Number(users[0].user_location_long);

  console.log(latEnd, lngEnd);
  //for line end

  const [selected, setSelected] = useState(null);
  const [center, setCenter] = useState({
    lat: 40.38298485291166,
    lng: 71.78271807530021,
  });

  const { coords } = useGeolocated();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyANHJAE_PRvZDcO4akRZROTjcjnH3vwPXA",
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map*/ null);

  const [directionsResponse, setDirectionsResponse] = useState(null);

  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type  React.MutableRefObject<HTMLInputElement> */

  const originRef = useRef();

  /** @type  React.MutableRefObject<HTMLInputElement> */

  const destiantionRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: new google.maps.LatLng(latStart, lngStart),
      destination: new google.maps.LatLng(latEnd, lngEnd),
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      // bgColor='blue.200'
      // bgImage='https://images.unsplash.com/photo-1647117181799-0ac3e50a548a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      // bgPos='bottom'
      h="100vh"
      w="100vw"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        <GoogleMap
          center={center}
          zoom={12}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={(map) => setMap(map)}
          onClick={(event) => {
            console.log("lat" , event.latLng.lat());
            console.log("long" , event.latLng.lng());
          }}
          // onDrag={()=>{
          //   setCenter(null)
          // }}
        >
          {/* {coords && (
            <Marker
              position={{
                lat: coords.latitude,
                lng: coords.longitude,
              }}
            ></Marker>
          )} */}
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
          {workers.map((marker) => {
            const location = {
              lat: Number(marker.lat),
              lng: Number(marker.long),
            };
            return (
              <div key={marker.id}>
                {showMarker && (
                  <Marker
                    key={marker.car_number}
                    position={location}
                    icon={carIcon}
                    onClick={() => {
                      setSelected(marker);
                    }}
                  ></Marker>
                )}
              </div>
            );
          })}
          {selected ? (
            <InfoWindow
              position={{
                lat: Number(selected.lat),
                lng: Number(selected.long),
              }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2> salom</h2>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </Box>

      <Box
        p={4}
        borderRadius="lg"
        mt={4}
        bgColor="white"
        shadow="base"
        minW="container.ms"
        zIndex="9"
      >
        <HStack spacing={4}>
          <ButtonGroup>
            <Button
              colorScheme="blue"
              type="submit"
              onClick={() => {
                setShowMarker(!showMarker);
              }}
            >
              {showMarker ? (
                <h2>Hodimlarni ko'rsatmaslik</h2>
              ) : (
                <h2>Hodimllarni ko'rsatish</h2>
              )}
            </Button>
            <Button colorScheme="blue" type="submit" onClick={calculateRoute}>
              Yo'l chizig'ini ko'rsatish
            </Button>
            <Link to="/table">
              <Button colorScheme="blue">Umumiy chaqiruvlar ro’yxati</Button>
            </Link>
          </ButtonGroup>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Map;
