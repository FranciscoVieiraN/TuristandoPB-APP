import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    topContainer: {
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    titulo: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: '#FFF',
        marginLeft: 40,
    },

    input: {
        height: 43,
        width: 280,
        color: '#00080A',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
    },

    titleII: {
        fontSize: 25, 
        fontFamily: 'Poppins-SemiBold',
        width: '90%',
        marginBottom: 15,
        color: colors.main,
        marginLeft: 24
    },

    opcoesCidadeContainer: {
        padding: 20,
        justifyContent: "space-between",
        alignItems: "flex-start",
    },

    cidadeImg:{
        height: '100%',
        width: '100%',
        justifyContent: "flex-end",
        
    },

    buttomCidade:{
        height: 280,
        width: 180,
        marginHorizontal: 5,
        marginVertical: 5,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
    },

    buttonsContainer:{
        flex: 1,
        width: '100%',
    },

    nomeCidadeText:{
        fontSize: 20,
        color: '#fff',
        fontWeight: "bold",
    },

    nomeCidadeContainer:{
        width: '100%',
        alignItems: "flex-start",
        padding: 5,
    },

    optionButtonContainer: {
        backgroundColor: colors.main,
        borderRadius: 10,
        padding: 7,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
        width: '100%',

    },

    viewContainer: {
        backgroundColor: colors.main,
        borderRadius: 10,
        padding: 7,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 20,
        width: '100%',
    }

});