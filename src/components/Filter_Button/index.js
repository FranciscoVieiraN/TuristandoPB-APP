import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export default FilterButton => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                AAAA
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: colors.main,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 8
    },
    text:{
        fontFamily: fonts.first,
        fontSize: 18,
        color: colors.main,
        margin: 8
    }
});