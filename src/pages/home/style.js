import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1.,
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
        elevation: 7
    },

    title: {
        fontSize: 40,
        fontFamily: 'Recursive-Black',
        color: '#FFF',
    },

    tituloIIContainer:{
        paddingHorizontal: 24,
        width: '100%',
        marginTop: 8,
        marginBottom: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',

    },

    tituloII:{
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: '#1C4491',
        marginBottom: 14,
    },

    optionsContainer: {
        backgroundColor: '#fff',
        height: 100,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    optionButtonContainer: {
        backgroundColor: '#1C4491',
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
        paddingHorizontal: 24
    },

    cabecalhoII:{
  
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        width: '98%',
        textAlign: "left",
        marginBottom: 15,
        color: '#1C4491'
    },

    menuBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1C4491',
        height: 54,
        width: '100%'
    },

    buttonBar: {
        width: 43,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    }
})