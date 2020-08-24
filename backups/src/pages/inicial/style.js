import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(30,136, 229, 0.7)',
        alignItems: "center",
        justifyContent: "space-between",
    },

    name:{
        fontSize: 35,
        color: '#fff',
        marginTop: 10,
        fontFamily: 'Recursive-Black'
    },

    logoContainer:{
        alignItems:'center',
        justifyContent: 'center',
    },

    logo:{
        height: 200,
        width: 200
    },

    buttonContainer:{
        alignItems: 'center',
        justifyContent: "space-between",
    },

    comecarText:{
        color: '#00080A',
        fontSize: 25,
        fontFamily: 'Roboto-Medium',
    },

    buttonComecar:{
        backgroundColor: '#fff', 
        width: 200,
        height:45,
        borderRadius: 7,
        marginBottom: 15,
        justifyContent:'center',
        alignItems: 'center',
    },

    buttonCadastro:{
        backgroundColor: '#fff',
        width: 200,
        height:45,
        borderRadius: 7,
        marginBottom: 15,
        justifyContent:'center',
        alignItems: 'center'
    },

    cadastroText:{
        color: '#00080A',
        fontSize: 25,
        fontFamily: 'Roboto-Medium',
    },

    descricaoText:{
        color: '#fff',
        fontFamily: 'Roboto-Medium',
        fontSize: 23,
        marginBottom: 90,
        marginHorizontal: 50,
        marginTop: 50,
        textAlign: 'center'
        
    },

    apps4SocietyLogo:{
        alignItems: "center",
        justifyContent: "center",

    }



    
})