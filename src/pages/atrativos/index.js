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
import {Cards} from '../../components/Cards'




export default function Atrativos(){

    const navigation = useNavigation();

    function navigateToAtrativo(atrativo){
        navigation.navigate('Atrativo', {atrativo});
    };
    
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
            <Cards
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

      const listSeparetor = () => {
        return(
            <View style={{height: 20,}}></View>
        )
        
    }
      






    return(

        <View style={styles.container}>

                <View style={styles.topContainer}>

                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}>
                        <Icon name='arrow-left' color={'#0D47A1'} size={45}/>
                    </TouchableOpacity>
                    
                </View>

                <View style={{
                            paddingHorizontal: 20, 
                            width: '100%'}}>

                            <Text style={styles.cabecalhoII}>
                                        O que você gostaria de visitar hoje? 
                                    
                            </Text>

                </View>

                
                    <View style={styles.conteudoContainer}>

                        <View style={{
                        backgroundColor: 'lightgray',
                        borderRadius: 20,
                        marginBottom: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        width: '90%',
                        margin: 5}}>

                            <SearchBar        
                            placeholder="Pesquisar atrativo..."
                            textColor={'black'}
                            lightTheme        
                            round        
                            onChangeText={text => searchFilterFunction(text)}
                            autoCorrect={false}
                            style={{width: '100%', height: 40, borderRadius: 10,}}
                            />

                        </View>

                        
                        
                        <FlatList
                        contentContainerStyle={{padding: 20,}}
                        data={data}
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
                        ItemSeparatorComponent={listSeparetor}
                        />
                        

                    </View>

                
                                 
        

        </View>





    );

}