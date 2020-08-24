import * as React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    ScrollView, 
    FlatList, 
    Dimensions} from 'react-native';
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

                <View style={{
                    flexDirection: "row", 
                    width: '100%', 
                    justifyContent: "space-between", 
                    alignItems: "center",}}>

                <Text numberOfLines={1} style={{
                    fontFamily: 'Recursive-Black',
                    fontSize: 20,
                    marginBottom: 10,
                    borderBottomWidth: 2,
                    borderColor: "#fff",
                    color: '#fff',}}>

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

export default function Atrativos(){

    const navigation = useNavigation();

    function navigateToAtrativo(atrativo){
        navigation.navigate('Atrativo', {atrativo});
    };
    
    const [loading ,setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const { width } = Dimensions.get('window');

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
        descricao: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
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
    },])    

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
                onPress={() => navigateToAtrativo(item)}

            />
        );
    };

    const searchFilterFunction = text => {    
        const newData = arrayholder.filter(item => {      
            const itemData = `${item.title.toUpperCase()}
            ${item.endereco.toUpperCase()}`;
            const textData = text.toUpperCase();
            
            return itemData.indexOf(textData) > -1;    
        });
        
        setData(newData);  
      };






    return(

        <View style={styles.container}>

            <ScrollView
            showsVerticalScrollIndicator={false}>

                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="menu" size={35} color='#1E90FF' />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Atrativos</Text>
                </View>

                <View style={{
                    backgroundColor: 'lightgray',
                    borderRadius: 20,
                    padding: 2,
                    width: '98%',
                    margin: 5}}>

                <SearchBar        
                placeholder="Atrativo/Região..."
                textColor={'black'}
                lightTheme        
                round        
                onChangeText={text => searchFilterFunction(text)}
                autoCorrect={false}
                style={{width: '100%', height: 40, borderRadius: 10,}}
                />

                </View>

                
                    <View style={styles.conteudoContainer}>

                        <Text style={styles.cabecalhoII}>
                                    O que você gostaria de visitar hoje? 
                                
                        </Text>

                        <FlatList 
                        contentContainerStyle={styles.atrativosContainer}
                        data={data}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        ListEmptyComponent={() => (
                            <Text style={{fontSize: 15, 
                            color: 'gray', 
                            fontFamily: 'Recursive-ExtraBold'}}>
                                Nenhum atrativo encontrado
                            </Text>
                        )}
                        numColumns={2}
                        />
                        

                    </View>

                </ScrollView>
                                 
        

        </View>





    );

}