import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './style';
import  Icons  from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Cards} from '../../components/Cards';
import {atrativos} from '../../components/Objects/Atrativos';


export default function Home(){

    const navigation = useNavigation();

    const [data, setData] = React.useState(atrativos);
    const [teste, setTeste] =React.useState(null);

    function navigationToAtrativos(){
        navigation.navigate('Atrativos')
    }

    function navigationToRoteiroCidades(){
        navigation.navigate('Cidades')
    }

    function navigationToAtrativo(atrativo){
        navigation.navigate('Atrativo', {atrativo});
    }

    const listSeparetor = () => {
        return(
            <View style={{height: 20,}}></View>
        )
        
    }

    

    const renderItem = ({ item }) => {
        return (
            <Cards
                item={item}
                onPress={() => navigationToAtrativo(item)}

            />
        );
    };


    /*
    React.useEffect(()=>{
        fetch(
            'https://turistandoapi.herokuapp.com/atrativosALL')
        .then((response)=> response.json())
        .then((json)=> console.log(json))
        .catch((err)=> console.error(err));

        
    },[])
    */

    return(

        <View style={styles.container}>

                <View style={styles.tituloContainer}>
                    <Text style={styles.titulo}>Vamos turistar!</Text>

                    <TouchableOpacity 
                        onPress={()=>navigationToAtrativos()}  
                        style={styles.optionButtonContainer}>
                        
                        <Text 
                        style={{fontSize: 20,
                        color: '#fff',
                        fontFamily: 'Recursive-ExtraBold'}}>
                            
                            Atrativos
                    
                        </Text>

                        <Icons name='beach-access' color={'white'} size={25}/>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigationToRoteiroCidades()}  
                        style={styles.optionButtonContainer}>
                        
                        <Text 
                        style={{fontSize: 20,
                        color: '#fff',
                        fontFamily: 'Poppins-SemiBold'}}>
                            
                            Cidades
                    
                        </Text>

                        <Icons name='location-city' color={'white'} size={25}/>
                    </TouchableOpacity>

                    
                </View>



                <View style={styles.conteudoContainer}>

                    <Text style={styles.cabecalhoII}>
                                Perto de você...
                    </Text>


                    <FlatList 
                            data={data}
                            vertical
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                            ListEmptyComponent={() => (
                                <Text style={{
                                    fontSize: 15, 
                                    color: 'gray', 
                                    fontFamily: 'Recursive-ExtraBold'}}>
                                    Nenhum atrativo encontrado
                                </Text>
                            )}
                            ItemSeparatorComponent={listSeparetor}
                    />


                </View>

        </View>
    );

}