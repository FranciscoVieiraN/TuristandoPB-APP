import React from 'react';
import {
    StyleSheet, 
    TouchableOpacity,
    Image, 
    View, 
    Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

export const Cards = ({ item, onPress}) => (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.cardButtom}>
        <Image 
        source={{uri: item.images[0].url}}
        style={styles.cardFotoContainer}/>
        
        <View style={styles.cardDetalhe}>
            <View>

                <View style={{
                    flexDirection: "row", 
                    width: '100%', 
                    justifyContent: "space-between", 
                    alignItems: "center",}}>

                <Text numberOfLines={1} style={{
                    fontFamily: 'Recursive-Black',
                    fontSize: 25,
                    color: colors.main,
                    width: '100%',
                    }}>

                    {item.title}

                </Text>


                </View>
                <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 20 }}>
                    <Icon name='explore' color='#3EA7EF' size={25} style={{marginRight: 20}} />
                    <Text numberOfLines={1} style={styles.endereco}>
                        {item.endereco}
                    </Text>
                </View>
            
            </View>

        </View>    
    
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    cardFotoContainer:{
        height: 200,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 5,
    },

    cardButtom:{
        height:290,
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
        elevation: 5,
    },

    cardDetalhe:{
        justifyContent: 'space-between',
        alignItems:"center",
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: '100%',
        
    },

    endereco:{
        fontSize: 15,
        fontFamily: 'Recursive-ExtraBold',
        color: colors.main,
    }
});