import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: "center",
    },

    topContainer:{
        width: '100%',
        padding: 5,
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

    conteudoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    textoContainer:{
        textAlign: 'justify',
        fontSize: 17,

    },



})