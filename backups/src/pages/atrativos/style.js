import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        padding: 5,
        justifyContent: 'flex-start',
    },

    topContainer:{
        width: '100%',
        padding: 5,
        marginBottom: 10,
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

    atrativosProximosContainer:{
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 5,
        marginBottom: 10,

    },

    atrativoFotoContainer:{
        height: 200,
        width: '100%',
        borderRadius: 20,
        marginBottom: 5,
    },

    atrativoProximoButtom:{
        height: 260,
        width: 395,
        borderRadius: 20,
        marginBottom: 25,
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

    avaliacaoStarsContainer:{
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
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