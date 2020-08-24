import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'






const Item = ({ item, onPress}) => (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.atrativoButtom}>
        <Image 
        source={{uri: item.images[0].url}}
        style={styles.atrativoFotoContainer}/>
        
        <View style={styles.atrativoDetalhe}>
            <View>

                <View style={{flexDirection: "row", width: '100%', justifyContent: "space-between", alignItems: "center",}}>
                <Text numberOfLines={1} style={{
                    fontFamily: 'Recursive-Black',
                    fontSize: 20,
                    marginBottom: 10,
                    color: '#212121',}}>

                    {item.title}

                </Text>


                </View>

                <Text numberOfLines={3} style={styles.descricao}>
                    {item.descricao}
                
                </Text>
            
            </View>

        </View>    
    
    </TouchableOpacity>
    
);

export default function Home(){

    const navigation = useNavigation();

    const [data, setData] = React.useState([{
        id: "1",
        title: "Farol de Cabo Branco",
        endereco: "João Pessoa, PB",
        descricao: "blablablablablablablablablablablablablablablablablablablablablablablablablablabla",
        telefone: "(83) 98615-0095",
        horarios: "o dia todo",
        images: [
            {
                id: 1,
                url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8VgXJZMERyk%2Fmaxresdefault.jpg&f=1&nofb=1'
            },
            {
                id: 2,
                url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8VgXJZMERyk%2Fmaxresdefault.jpg&f=1&nofb=1'
            },
            {
                id: 3,
                url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8VgXJZMERyk%2Fmaxresdefault.jpg&f=1&nofb=1'
            },
        ],
        latitude: 7.1487391,
        longitude:-34.7987716,
    },
    {
        id: "2",
        title: "UFPB",
        endereco: "João Pessoa, Castelo Branco",
        descricao: "blablablablablablablablablablablablablablablablablablablablablablablablablablabla",
        telefone: "(83) 98615-0095",
        horarios: "o dia todo",
        images: [
            {
                id: 1,
                url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8VgXJZMERyk%2Fmaxresdefault.jpg&f=1&nofb=1'
            },
            {
                id: 2,
                url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8VgXJZMERyk%2Fmaxresdefault.jpg&f=1&nofb=1'
            },
            {
                id: 3,
                url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8VgXJZMERyk%2Fmaxresdefault.jpg&f=1&nofb=1'
            },
        ],
        latitude:-7.1365167,
        longitude:-34.8452893,
    },
    {
        id: "3",
        title: "Estação Ciências",
        endereco: "João Pessoa, PB",
        descricao: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
        telefone: "(83) 98615-0095",
        horarios: "o dia todo",
        images: [
            {
                id: 1,
                url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8VgXJZMERyk%2Fmaxresdefault.jpg&f=1&nofb=1'
            },
            {
                id: 2,
                url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8VgXJZMERyk%2Fmaxresdefault.jpg&f=1&nofb=1'
            },
            {
                id: 3,
                url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8VgXJZMERyk%2Fmaxresdefault.jpg&f=1&nofb=1'
            },
        ],
        latitude:-7.1482329,
        longitude:-34.8003526,
    },]);

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
            <Item
                item={item}
                onPress={() => navigationToAtrativo(item)}

            />
        );
    };


    return(

        <View style={styles.container}>
            

            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.topButton}>
                    
                    <Icon name="menu" size={35} color='#FFF' />
                
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




                <FlatList contentContainerStyle={styles.atrativosContainer}
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

            




        </View>
    );

}