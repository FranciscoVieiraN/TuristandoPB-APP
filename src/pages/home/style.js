import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export default StyleSheet.create({

    container: {
        flex: 1.,
        backgroundColor: '#fff'
    },

    tituloContainer:{
        paddingHorizontal: 24,
        width: '100%',
        marginTop: 8,
        marginBottom: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',

    },

    titulo:{
        fontSize: 18,
        fontFamily: fonts.first,
        color: colors.main,
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
        backgroundColor: colors.main,
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
        fontFamily: fonts.first,
        width: '98%',
        textAlign: "left",
        marginBottom: 15,
        color: colors.main
    },

    menuBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.main,
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