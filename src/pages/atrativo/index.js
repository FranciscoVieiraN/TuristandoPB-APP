import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import colors from '../../styles/colors';

export default function Atrativo(){

    const navigation = useNavigation();

    const route = useRoute()

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
            </View>

                <View style={styles.detalhesContainer}>               
                    <View>
                        <Text style={styles.nomeAtrativo}>
                            {atrativo.title}
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 20 }}>
                            <Icon name='explore' color='#3EA7EF' size={25} style={{marginRight: 20}} />
                            <Text style={styles.enderecoAtrativo}>
                                {atrativo.endereco}
                            </Text>
                        </View>
    
                    </View>
                    
                    <View style={styles.buttonsContainer}>

                    <TouchableOpacity 
                    onPress={() => navigateToMap(atrativo)}
                    style={styles.verNoMapaButtom}>
                    <View  
                    style={{
                        height: '100%', 
                        width: 65, 
                        borderRadius: 10,
                        backgroundColor: '#F5F5F5',
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                            
                            <Image source={require("../../../assets/icons/Maps-icon.png")}
                                style={{resizeMode: "contain",width: 25, height: 25}} />
                    </View>

                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"}}>

                            <Text style={{
                                fontFamily: 'Roboto-Bold', 
                                fontSize: 18, color: '#fff', 
                                marginLeft: 20,
                                marginRight: 20}}>

                                Ver no mapa
                            </Text>


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
                            fontSize: 19, 
                            fontWeight: "bold",
                            color: colors.main}}>

                            {atrativo.telefone}
                        </Text>
                    </View>


                    <Text style={{fontSize: 19, marginBottom: 10}}>
                        <Text style={{fontWeight: "bold", color: colors.main}}>
                            Aberto:
                        </Text>
                        <Text style={{color: colors.main}}>
                           {atrativo.horarios}
                        </Text>
                        

                    </Text>

                    <Text style={{fontSize: 19, marginBottom: 10, color: colors.main}}>

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