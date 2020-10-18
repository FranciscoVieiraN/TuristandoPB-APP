import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },

    topContainer: {
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
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

    conteudoConteiner:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },

    caixaContainer:{
        height: 500,
        width: 300,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        elevation:10,
        padding: 10,
        borderRadius: 20,
        
    },

    cabecalho:{
        fontSize: 25, 
        fontFamily: 'Roboto-Bold',
        textAlign: "center",
        marginBottom: 20,
        marginTop: 30,
        color: '#455A64'
    },

    opcoesRoteiro:{
        flexDirection:"row",
        alignItems: "center",
        padding: 10,
        marginBottom: 20,
    },

    opcoesRoteiroSelected:{
        flexDirection:"row",
        alignItems: "center",
        padding: 10,
        marginBottom: 20,
        backgroundColor:'#1E90FF',
        elevation: 10,
        borderRadius: 7,
    },

    opcoesRoteiroContainer:{
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: '#fff',
    },

    opcoesRoteiroTextUnSelected:{
        fontSize: 20,
        color:'black',
    },

    opcoesRoteiroTextSelected:{
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Roboto-Bold',
    },

    buttomContinue:{
        backgroundColor: '#1E90FF',
        height: 50,
        width: 200,
        borderRadius: 7,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
    },

    buttomContinueText:{
        fontSize: 20,
        fontWeight: "bold",
        color:"#fff"
    },





})