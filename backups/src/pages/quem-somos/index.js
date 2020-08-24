import * as React from 'react'; import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'

export default function QuemSomos() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={35} color='#1E90FF' />
                </TouchableOpacity>
                <Text style={styles.titulo}>Quem somos</Text>
            </View>

            <ScrollView>

                <View style={styles.conteudoContainer}>

                    <Image source={require('../../../assets/images/cropped-logo_slogan-1.png')} style={{width: 300, height: 90}}/>

                    <Text style={styles.textoContainer}>

                        Este projeto tem como objetivo principal estimular o desenvolvimento de aplicativos que possam impactar positivamente a sociedade. Alguns destes aplicativos podem ter fins educacionais, como apoiar na alfabetização de crianças, jovens e adultos, e outros podem auxiliar na disseminação de informações sobre determinados territórios, visando a valorização de riquezas naturais e culturais muitas vezes desconhecidas até pelos que residem naquela região. Para que isso seja possível, tanto é necessário um estudo sobre as tecnologias para proporcionar esse desenvolvimento, quanto a interação com os agentes sociais que seriam beneficiados por tais inovações e os que poderiam fornecer os requisitos necessários para tais aplicativos, como professores diretamente envolvidos com alfabetização e pessoas que fazem parte de secretarias de educação e turismo de Rio Tinto e de outros municípios do estado (como os do Geoparque Cariri Paraibano). Durante esse processo, pretende-se aprimorar nos estudantes participantes a habilidade de levantar requisitos, analisá-los, projetar sistemas, desenvolvê-los, testá-los e entregá-los à sociedade, avaliando os impactos desses sistemas e formas de construí-los seguindo princípios da Engenharia de Software, de modo a permitir a construção de maneira ágil de outros sistemas semelhantes e que possam beneficiar ainda mais regiões e pessoas.

                        Temos também realizado ações visando a construção de aplicativos para impactar a sociedade junto a alunos da educação básica.

                        Desde 2018 vem sendo desenvolvido como projeto Probex da UFPB, envolvendo professores e alunos dos cursos de Licenciatura em Ciência da Computação, Sistemas de Informação e Design.

                        Sigam-nos no Instagram: @apps4society



                    </Text>


                </View>

            </ScrollView>

            



        </View>



    );


}