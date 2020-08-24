import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(30,136, 229, 0.7)',
        alignItems: "center",
        justifyContent: "space-between",
        

    },

    topContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,

    },

    titulo:{
        marginLeft: 30,
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Roboto-Bold',
    },


    LoginComponetesContainer: {
        alignItems: 'center',
        justifyContent: "space-between",
    },


    input: {
        width: 300,
        height: 50,
        color: '#fff',
        borderBottomWidth: 1,
        borderColor: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: "flex-start",
        padding: 10,
        marginTop: 20,
    },

    buttomLogin: {
        backgroundColor: '#FFF',
        width: 200,
        height: 45,
        borderRadius: 7,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 7,
    },

    buttomLoginFBGG: {
        backgroundColor: '#FFF',
        flexDirection: "row",
        borderRadius: 7,
        marginTop: 20,
        width: 260,
        height: 37,
        justifyContent: 'flex-start',
        alignItems: 'center',
        elevation: 7,
    },

    loginText: {
        color: '#00080A',
        fontSize: 25,
        fontFamily: 'Rrecurs',
    },

    fbGGloginText:{
        color: '#00080A',
        fontSize: 20,
        fontFamily: 'Roboto-Medium',
    },

    buttomEsqueciSenha: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#fff',
    },

    ggLoginIcon:{
        backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        marginRight: 5,
        height: 37,
        width: 35,

    },

    fbLoginIcon:{
        backgroundColor: 'blue',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        marginRight: 5,
        height: 37,
        width: 35,

    }


})