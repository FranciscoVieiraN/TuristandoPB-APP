import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {Cards} from '../../components/Cards'





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

    const cidade = route.params.cidade;

    function navigateGoBack(){
        navigation.goBack();
    }

    function navigationToAtrativo(atrativo){
        navigation.navigate('Atrativo', {atrativo})
    }

    const renderItem = ({ item }) => {
        return (
            <Cards
                item={item}
                onPress={() => navigationToAtrativo(item)}

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

        <ScrollView>

            <View style={styles.imagemContainer}>
                <Swiper inde={0}  dotColor={'#fff'} loop={true}>
                    {cidade.images.map(imagem =>(
                        <Image key={imagem.id} style={styles.imagem} source={{uri: imagem.url}}/>
                    ))}
                </Swiper>

                <TouchableOpacity
                style={styles.topContainer}
                onPress={()=>navigation.goBack()}>
                    <Icon name='arrow-left' color={'#0D47A1'} size={45}/>
                </TouchableOpacity>
                
            </View>
            
            <View style={styles.detalhesContainer}>

                <View>
                    <Text>
                        <Text style={styles.nomeCidade}>
                            {cidade.title} {'\n'}
                        </Text>

                        <Text style={styles.enderecoCidade}>
                            {cidade.endereco}
                        </Text>
                    </Text>
                </View>

                
            </View>

            <View style={styles.descricaoContainer}> 
                <Text style={styles.cabecalho}>Descrição</Text>
                <Text style={styles.descricao}>{cidade.descricao}</Text>
            </View>

            <View style={styles.atrativosContainer}>

                    <Text style={styles.cabecalhoII}>
                                Atrativos
                    </Text>




                    <FlatList contentContainerStyle={{padding: 10,}}
                            data={data}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                            ItemSeparatorComponent={listSeparetor}
                    />
                    

                </View>



                



            







        </ScrollView>

        

        </View>


    );
}