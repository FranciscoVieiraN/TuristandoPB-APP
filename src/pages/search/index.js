import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export default function search(){

    const navigation = useNavigation();

    function navigationToAtrativos(){
        navigation.navigate('Atrativos')
    }

    function navigationToRoteiroCidades(){
        navigation.navigate('Cidades')
    }

    return(
        <View style={styles.conteiner}>
            <Text style={styles.text}>Que tipo de busca você</Text>
            <Text style={[styles.text, {marginBottom: 25}]}>quer fazer?</Text>

            <TouchableOpacity
            style={styles.button}
                onPress={()=>navigationToAtrativos()}
            >
                <Text style={styles.textButton}>Atrativos</Text>
                <Icon name='beach-access' color="#F5F5F5" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>navigationToRoteiroCidades()}
            >
                <Text style={styles.textButton}>Cidades</Text>
                <Icon name='location-city' color="#F5F5F5" size={25}/>
            </TouchableOpacity>
        </View>
    )
}