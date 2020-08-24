import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Route, ImageBackground } from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
    const idItem = route.params.id;
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
        navigation.navigate('Cidade', {idItem, cidade});
    }

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => navigateToCidade(item)}

            />
        );
    };

    return(

        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon name="arrow-left" size={35} color='#1E90FF'/>
                </TouchableOpacity>
                <Text style={styles.titulo}>Roteiro</Text>
            </View>

            <SearchBar
            placeholder="Type Here..."
            textColor={'black'}        
            lightTheme        
            round  
            onChangeText={text => searchFilterFunction(text)}
            autoCorrect={false}
            style={{width: '90%', height: 50, marginBottom: 20,}}           
          />

            <Text style={styles.cabecalho} >Cidades</Text>

            <View style={styles.buttonsContainer}>

            <FlatList contentContainerStyle={styles.opcoesCidadeContainer}
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        ListEmptyComponent={() => (
                            <Text style={{fontSize: 15, color: 'gray'}}>
                                Nenhuma cidade encontrada
                            </Text>
                        )}
                />

            </View>
            
 
 
 
        </View>


    );

}