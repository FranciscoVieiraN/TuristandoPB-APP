import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
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
        flex:1,
        padding: 5,
        alignItems: 'center',
    },

    cabecalhoII:{
        fontSize: 30, 
        fontFamily: 'Roboto-Bold',
        width: '98%',
        borderBottomWidth: 2,
        borderColor: '#455A64',
        marginTop: 30,
        marginBottom: 15,
        color: '#455A64'
    },

    atrativosProximosContainer:{
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 5,
        marginBottom: 10,

    },

    atrativosContainer:{
        justifyContent: 'space-between',
        marginBottom: 10,

    },

    atrativoFotoContainer:{
        height: '100%',
        width: '100%',
        position: "absolute",
        borderRadius: 20,
        marginBottom: 5,
    },

    atrativoButtom:{
        height:230,
        width: 188,
        borderRadius: 20,
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

    searchBoxContainer:{
        width: 350,
        height: 43,
        borderRadius: 50,
        marginBottom: 30,
        backgroundColor: '#cecece',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})