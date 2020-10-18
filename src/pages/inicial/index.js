import * as React from 'react';
import { 
    View, 
    Text, 
    Image, 
    ImageBackground, 
    StatusBar} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native'



export default function Inicial(){
    const navigation = useNavigation();

    function navigationToHome(){
        navigation.navigate('Home')
    }

    React.useEffect(()=>{
        setTimeout(navigationToHome(), 5000);
    },[])

    return(
    
        
        
            <ImageBackground 
                source={
                {uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F2355%2F2133595102_8f2a6ce6cd_b.jpg&f=1&nofb=1'}
                }
                style={{width: '100%', height: '100%'}}>

                    <StatusBar hidden/>

                    <View style={styles.container}>

                        <View style={styles.logoContainer}>
                                        <Image source={require("../../../assets/logos/logo-turistando.png")} 
                                        style={styles.logo}/>

                            <Text style={styles.name}>TuristandoPB</Text>
                            
                        </View>

                        <View style={styles.textContainer}>
                                <Text style={styles.descricaoText}>
                                    O app para quem ama turistar!
                                </Text>
                        </View>



                        <View style={styles.apps4SocietyLogo}>
                            <Text style={{
                                fontFamily: 'Roboto-Bold',
                                fontSize: 25,
                                color: '#d3d3d3'}}>
                                from
                            </Text>

                            <Image 
                            source={require('../../../assets/images/cropped-logo_slogan-1.png')} 
                            style={{width: 150, height: 60}}/>
                        </View>


                    </View>



            </ImageBackground>

            

    );

}
