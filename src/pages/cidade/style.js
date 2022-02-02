import {StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export default StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: '#fff',
    },

    scrollContainer:{
        justifyContent: 'flex-start',
        alignItems: "center",
        width: '100%'
    },

    
    topContainer: {
        position: "absolute",
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: 60,
        height: 60,
        left: 20,
        top: 30,
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
        bottom: 30,
        borderRadius: 10,

    },

    titulo: {
        fontSize: 25,
        fontFamily: 'Roboto-Bold',
        color: '#FFF',
        marginLeft: 40,
    },

    imagem:{
        width: '100%',
        height: '100%',
        borderBottomLeftRadius:10,
        borderBottomRightRadius: 10,
    },

    imagemContainer:{
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        width: '100%',
        
    },

    detalhesContainer:{
        padding: 10,
        backgroundColor: '#fff',
    },

    nomeCidade:{
        fontSize: 25,
        fontFamily: 'Recursive-Black',
        color: colors.main
    },

    enderecoCidade:{
        fontSize: 20,
        marginBottom: 10,
        fontFamily: 'Recursive-Black',
        color: colors.main
    },

    buttonsNavigationContainer:{
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },

    inciarButtom:{
        alignItems: "center",
        justifyContent: "center",
    },

    iniciarIcon:{
        borderRadius: 100,
        backgroundColor: '#1E90FF',
        color:'#fff',
        padding: 5,
        elevation: 5,
    },

    verNoMapaButtom:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#fff',
        elevation: 5,
        padding: 10,
        borderRadius: 10,
    },

    descricaoContainer:{
        padding: 10,
    },

    cabecalho:{
        width: '100%',
        color: colors.main,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: "bold",
    },

    cabecalhoII:{
        width: '96%',
        color: colors.main,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: "bold",
    },
    
    descricao:{
        textAlign: "justify",
        fontSize: 20,
        color: colors.main,
        fontFamily: "Recursive-Medium",
    },

    atrativosContainer:{
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 1,
        height: '50%',
        marginBottom: 10,
    },



    



})