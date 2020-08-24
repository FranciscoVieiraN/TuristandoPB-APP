import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';




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

export default function Cidade(){

    const navigation = useNavigation();
    const route = useRoute();
    const data = [{
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
    },];

    let cidade = route.params.cidade;

    function navigateGoBack(){
        navigation.goBack();
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

        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigateGoBack()} style={styles.topButton}>
                    <Icon name="arrow-left" size={35} color='#1E90FF' />
                </TouchableOpacity>

                <Text style={styles.titulo}>Roteiro</Text>
            </View>

            <View style={styles.imagemContainer}>
                <Swiper showsButtons buttonWrapperStyle={{color: '#fff'}}  dotColor={'#fff'} loop={false}>
                    {cidade.images.map(imagem =>(
                        <Image key={imagem.id} style={styles.imagem} source={{uri: imagem.url}}/>
                    ))}
                </Swiper>
            </View>
            
            <View style={styles.detalhesContainer}>

                <View>
                    <Text>
                        <Text style={styles.nomeCidade}>
                            {cidade.title} {"\n"}
                        </Text>

                        <Text style={styles.enderecoCidade}>
                            {cidade.endereco} {"\n"}
                        </Text>
                    </Text>
                </View>

                <View style={styles.buttonsNavigationContainer}>

                    
                    <TouchableOpacity style={styles.inciarButtom}>
                            <Icon name="play" size={40} style={styles.iniciarIcon}/>
                            <Text style={{fontSize: 20}}>
                                Iniciar
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.verNoMapaButtom}>
                            <Icon name="map" size={30}/>
                            <Text style={{fontSize: 20, marginLeft: 10}}>
                                Ver no mapa
                            </Text>
                    </TouchableOpacity>

            </View>
            </View>

            <View style={styles.descricaoContainer}> 
                <Text style={styles.cabecalho}>Descrição</Text>
                <Text style={styles.descricao}>{cidade.descricao}</Text>
            </View>

            <View style={styles.descricaoContainer}>

                <Text style={styles.cabecalho}>Atrativos</Text>

                <FlatList contentContainerStyle={styles.atrativosContainer}
                            data={data}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                />

            </View>



                



            







        </ScrollView>

        </View>


    );
}