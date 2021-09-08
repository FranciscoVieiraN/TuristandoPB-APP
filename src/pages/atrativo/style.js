import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',

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
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },

    imagemContainer:{
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        width: '100%',
        
    },

    detalhesContainer:{
        padding: 20,
        backgroundColor: '#fff',
    },

    nomeAtrativo:{
        fontSize: 30,
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
    },

    verNoMapaButtom:{
        borderRadius:10,
        width: 290,
        height: 50,
        backgroundColor:'#1E90FF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        padding: 20,
    },

    cabecalho:{
        width: '100%',
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
        padding: 20,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,

    },

    telefoneContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },




    


})