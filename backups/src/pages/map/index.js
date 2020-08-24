import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, PermissionsAndroid } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapView, { Marker } from "react-native-maps";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Geocoder from "react-native-geocoding";
import Geolocation from 'react-native-geolocation-service';
import styles from './style';
import Directions from '../../components/Directions/index';

export default function Map(){

    const [origin, setOrigin] = React.useState({
        latitude: 0,
        longitude: 0,
    });
    
    const [destination, setDestination] = React.useState({
        id: "2",
        title: "UFPB",
        endereco: "João Pessoa, Castelo Branco",
        latitude:-7.1365167,
        longitude:-34.8452893,
    });


    

        return(
            getCurrentLocation(),
            <View style={styles.container}>

                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={35} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Mapa</Text>
                </View>

                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.mapView}
                        showsUserLocation={true}
                        followsUserLocation={true}
                        onMapReady={()=> Geolocation.getCurrentPosition(sucess, erro, options)}
                        >

                                <Marker
                                    coordinate={{
                                    latitude: origin.latitude,
                                    longitude: origin.longitude,
                                    }}
                                    />

                    </MapView>

                    </View>
                </View>




        );
}    