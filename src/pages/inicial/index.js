import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, View } from 'react-native';
import styles from './style';


import {useNavigation} from '@react-navigation/native';


export default function Inicial(){

    const navigation = useNavigation();

    function navigationToHome(){
        navigation.navigate('Home')
    }

    return(  
            <SafeAreaView style={styles.container}>
                <View>  
                    <Text
                        style={{color: '#F5F5F5', fontSize: 40, justifyContent: 'center', alignItems: 'center'}}>
                        TuristandoPB
                    </Text>
                </View>
                
              
                <TouchableOpacity 
                    onPress={()=>navigationToHome()} 
                    style={styles.startButton}>
                    <Text 
                        style={{fontSize: 20,
                        color: '#1C4491',
                        fontFamily: 'Recursive-ExtraBold'}}>
                        Começar
                    </Text>
                </TouchableOpacity>
              
            </SafeAreaView>
    );
}
