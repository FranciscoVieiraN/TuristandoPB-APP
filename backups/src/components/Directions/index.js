import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyDmpW_EmiGUpQ_Z8MU_L0kbg8qrczvNzss"
    strokeWidth={3}
    strokeColor="#1565C0"
    
  />
);

export default Directions;
