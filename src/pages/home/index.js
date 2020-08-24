import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Cards} from '../../components/Cards'
import {atrativos} from '../../components/Objects/Atrativos'



export default function Home(){

    const navigation = useNavigation();

    const [data, setData] = React.useState(atrativos);

    function navigationToFavoritos(){
        navigation.navigate('Favoritos')
    }

    function navigationToAtrativos(){
        navigation.navigate('Atrativos')
    }

    function navigationToTipoRoteiro(){
        navigation.navigate('Tipo_roteiro')
    }

    function navigationToAtrativo(atrativo){
        navigation.navigate('Atrativo', {atrativo});
    }

    const listSeparetor = () => {
        return(
            <View style={{width: 20,}}></View>
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


    return(

        <View style={styles.container}>

            <ScrollView 
            showsVerticalScrollIndicator={false}>
            

                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.topButton}>
                        
                        <Icon name="menu" size={35} color='#1E90FF' />
                    
                    </TouchableOpacity>

                    <Text style={styles.title}>
                        Home
                    </Text>
                    


                </View>

                <View style={styles.cabecalhoContainer}>
                    <Text style={styles.cabecalho}>Vamos turistar?</Text>
                </View>














                <View style={styles.optionsContainer} >

                    <TouchableOpacity onPress={()=>navigationToTipoRoteiro()}  style={styles.optionButtonContainer}>
                        
                        <Text 
                        style={{fontSize: 17,
                        color: '#455A64',
                        fontFamily: 'Recursive-ExtraBold'}}>
                            
                            Roteiro
                    
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButtonContainer}
                    onPress={()=>navigationToFavoritos()}>               
                        
                        <Text style={
                            {fontSize: 17,
                            color: '#455A64',
                            fontFamily: 'Recursive-ExtraBold'}}>
                            
                            Favoritos
                        
                        </Text>
                
                    </TouchableOpacity >

                    <TouchableOpacity style={styles.optionButtonContainer}
                    onPress={()=>navigationToAtrativos()}>
                        
                        <Text style={
                            {fontSize: 17,
                            color: '#455A64',
                            fontFamily: 'Recursive-ExtraBold'}}>
                            
                            Atrativos
                        
                        </Text>
                    </TouchableOpacity>
                    

                </View>










                <View style={styles.conteudoContainer}>

                    <Text style={styles.cabecalhoII}>
                                Atrativos perto de você
                    </Text>




                    <FlatList contentContainerStyle={{padding: 5,}}
                            data={data}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                            ListEmptyComponent={() => (
                                <Text style={{fontSize: 15, color: 'gray', fontFamily: 'Recursive-ExtraBold'}}>
                                    Nenhum atrativo encontrado
                                </Text>
                            )}
                            ItemSeparatorComponent={listSeparetor}
                    />
                    

                </View>

            </ScrollView>

            




        </View>
    );

}