import {StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export default StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff'
    },

    scrollContainer:{
        justifyContent: 'flex-start',
        alignItems: "center",
        width: '100%'
    },

    topContainer:{
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    titulo:{
        marginLeft: 30,
        fontSize: 25,
        color: '#1E90FF',
        fontWeight: 'bold',
    },

    imagem:{
        width: '100%',
        height: '100%',
    },

    imagemContainer:{
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        width: '100%',
        
    },

    detalhesContainer:{
        width: '100%',
        padding: 10,
        justifyContent: "space-between",
        elevation: 5,
        backgroundColor: '#fff',
    },

    nomeCidade:{
        fontSize: 25,
        fontWeight: "bold",
    },

    enderecoCidade:{
        fontSize: 20,
        fontWeight: "bold",
        color: 'gray'
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
        marginBottom: 20,
    },

    cabecalho:{
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    
    descricao:{
        textAlign: "justify",
        fontSize: 20,
        color: 'gray',
        fontWeight: "bold",
    },

    atrativosContainer:{
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    atrativoFotoContainer:{
        height: 200,
        width: '100%',
        borderRadius: 20,
        marginBottom: 5,
    },

    atrativoButtom:{
        height: 260,
        width: 300,
        borderRadius: 20,
        marginRight: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
        elevation: 5,
    },

    atrativoDetalhe:{
        justifyContent: 'space-between',
        alignItems:"center",
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: '100%',
        marginBottom: 20,
        
    },



    



})