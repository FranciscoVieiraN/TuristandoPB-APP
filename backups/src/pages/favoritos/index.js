import * as React from 'react';import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'
import SearchBar from 'react-native-search-bar';



const Item = ({ item, onPress}) => (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.atrativoButtom}>
        <Image 
        source={{uri: item.images[0].url}}
        style={styles.atrativoFotoContainer}/>
        
        <View style={styles.atrativoDetalhe}>
            <View>
                <Text numberOfLines={1} style={{fontWeight: 'bold',
                            fontSize: 17}}>
                    {item.title}
                </Text>

                <Text numberOfLines={1}>
                    {item.endereco}
                </Text>
            </View>
        
            <TouchableOpacity>
                <Icon name="heart-outline" size={30}/>
            </TouchableOpacity>

        </View>    
    </TouchableOpacity>
);

export default function Favoritos(){

    const navigation = useNavigation();
    
    const [loading ,setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
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
        latitude:-7.1482329,
        longitude:-34.8003526,
    },]);    

    const arrayholder = [
        {
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
            latitude:-7.1482329,
            longitude:-34.8003526,
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => navigateToCidade(item)}

            />
        );
    };

    const searchFilterFunction = text => {    
        const newData = arrayholder.filter(item => {      
            const itemData = `${item.title.toUpperCase()}`;
            const textData = text.toUpperCase();
            
            return itemData.indexOf(textData) > -1;    
        });
        
        setData(newData);  
      };






    return(

        <View style={styles.container}>  

            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.menuButtom} onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" size={35} color='#1E90FF' />
                </TouchableOpacity>
                <Text style={styles.titulo}>Favoritos</Text>
            </View>

            <SearchBar        
            placeholder="Type Here..."
            textColor={'black'}        
            lightTheme        
            round        
            onChangeText={text => searchFilterFunction(text)}
            autoCorrect={false}
            style={{width: '100%', height: 50, marginBottom: 20,}}           
          />


                <FlatList contentContainerStyle={styles.atrativosContainer}
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        ListEmptyComponent={() => (
                            <Text style={{fontSize: 15, color: 'gray'}}>
                                Nenhum atrativo encontrado
                            </Text>
                        )}
                />
                                 
        

        </View>
    )}