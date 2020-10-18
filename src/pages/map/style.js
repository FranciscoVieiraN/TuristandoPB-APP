import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  container:{
    flex: 1,
  },
  
  mapView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  topContainer: {
        padding: 20,
        position: "relative",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        elevation: 1,

    },

    titulo: {
        fontSize: 25,
        fontFamily: 'Roboto-Bold',
        color: '#0D47A1',
        marginLeft: 40,
    },

    modeBoxInfo:{
      backgroundColor: '#fff',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      padding: 10,
      width: 100,
      elevation: 10,
    },

    distanceBoxInfo:{
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 10,
      elevation: 10,
    },

  atrativoCardContainer:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
    padding: 5,
  },

  myLocationButtom:{
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    elevation: 10,
  },

  myLocationButtomSelected:{
    padding: 10,
    backgroundColor: '#0D47A1',
    borderRadius: 20,
    marginBottom: 20,
    elevation: 10,
  },

  modeButtom:{
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    elevation: 10,
  },

  modeButtomSelected:{
    padding: 10,
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    marginBottom: 20,
    elevation: 10,
  },

  destinationLocationButtom:{
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  

    
});