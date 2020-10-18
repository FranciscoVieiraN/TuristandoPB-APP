import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Orientation from 'react-native-orientation';





const DATA = [
    {
        id: "1",
        title: "Belezas Naturais",
    },
    {
        id: "2",
        title: "Prédios Históricos",
    },
    {
        id: "3",
        title: "Riqueza Cultural",
    },
];

const Item = ({ item, onPress, style, textStyle, iconColor, iconName }) => (
    <TouchableOpacity onPress={onPress} style={style}>
        <Icon name='check-box-outline' color={iconColor} size={30}/>
        <Text style={textStyle}> {item.title} </Text>
    </TouchableOpacity>
);




export default function Tipo_roteiro() {

    const navigation = useNavigation();
    const [selectedId, setselectedId] = React.useState(null);

    const renderItem = ({ item }) => {
        const style = item.id === selectedId ? styles.opcoesRoteiroSelected : styles.opcoesRoteiro;
        const textStyle = item.id === selectedId ? styles.opcoesRoteiroTextSelected : styles.opcoesRoteiroTextUnSelected;
        const iconColor = item.id === selectedId ? '#fff' : 'black';
        const iconName = item.id === selectedId ? 'checkbox-marked' : 'check-box-outline';


        return (
            <Item
                item={item}
                onPress={() => {
                    if(selectedId === item.id){
                        setselectedId(null)
                    }else{
                        setselectedId(item.id)
                    }
                }}
                style={style}
                textStyle={textStyle}
                iconColor={iconColor}
            />
        );
    };
    

    function navigateToRoteiroCidades(selectedId){
        navigation.navigate('Roteiro_cidades', {id: selectedId});
    }



    return (
        <View style={styles.container}>



           
                
            <View style={styles.topContainer}>

                <TouchableOpacity
                onPress={()=>navigation.goBack()}>
                    <Icon name='arrow-left' color={'#0D47A1'} size={45}/>
                </TouchableOpacity>

            </View>

            <View style={styles.conteudoConteiner}>
                <View style={styles.caixaContainer}>
                    <Text style={styles.cabecalho}>
                        Esolha um tipo de roteiro
                    </Text>

                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                        contentContainerStyle={styles.opcoesRoteiroContainer}
                    />
                    
                    <TouchableOpacity style={styles.buttomContinue}
                    onPress={()=>{
                            if(selectedId === null){
                                alert('Escolha uma oção de roteiro antes de continuar!')
                            }else{
                                navigateToRoteiroCidades(selectedId)
                            }
                        }}>
                        <Text style={styles.buttomContinueText}>Continuar</Text>
                    </TouchableOpacity>



                </View>
            </View>





        </View>



    )
}