import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({

    conteiner: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 24
    },
    text: {
        fontSize: 24,
        fontWeight: "500",
        color: colors.main
    },
    button: {
        width: "100%",
        height: 45,
        paddingHorizontal: 14,
        backgroundColor: colors.main,
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 10,
        marginBottom: 10
    },
    textButton: {
        color: "#F5F5F5",
        fontSize: 24,
        fontWeight: "400"
    }
});