import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
    },

    topContainer: {
        padding: 10,
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#0D47A1',
        elevation: 7,

    },

    titulo: {
        fontSize: 25,
        fontFamily: 'Roboto-Bold',
        color: '#FFF',
        marginLeft: 40,
    },

    conteudoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },

    textoContainer:{
        textAlign: "justify",
        fontSize: 20,
        color: 'gray',
        fontFamily: "Recursive-Medium",

    },

    cabecalho:{
        borderBottomWidth: 2,
        borderColor: '#455A64',
        color: '#455A64',
        marginBottom: 10,
        fontSize: 25,
        fontWeight: "bold",
    },



})