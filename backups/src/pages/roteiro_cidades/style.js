import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    topContainer:{
        width: '100%',
        marginBottom: 30,
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

    input: {
        color: '#00080A',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
    },

    searchBoxContainer:{
        width: 350,
        paddingHorizontal: 5,
        borderRadius: 50,
        marginBottom: 30,
        backgroundColor: '#cecece',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    cabecalho: {
        fontSize: 25, 
        fontWeight: 'bold',
        marginBottom: 20,
    },

    opcoesCidadeContainer: {
        height: 400,
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },

    cidadeImg:{
        height: '100%',
        width: '100%',
        justifyContent: "flex-end",
        
    },

    buttomCidade:{
        marginRight: 20,
        height: '100%',
        width: 200,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
    },

    buttonsContainer:{
        width: '100%',
    },

    nomeCidadeText:{
        fontSize: 20,
        color: '#fff',
        fontWeight: "bold",
    },

    nomeCidadeContainer:{
        width: '100%',
        alignItems: "flex-start",
        padding: 5,
    },




})