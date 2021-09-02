import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:'#fff',
    },

    topContainer: {
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    titulo: {
        fontSize: 25,
        fontFamily: 'Roboto-Bold',
        color: '#FFF',
        marginLeft: 40,
    },

    conteudoContainer:{
        flex:1,
        alignItems: 'center',
    },

    cabecalhoII:{
        fontSize: 20, 
        fontFamily: 'Poppins-SemiBold',
        width: '98%',
        marginBottom: 15,
        color: '#1C4491'
    },

    atrativosContainer:{
        justifyContent: 'space-between',
        marginBottom: 10,

    },

    atrativoFotoContainer:{
        height: '100%',
        width: '100%',
        position: "absolute",
        borderRadius: 10,
        marginBottom: 5,
    },

    atrativoButtom:{
        height:230,
        width: 188,
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: "column",
        margin: 5,
        backgroundColor: '#FFF',
        elevation: 5,
    },

    atrativoDetalhe:{
        justifyContent: 'space-between',
        alignItems:"center",
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        
    },

    descricao:{
        fontSize: 15,
        fontFamily: 'Recursive-ExtraBold',
        color: '#fff',
    },

    input: {
        height: 43,
        width: 280,
        color: '#00080A',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
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
        width: '100%',

    },
})