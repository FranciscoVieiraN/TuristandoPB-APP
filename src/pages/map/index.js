import * as React from 'react';
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    ScrollView,
    PermissionsAndroid,
    Dimensions,
    PixelRatio} from 'react-native';
import {
    useNavigation, 
    useRoute} from '@react-navigation/native';
import MapView, { Marker } from "react-native-maps";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Geocoder from "react-native-geocoding";
import Geolocation from '@react-native-community/geolocation';
import styles from './style';
import {Directions} from '../../components/Directions';
import {getDistance} from 'geolib';



export default function Map(){

    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.0462;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const route = useRoute();
    const navigation = useNavigation();


    const [origin, setOrigin] = React.useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
    });

    const [mapView, setMapView] = React.useState(null);
    const [mark, setMark] = React.useState(null);
    const [followUserLocation, setFollowUserLocation] = React.useState(true);
    const [mode, setMode] = React.useState('DRIVING');
    const [distance, setDistance] = React.useState(0);

    
    const destination = route.params.atrativo;

    async function getCurrentLocation(){

        Geolocation.getCurrentPosition(
            async ({coords: {latitude,longitude}}) => 
            setOrigin({
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0462,
                longitudeDelta: 0.0261,
            }),(err)=> console.log(err),
            {
                timeout: 2000,
                maximumAge: 1000,
                enableHighAccuracy: true,

            }
        )
    }



    React.useEffect(()=>{
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        getCurrentLocation();
    },[])

    
    

        return(
            <View style={styles.container}>
            
                <MapView
                ref={el => setMapView(el)}
                initialRegion={{
                    latitude: destination.latitude,
                    longitude: destination.longitude,
                    latitudeDelta: 0.0462,
                    longitudeDelta: 0.0261,
                    }}
                onUserLocationChange={event => {
                    setOrigin(event.nativeEvent.coordinate)
                    setDistance(getDistance(origin,{
                        latitude: destination.latitude,
                        longitude: destination.longitude}, 100))

                    if(followUserLocation){
                        mapView.animateToCoordinate(event.nativeEvent.coordinate, 1000);
                    }
                    
                }}
                showsUserLocation={true}
                style={styles.mapView}>
                    <React.Fragment>
                        <Marker
                        ref={el => setMark(el)}
                        title={destination.title}
                        description={destination.endereco}
                        coordinate={{
                            latitude: destination.latitude,
                            longitude: destination.longitude}}
                        />

                        <Directions
                        origin={origin}
                        destination={{
                            latitude: destination.latitude,
                            longitude: destination.longitude}}
                        mode={mode}
                        />
                    </React.Fragment>
                </MapView>

                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={35} color='#0D47A1'/>
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Mapa</Text>
                </View>

                <View style={styles.modeBoxInfo}>
                        <Text style={{
                            fontSize: 15,
                            fontFamily: 'Roboto-Bold',
                            color:'#0D47A1'}}>
                        
                                Modo: {mode==='DRIVING' ? 
                                'Dirigindo' : 'Andando'}
                                
                        </Text>
                </View>

                <View
                style={styles.atrativoCardContainer}>
                    <View style={styles.distanceBoxInfo}>
                        <Text style={{
                            fontSize: 15,
                            fontFamily: 'Roboto-Bold',
                            color:'#0D47A1'}}>
                        
                                Distância: {distance/1000} Km
                                
                        </Text>
                    </View>

                    <View style={{height: 300}}>
                        <TouchableOpacity
                        onPress={() =>setMode("DRIVING")}
                        style={styles.myLocationButtom}>
                            <Icon2 
                            name='drive-eta' 
                            size={30}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() =>setMode("WALKING")}
                        style={styles.myLocationButtom}>
                            <Icon2
                            name='directions-walk' 
                            size={30}/>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                        onPress={() =>{
                            mapView.animateToCoordinate(origin, 1000);
                            setFollowUserLocation(true)}}
                        style={styles.myLocationButtom}>
                            <Icon2 
                            name='my-location' 
                            size={30}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => {
                            setFollowUserLocation(false)
                            mapView.animateToCoordinate({
                                latitude: destination.latitude,
                                longitude: destination.longitude}, 1000);
                            setTimeout(()=>{
                                mark.showCallout();
                            }, 1000)}} 
                        style={styles.myLocationButtom}>
                            <Icon2 
                            name='location-on' 
                            size={30}/>
                        
                        </TouchableOpacity>

                    </View>

                </View>

                



                


                </View>




        );
}    