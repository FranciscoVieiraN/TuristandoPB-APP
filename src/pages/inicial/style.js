import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
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
        marginTop: 50,
    },

    logo:{
        height: 200,
        width: 200
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