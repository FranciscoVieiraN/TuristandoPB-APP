import React from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
//import styles from './style';

import {useNavigation} from '@react-navigation/native';
import colors from '../../styles/colors';


export default function Inicial(){

    const navigation = useNavigation();

    function navigationToHome(){
        navigation.navigate('Home')
    }

    return(
        <SafeAreaView style={styles.container}>
             <Image source={require("../../../assets/logos/logo.png")}
             style={{
               alignItems: "center",
               marginTop: -70,
               resizeMode: "contain", width: 250, height:250}}/>
            <TouchableOpacity style={styles.button}
            onPress={()=>navigationToHome()}>
                <Text style={styles.buttontext}>
                    Começar
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.main,
        justifyContent:'center',
        alignItems:'center',
        padding:30
    },
    button: {
        backgroundColor: '#F5F5F5',
        width: 200,
        height: 47.37,
        borderRadius: 23.68,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 460
    },
    buttontext:{
        color:colors.main,
        fontWeight:'bold',
        fontSize:24

    }
})