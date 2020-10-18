import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    topContainer: {
        padding: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#0D47A1',
        elevation: 7,

    },

    title: {
        fontSize: 40,
        fontFamily: 'Recursive-Black',
        color: '#FFF',
    },

    tituloIIContainer:{
        paddingHorizontal: 20,
        width: '100%',
        marginBottom: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',

    },

    tituloII:{
        fontSize: 30,
        fontFamily: 'Recursive-ExtraBold',
        color: '#0D47A1',
    },

    optionsContainer: {
        backgroundColor: '#fff',
        height: 100,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    optionButtonContainer: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        padding: 7,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 5,

    },

    topButton: {
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    conteudoContainer:{
        flex:1,
        alignItems: 'center',
    },

    cabecalhoII:{
  
        fontSize: 30, 
        fontFamily: 'Roboto-Bold',
        width: '98%',
        textAlign: "center",
        marginBottom: 15,
        color: '#455A64'
    },

});