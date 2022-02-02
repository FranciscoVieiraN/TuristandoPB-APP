import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';


export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        paddingTop: 150,
        backgroundColor: colors.main,
        alignItems: "center",
        
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

    },
    startButton: {
        backgroundColor: '#F5F5F5',
        width: 200,
        height: 47.37,
        borderRadius: 23.68,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 470
    }

});
