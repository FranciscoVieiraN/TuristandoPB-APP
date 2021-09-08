import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

export default function Atrativo(){

    const navigation = useNavigation();

    const route = useRoute();

    function navigateGoBack(){
        navigation.goBack();
    }

    function navigateToMap(atrativo){
        navigation.navigate('Map', {atrativo})
    }

    const atrativo = route.params.atrativo;


    return(

        <View style={styles.container}>

            <ScrollView >


            <View style={styles.imagemContainer}>
                <Swiper inde={0} dotColor={'#fff'} loop={true}>
                    {atrativo.images.map(imagem => (
                        <Image key={imagem.id} 
                        style={styles.imagem} 
                        source={{uri: imagem.url}}/>
                    ))}
                </Swiper>

                <TouchableOpacity
                style={styles.topContainer} 
                onPress={() => navigateGoBack()}>
                    <Icon name="arrow-left" size={45} color='#0D47A1' />
                </TouchableOpacity>
            </View>


                <View style={styles.detalhesContainer}>               
                    <View>
                        <Text style={styles.nomeAtrativo}>
                            {atrativo.title}
                        </Text>

                        <Text style={styles.enderecoAtrativo}>
                            {atrativo.endereco}
                        </Text>
                    </View>
                    
                    <View style={styles.buttonsContainer}>

                    <TouchableOpacity 
                    onPress={() => navigateToMap(atrativo)}
                    style={styles.verNoMapaButtom}>
                    <Image source={{
                        uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.ibxk.com.br%2F2019%2F05%2F30%2F30151300199196.jpg&f=1&nofb=1' }} 
                        style={{
                            height: '100%', 
                            width: 90, 
                            borderTopLeftRadius: 10, 
                            borderBottomLeftRadius: 10}}/>

                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"}}>

                            <Text style={{
                                fontFamily: 'Roboto-Bold', 
                                fontSize: 20, color: '#fff', 
                                marginLeft: 20,
                                marginRight: 20}}>

                                Ver no mapa
                            </Text>

                            <Icon name='enviroment' size={25} color={'#fff'}/>



                        </View>

                    </TouchableOpacity>
                    
                    </View>
               
                </View>

                


                <View style={styles.descricaoContainer}>

                    <Text style={styles.cabecalho}>
                        Descrição
                    </Text>

                    <Text style={styles.descricao}>
                        {atrativo.descricao}
                    </Text>


                </View>


                <View style={styles.informacoesContainer}>
                    <View style={styles.telefoneContainer}>
                        <Text style={{
                            marginHorizontal: 10, 
                            fontSize: 19, 
                            fontWeight: "bold"}}>

                            {atrativo.telefone}
                        </Text>
                    </View>


                    <Text style={{fontSize: 19, marginBottom: 10}}>
                        <Text style={{fontWeight: "bold"}}>
                            Aberto:
                        </Text>
                        <Text style={{color: 'black'}}>
                           {atrativo.horarios}
                        </Text>
                        

                    </Text>

                    <Text style={{fontSize: 19, marginBottom: 10}}>

                        <Text style={{fontWeight: "bold"}}>
                            Custo:
                        </Text>
                        <Text>
                            Grátis
                        </Text>
                    
                    </Text>

                    


                </View>

                







            </ScrollView>

        </View>






    );
}