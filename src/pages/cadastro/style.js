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

    topContainer: {
        padding: 10,
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
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
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        
    },

    dadosUsuarioContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 30,
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
        width: 200,
        height: 45,
        borderRadius: 7,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 7,

    },

    textSubmit:{
        color: '#fff',
        fontSize: 25,
        fontFamily:'Roboto-Bold',
    }

})