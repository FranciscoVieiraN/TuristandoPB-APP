import * as React from 'react';
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styles from './style';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'




export default function Cadastro(){
    const navigation = useNavigation();

    function navigationToLogin(){
        navigation.navigate('Login')
    }

    return(
        <View  style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.menuButtom} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={35} color='#1E90FF' />
                </TouchableOpacity>
                <Text style={styles.titulo}>Cadastro</Text>
            </View>

            <View style={styles.conteudoContainer}>

                <View style={styles.fotoUsuarioContainer}>

                    <Text style={styles.fotoUsuarioCabecalho}>
                        Foto
                    </Text>

                <TouchableOpacity onPress={()=>{}} style={styles.fotoUsuario}>

                    <Image source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fgray%2Fuser-4-xxl.png&f=1&nofb=1'}} style={{width: '100%', height: '100%', borderRadius: 100}} />
                    
                </TouchableOpacity>

                </View>

                <View style={styles.dadosUsuarioContainer}>
                    <TextInput style={styles.input} 
                    placeholder="Nome de usuario" 
                    autoCorret={false} 
                    onChangeText={()=>{}}
                    blurOnSubmit={false}/>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Email" 
                    autoCorret={false} 
                    onChangeText={()=>{}}/>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Senha" 
                    autoCorret={false}
                    secureTextEntry={true} 
                    onChangeText={()=>{}}/>

                    <TextInput 
                    style={styles.input} 
                    placeholder="Repetir senha" 
                    autoCorret={false}
                    secureTextEntry={true} 
                    onChangeText={()=>{}}/>

            </View>

            <TouchableOpacity style={styles.btnSubmit} onPress={()=> navigationToLogin()}>
                        <Text style={styles.textSubmit}>
                            Concluir
                        </Text>
            </TouchableOpacity>

            </View>
            </ScrollView>
            </View>
    );

}