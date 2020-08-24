import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    topContainer:{
        width: '100%',
        padding: 10,
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

    conteudoConteiner:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },

    caixaContainer:{
        height: '60%',
        width: 300,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        elevation:10,
        padding: 10,
        borderRadius: 20,
        
    },

    cabecalho:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
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
        height: 250,
        padding: 10,
        backgroundColor: '#fff',
    },

    opcoesRoteiroTextUnSelected:{
        fontSize: 20,
        color:'black',
    },

    opcoesRoteiroTextSelected:{
        fontSize: 20,
        color: '#fff'
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