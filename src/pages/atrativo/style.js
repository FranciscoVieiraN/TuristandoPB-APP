import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',

    },

    topContainer: {
        padding: 10,
        width: '100%',
        paddingHorizontal: 10,
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
        padding: 10,
        backgroundColor: '#fff',
    },

    nomeAtrativo:{
        fontSize: 25,
        fontFamily: 'Recursive-Black',
    },

    enderecoAtrativo:{
        fontSize: 20,
        marginBottom: 10,
        fontFamily: 'Recursive-Black',
        color: 'gray'
    },

    buttonsContainer:{
        width: '100%',
        justifyContent: 'flex-start',
        padding: 10,
    },

    verNoMapaButtom:{
        borderRadius:10,
        width: 290,
        height: 90,
        backgroundColor:'#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        elevation:5,
    },

    avaliacaoContainer:{
        alignItems: "center",
        padding: 20,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
    },

    avaliacaoStarsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },

    descricaoContainer:{
        padding: 10,
    },

    cabecalho:{
        width: '100%',
        borderBottomWidth: 2,
        borderColor: '#455A64',
        color: '#455A64',
        marginBottom: 10,
        fontSize: 25,
        fontWeight: "bold",
    },
    
    descricao:{
        textAlign: "justify",
        fontSize: 20,
        color: 'gray',
        fontFamily: "Recursive-Medium",
    },

    informacoesContainer:{
        padding: 10,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,

    },

    telefoneContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },


    mapView:{
        height: 200,
        width: '100%',
    },




    


})