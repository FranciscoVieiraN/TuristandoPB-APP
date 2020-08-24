import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: "flex-start",
  },

  topContainer: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0D47A1',
    elevation: 7,

  },

  titulo: {
      fontSize: 25,
      fontFamily: 'Roboto-Bold',
      color: '#FFF',
      marginLeft: 40,
  },

  mapContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
  
    mapView: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },

    
});