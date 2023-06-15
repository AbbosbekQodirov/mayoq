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

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import React, { useRef, useState } from "react";

function App() {
  const center = { lat: 40.38298485291166, lng: 71.78271857530021 };
  const center1 = { lat: 40.38290485291166, lng: 71.78271857530021 };

  const { coords } = useGeolocated();

  // console.log(coords.latitude, coords.longitude);

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
    console.log("iii");
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
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
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center}></Marker>
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
          <Marker position={center1}></Marker>
          {coords && (
            <Marker
              position={{ lat: coords.latitude, lng: coords.longitude }}
            ></Marker>
          )}
        </GoogleMap>
      </Box>

      <Box
        p={4}
        borderRadius="lg"
        mt={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="9"
      >
        <HStack spacing={4}>
          <Autocomplete>
            <Input type="text" placeholder="Origin" ref={originRef} />
          </Autocomplete>
          <Autocomplete>
            <Input type="text" placeholder="Destination" ref={destiantionRef} />
          </Autocomplete>
          <ButtonGroup>
            <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label="center back"
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent="space-between">
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label="center back"
            icon={<FaLocationArrow />}
            isRound
            onClick={() => map.panTo(center)}
          />
        </HStack>
      </Box>
    </Flex>
  );
}

export default App;
