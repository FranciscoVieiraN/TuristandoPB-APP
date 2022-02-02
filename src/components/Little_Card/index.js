import React from 'react';
import {
    StyleSheet, 
    TouchableOpacity,
    Image, 
    View, 
    Text} from 'react-native';
import colors from '../../styles/colors';

export const LittleCard = ({ item, onPress}) => (

    <TouchableOpacity
        onPress={onPress}
        style={styles.cardButtom}>
        <Image 
        source={{uri: item.images[0].url}}
        style={styles.cardFotoContainer}/>
        
        <View style={styles.cardDetalhe}>

            <Text numberOfLines={1} style={{
                fontFamily: 'Recursive-Black',
                fontSize: 15,
                color: colors.main
                }}>
                    {item.title}
            </Text>
            
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    cardFotoContainer:{
        height: 85,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    cardButtom:{
        height: 120,
        width: 150,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCFCFC',
        elevation: 3,
    },

    cardDetalhe:{
        justifyContent: 'center',
        alignItems:"center",
        flexDirection: 'row',
        width: '100%',
        height: 35,
        
    },
});
