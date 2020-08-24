import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    topContainer: {
        padding: 10,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#0D47A1',
        elevation: 7,

    },

    title: {
        fontSize: 25,
        fontFamily: 'Roboto-Bold',
        color: '#FFF',
        marginLeft: 40,
    },

    cabecalhoContainer:{
        padding: 10,
        width: '100%',
        
        justifyContent: 'flex-start',
        backgroundColor: '#0D47A1',
        elevation: 7,

    },

    cabecalho:{
        fontSize: 25,
        fontFamily: 'Recursive-ExtraBold',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        color: '#FFF',
    },

    optionsContainer: {
        backgroundColor: '#0D47A1',
        height: 100,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset:{
            width: 0,
            height: 60,
        },
        elevation: 7,
    },

    optionButtonContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 7,
        height: 45,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,

    },

    topButton: {
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    conteudoContainer:{
        flex:1,
        padding: 5,
        alignItems: 'center',
    },

    cabecalhoII:{
  
        fontSize: 25, 
        fontFamily: 'Roboto-Bold',
        width: '98%',
        borderBottomWidth: 2,
        borderColor: '#455A64',
        marginTop: 30,
        marginBottom: 15,
        color: '#455A64'
    },

    atrativosContainer:{
        justifyContent: 'space-between',
        padding: 5,
        marginBottom: 10,

    },

    atrativoFotoContainer:{
        height: 200,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 5,
    },

    atrativoButtom:{
        height:330,
        width: 330,
        borderRadius: 20,
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
        
    },

    descricao:{
        fontSize: 15,
        fontFamily: 'Recursive-ExtraBold',
        color: '#455A64',
    }








});