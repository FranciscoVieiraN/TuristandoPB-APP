import * as React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    ScrollView, 
    FlatList, 
    Dimensions,
    Modal,
    Alert,
    Platform} from 'react-native';
import styles from './style';
import  Icons  from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native'
import SearchBar from 'react-native-search-bar';
import colors from '../../styles/colors';
import { LittleCard } from '../../components/Little_Card';
import { FilterButton } from '../../components/Filter_Button';
import { SliderPicker } from 'react-native-slider-picker';

import Autocomplete from 'react-native-autocomplete-input';




export default function Atrativos(){

    const navigation = useNavigation();

    function navigateToAtrativo(atrativo){
        navigation.navigate('Atrativo', {atrativo});
    };

    function navigationToRoteiroCidades(){
        navigation.navigate('Roteiro_cidades')
    };

    function navigationToHome(){
        navigation.navigate('Home')
    };

    const [modalVisible, setModalVisible] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [filteredAtrativos, setFilteresAtrativos] = React.useState([]);
    const placeholder = 'Perto do atrativo...';
    const [distancia, setDistancia] = React.useState(500);
    const [filter, setFilter] = React.useState('todos');  
    const [loading ,setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([{
        id: "1",
        title: "Farol de Cabo Branco",
        endereco: "João Pessoa, PB",
        tipo: "Atrativos histórico/culturais",
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
        tipo: "Atrativos histórico/culturais",
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
        tipo: "Atrativos histórico/culturais",
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
            tipo: "Atrativos histórico/culturais",
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
            tipo: "Atrativos histórico/culturais",
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
            tipo: "Atrativos histórico/culturais",
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
            <LittleCard
                item={item}
                onPress={() => navigateToAtrativo(item)}

            />
        );
    };

    const filterButton = (text) => {
        let newData = [...arrayholder];

        if (text.toLowerCase() === 'todos'){
            newData = arrayholder;
        } else if (text.toLowerCase() === 'atrativos naturais') {
            newData = arrayholder.filter(item => (item.tipo.toLowerCase() == 'atrativos naturais'));
        } else if (text.toLowerCase() == 'atrativos histórico/culturais') {
            newData = arrayholder.filter(item => (item.tipo.toLowerCase() === 'atrativos histórico/culturais'));
        }
        setData(newData);
    };
    
    const searchFilterFunction = text => {    
        const newData = arrayholder.filter(item => {      
            const itemData = `${item.title.toUpperCase()}
            ${item.endereco.toUpperCase()}`;
            const textData = text.toUpperCase();
            
            return itemData.indexOf(textData) > -1;    
        });
        
        setData(newData);
        setFilteresAtrativos(newData);  
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
                            
                            Atrativos
                    
                        </Text>

                        <Icons name='beach-access' color={'white'} size={25}/>
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

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(!modalVisible)}
                    >
                        <View 
                            style={{
                            flex: 1, 
                            justifyContent: "center", 
                            alignItems: "center", 
                            backgroundColor: 'rgba(0,0,0,0.6)'}}
                        >
                            <View style={{
                                margin: 20,
                                backgroundColor: "white",
                                borderRadius: 20,
                                padding: 35,
                                alignItems: "center",
                                width: '95%'
                                }}>
                                <View style={styles.autocompleteContainer}>
                                    <Autocomplete
                                    //editable={!isLoading}
                                    autoCorrect={false}
                                    data={filteredAtrativos}
                                    defaultValue={query}
                                    onChangeText={(text) => searchFilterFunction(text)}
                                    placeholder={placeholder}
                                    style={{backgroundColor: '#3EA7EF', height:45,width:250, marginLeft: 25}}
                                    placeholderTextColor={'#FFF'}
                                    containerStyle={{backgroundColor: '#ffffff', borderWidth:0}}
                                    inputContainerStyle={{backgroundColor: '#3EA7EF', borderRadius:10}}
                                    flatListProps={{
                                        keyExtractor: item => item.id,
                                        renderItem: ({item}) => (
                                        <TouchableOpacity 
                                            onPress={() => {
                                            setQuery(item.title);
                                            setFilteresAtrativos([])}}>
                                            <Text style={styles.itemText}>{item.title}</Text>
                                        </TouchableOpacity>
                                        ),
                                    }}
                                    />
                                </View>
                                
                                <SliderPicker 
                                minLabel={'0 KM'}
                                midLabel={'500 KM'}
                                maxLabel={'1000 KM'}
                                maxValue={500}
                                defaultValue={distancia}
                                showFill={true}
                                callback={position => setDistancia(position)}
                                labelFontSize={15}
                                fillColor={'#3EA7EF'}
                                buttonBackgroundColor={'#3EA7EF'}
                                buttonBorderColor={"#3EA7EF"}
                                buttonDimensionsPercentage={3}
                                />
                                <View style={{width: '115%',alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 15 }}>
                                    <Text>0KM</Text>
                                    <Text>500KM</Text>
                                    <Text>1000KM</Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: colors.main, 
                                        borderRadius: 20, 
                                        width: "60%", 
                                        alignItems: "center", 
                                        justifyContent: "center"}}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={{margin: 8, color: "white", fontSize: 18, fontWeight: "400"}}>Filtrar</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </Modal>

                    
                </View>

                <View style={{ marginTop: -15, marginHorizontal: 20,marginBottom: 5, width: '100%'}}>
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
                        onPress={() => setModalVisible(!modalVisible)}
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


                
                    <View style={styles.conteudoContainer}>

                        

                        <View style={{
                            paddingHorizontal: 24, 
                            width: '100%'}}>

                            <Text style={styles.cabecalhoII}>
                                Resultados...
                            </Text>

                        </View>

                        
                        
                        <FlatList
                        contentContainerStyle={{padding: 20,}}
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
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