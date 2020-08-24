import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
    },

    scrollContainer:{
        justifyContent: "space-between",
        alignItems: "center",
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

    conteudoContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        
    },

    dadosUsuarioContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },

    fotoUsuarioContainer:{
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },

    fotoUsuarioCabecalho:{
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,

    },

    fotoUsuario:{
        backgroundColor: '#d4d4d4',
        borderRadius: 100,
        width: 150,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,

    },


    input: {
        width: 300,
        height: 50,
        color: 'black',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: 'gray',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: "flex-start",
        borderRadius: 7,
        padding: 5,
        marginBottom: 50,
    },

    btnSubmit:{
        backgroundColor: '#1E90FF',
        width: 165,
        height:40,
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center'

    },

    textSubmit:{
        color: '#fff',
        fontSize: 25,
        fontWeight:'bold',
    }

})