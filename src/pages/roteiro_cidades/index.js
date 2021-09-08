import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Route, ImageBackground } from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  Icons  from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import SearchBar from 'react-native-search-bar'


const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.buttomCidade}>
        <ImageBackground source={{uri: item.images[0].url}} style={styles.cidadeImg}
        imageStyle={{borderRadius: 10,}}>
            <View style={styles.nomeCidadeContainer} >
                <Text style={styles.nomeCidadeText} numberOfLines={1} >{item.title}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
);

export default function Roteiro_cidades(){

    const navigation = useNavigation();
    const route = useRoute();
    //const idItem = route.params.id;
    const [data, setData] = React.useState([{
        id: "1",
        title: "João Pessoa",
        endereco: "Paraíba, Brasil",
        descricao: 'blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla',
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
        ]
    },
    {
        id: "2",
        title: "Campina Grande",
        endereco: "Paraíba, Brasil",
        descricao: 'blablablablablablablablablablablablablablablablablablablablablablablablablablablabla',
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
        ]
    },
    {
        id: "3",
        title: "Bayeux",
        endereco: "Paraíba, Brasil",
        descricao: 'blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla',
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
        ]
    },])

    const arrayholder = [
        
        {
            id: "1",
            title: "João Pessoa",
            endereco: "Paraíba, Brasil",
            descricao: 'blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla',
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
            ]
        },
        {
            id: "2",
            title: "Campina Grande",
            endereco: "Paraíba, Brasil",
            descricao: 'blablablablablablablablablablablablablablablablablablablablablablablablablablablabla',
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
            ]
        },
        {
            id: "3",
            title: "Bayeux",
            endereco: "Paraíba, Brasil",
            descricao: 'blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla',
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
            ]
        },
    ];
    

    const searchFilterFunction = text => {    
        const newData = arrayholder.filter(item => {      
            const itemData = `${item.title.toUpperCase()}`;
            const textData = text.toUpperCase();
            
            return itemData.indexOf(textData) > -1;    
        });
        
        setData(newData);  
      };


    function navigateToCidade(cidade){
        navigation.navigate('Cidade', { cidade});
        //navigation.navigate('Cidade', {idItem, cidade});
    }

    function navigationToAtrativos(){
        navigation.navigate('Atrativos')
    }

    function navigationToHome(){
        navigation.navigate('Home')
    }

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => navigateToCidade(item)}

            />
        );
    };

    const listSeparetor = () => {
        return(
            <View style={{width: 20,}}></View>
        )
        
    }

    return(

        <View style={styles.container}>
             <View style={styles.topContainer}>

                <TouchableOpacity 
                    onPress={()=>navigationToRoteiroCidades()}  
                    style={styles.optionButtonContainer}>
                        
                    <Text 
                    style={{fontSize: 20,
                    color: '#fff',
                    fontFamily: 'Recursive-ExtraBold'}}>
                            
                        Cidades
                    
                    </Text>

                    <Icons name='location-city' color={'white'} size={25}/>
                </TouchableOpacity>

            </View>

            <Text style={styles.titleII} >Sugestões...</Text>

            <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: '#1C4491',
                    borderRadius: 10,
                    marginBottom: 10,
                    padding: 2,
                    width: '90%',
                    margin: 5}}>

                <SearchBar        
                placeholder="Para onde você quer ir?"
                textColor={'white'}
                lightTheme        
                round        
                onChangeText={text => searchFilterFunction(text)}
                autoCorrect={false}
                style={{width: '100%', height: 45, borderRadius: 10}}
                />
            </View>

            <View style={styles.buttonsContainer}>
                

            <FlatList contentContainerStyle={styles.opcoesCidadeContainer}
                        data={data}
                        Vertical
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        ListEmptyComponent={() => (
                            <Text style={{fontSize: 15, color: 'gray'}}>
                                Nenhuma cidade encontrada
                            </Text>
                        )}
                        numColumns={2}
                />

            </View>
            
        </View>
    );
}