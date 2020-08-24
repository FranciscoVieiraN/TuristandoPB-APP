import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: "center",
    },

    topContainer:{
        width: '100%',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    titulo:{
        marginLeft: 30,
        fontSize: 25,
        color: '#1E90FF',
        fontWeight: 'bold',
    },

    atrativosContainer:{
        justifyContent: 'space-between',
        padding: 5,
        marginBottom: 10,
        marginTop: 20,

    },

    atrativoFotoContainer:{
        height: 200,
        width: '100%',
        borderRadius: 20,
        marginBottom: 5,
    },

    atrativoButtom:{
        height: 260,
        width: 300,
        borderRadius: 20,
        marginRight: 25,
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
        marginBottom: 20,
        
    },

    menuButtom:{
        borderRadius: 7,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
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