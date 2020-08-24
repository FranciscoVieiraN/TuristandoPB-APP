import React, { useState, useEffect, useRef, createRef } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Animated,
} from 'react-native';
import styles from './style';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';






export default function Login() {
    const navigation = useNavigation();

    function navigationToHome() {
        navigation.navigate('DrawerPages')
    }

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 10 }));
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {

        Animated.parallel([

            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20,
                useNativeDriver: false
            }),

            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false
            })

        ]).start();

    }, []);


    

    return (

        <ImageBackground source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F2355%2F2133595102_8f2a6ce6cd_b.jpg&f=1&nofb=1'}}
                style={{ height: '100%', width: '100%' }}
            >
        <View style={styles.container}>

            <StatusBar hidden />

            


            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.menuButtom} onPress={() => navigation.goBack()}>
                    <Icon2 name="arrow-left" size={35} color='#FFF' />
                </TouchableOpacity>
                <Text style={styles.titulo}>Login</Text>
            </View>

                <Animated.View style={[
                    styles.LoginComponetesContainer,
                    {
                        opacity: opacity,
                        transform: [
                            { translateY: offset.y }
                        ]
                    }
                ]}
                >

                    <TextInput
                        style={styles.input}
                        placeholder="Email..."
                        returnKeyType="next"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        autoCorret={false}
                        onChangeText={() => { }} />

                    <TextInput
                        style={styles.input}
                        placeholder="Senha..."
                        textContentType="password"
                        returnKeyType="go"
                        autoCorret={false}
                        secureTextEntry={true}

                        onChangeText={() => { }} />

                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.buttomEsqueciSenha}>
                            Esqueceu a senha?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttomLogin} onPress={() => navigationToHome()}>
                        
                        <Text style={styles.loginText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttomLoginFBGG} onPress={() => navigationToHome()}>
                        <View style={styles.fbLoginIcon}>
                            <Icon name='facebook' color={'#fff'} size={25}/>
                        </View>
                        <Text style={styles.fbGGloginText}>
                            Entrar com o Facebook
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttomLoginFBGG} onPress={() => navigationToHome()}>
                        <View style={styles.ggLoginIcon}>
                        <Icon name='google' color={'#fff'} size={25}/>
                        </View>

                        <Text style={styles.fbGGloginText}>
                            Entrar com o Google
                        </Text>
                    </TouchableOpacity>

                </Animated.View>

                <Image source={require('../../../assets/images/cropped-logo_slogan-1.png')} style={{width: 150, height: 60}}/>


        </View>
        </ImageBackground>
    );

}
