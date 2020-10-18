import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
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
        padding: 1,
        alignItems: 'center',
    },

    cabecalhoII:{
        fontSize: 30, 
        fontFamily: 'Roboto-Bold',
        width: '98%',
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
    },

    menuButtom:{
        borderRadius: 7,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
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