import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

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
        fontSize: 28,
        fontFamily: 'Recursive-Black',
        color: colors.main
    },

    enderecoAtrativo:{
        fontSize: 20,
        marginBottom: 10,
        fontFamily: 'Recursive-Black',
        color: colors.main
    },

    buttonsContainer:{
        width: '100%',
        justifyContent: 'flex-start',
    },

    verNoMapaButtom:{
        borderRadius:10,
        width: 232,
        height: 45,
        backgroundColor:colors.main,
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
        color: colors.main,
        marginBottom: 10,
        fontSize: 20,
    },
    
    descricao:{
        textAlign: "justify",
        fontSize: 20,
        color: colors.main,
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