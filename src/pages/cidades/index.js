import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Route, ImageBackground } from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  Icons  from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import SearchBar from 'react-native-search-bar'
import { LittleCard } from '../../components/Little_Card';
import colors from '../../styles/colors';


/* const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.buttomCidade}>
        <ImageBackground source={{uri: item.images[0].url}} style={styles.cidadeImg}
        imageStyle={{borderRadius: 10,}}>
            <View style={styles.nomeCidadeContainer} >
                <Text style={styles.nomeCidadeText} numberOfLines={1} >{item.title}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
); */

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

   /*  const filterButton = (text) => {
        let newData = [...arrayholder];

        if (text.toLowerCase() === 'todos'){
            newData = arrayholder;
        } else if (text.toLowerCase() === 'atrativos naturais') {
            newData = arrayholder.filter(item => (item.tipo.toLowerCase() == 'atrativos naturais'));
        } else if (text.toLowerCase() == 'atrativos histórico/culturais') {
            newData = arrayholder.filter(item => (item.tipo.toLowerCase() === 'atrativos histórico/culturais'));
        }
        setData(newData);
    }; */
    

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
            <LittleCard
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

                <View   
                    style={styles.optionButtonContainer}>
                        
                    <Text 
                    style={{fontSize: 20,
                    color: '#fff',
                    fontFamily: 'Recursive-ExtraBold'}}>
                            
                        Cidades
                    
                    </Text>

                    <Icons name='location-city' color={'white'} size={25}/>
                </View>
                <View style={{
                        backgroundColor: colors.main,
                        borderRadius: 10,
                        marginBottom: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        width: '100%',
                        height: 45,
                        margin: 5}}>

                            <SearchBar        
                            placeholder="Para onde você quer ir?"
                            textFieldBackgroundColor={colors.main}
                            textColor={'white'}
                            lightTheme
                            round        
                            onChangeText={text => searchFilterFunction(text)}
                            autoCorrect={false}
                            style={{width: '93%', height: 45}}
                            />

                    </View>

            </View>

            <View style={{ marginTop: -15, marginHorizontal: 20,marginBottom: 5, width: '100%', alignItems: 'center'}}>
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{width: '90%', height: 50, backgroundColor: '#fff'}}>
                        <TouchableOpacity
                        onPress={() => filterButton('todos')} 
                        style={{
                            marginRight: 8,
                            borderWidth: 2,
                            borderColor: colors.main,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, 
                            backgroundColor: '#fff'}}
                            >
                            <Text style={{fontSize: 18, fontWeight: '500', color: colors.main, margin: 8}}>
                                Todos
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={() => setModalVisible(true)}
                        style={{
                            marginRight: 8,
                            borderWidth: 2,
                            borderColor: colors.main,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, 
                            backgroundColor: '#fff'}}
                            >
                            <Text style={{fontSize: 18, fontWeight: '500', color: colors.main, margin: 8}}>
                                Perto de...
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={() => filterButton('atrativos naturais')}
                        style={{
                            marginRight: 8,
                            borderWidth: 2,
                            borderColor: colors.main,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, 
                            backgroundColor: '#fff'}}
                            >
                            <Text style={{fontSize: 18, fontWeight: '500', color: colors.main, margin: 8}}>
                                Atrativos naturais
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={() => filterButton('atrativos histórico/culturais')}
                        style={{
                            marginRight: 8,
                            borderWidth: 2,
                            borderColor: colors.main,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, 
                            backgroundColor: '#fff'}}
                            >
                            <Text style={{fontSize: 18, fontWeight: '500', color: colors.main, margin: 8}}>
                                Atrativos histórico/culturais
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            <Text style={styles.titleII} >Resultados...</Text>

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
                        ItemSeparatorComponent={listSeparetor}
                />

            </View>
            
        </View>
    );
}