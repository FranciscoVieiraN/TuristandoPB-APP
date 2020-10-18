import * as React from 'react';
import { View, 
    Text, 
    Image, 
    KeyboardAvoidingView, 
    TouchableOpacity, 
    BackHandler} from 'react-native';
import styles from './style';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'




export default function Cadastro(){
    const navigation = useNavigation();
    const [emailRef, setEmailRef] = React.useState(null);
    const [passwordRef, setPasswordRef] = React.useState(null);

    const [usrName, setUsrName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleBackButtonClick = () => {
        navigation.goBack(null);
        return true;
    }

    function navigationToLogin(){
        navigation.pop()
        navigation.navigate('Login')
    }

    React.useEffect(()=>{
        return setEmail(''), 
        setUsrName(''), 
        setPassword(''); 
    })

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

                <View style={styles.dadosUsuarioContainer}>
                    <TextInput style={styles.input} 
                    placeholder="Nome de usuario"
                    returnKeyType='next'
                    inlineImageLeft='search_icon'
                    autoCorret={false} 
                    onChangeText={(text)=>{setUsrName(text)}}
                    blurOnSubmit={false}
                    onSubmitEditing={() => emailRef.focus()}/>

                    <TextInput
                    ref={el => setEmailRef(el)}
                    style={styles.input} 
                    placeholder="Email"
                    returnKeyType='next'
                    autoCorret={false} 
                    onChangeText={(text)=>{setEmail(text)}}
                    onSubmitEditing={() => passwordRef.focus()}/>

                    <TextInput
                    ref={el => setPasswordRef(el)}
                    style={styles.input} 
                    placeholder="Senha"
                    autoCorret={false}
                    secureTextEntry={true} 
                    onChangeText={(text)=>{setPassword(text)}}/>

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