import React from "react";
import MapViewDirections from "react-native-maps-directions";

export const Directions = ({ destination, origin, onReady, mode, onStart }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    mode={mode}
    resetOnChange={false}
    apikey="AIzaSyDmpW_EmiGUpQ_Z8MU_L0kbg8qrczvNzss"
    strokeWidth={5}
    strokeColor="#1565C0"
    
  />
);


