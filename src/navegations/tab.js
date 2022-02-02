import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import colors from "../styles/colors";

import Home from "../pages/home";
import Atrativos from "../pages/atrativos";
import Cidades from "../pages/roteiro_cidades";
import Search from "../pages/search";
import QuemSomos from "../pages/quem-somos";

const Tab = createBottomTabNavigator();

const AppTab = () => {
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [styles.tabBar],
            }}
        >
            <Tab.Screen 
                nome="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{backgroundColor: focused ? '#fff' : colors.main,
                        borderRadius:12,
                        width:45,
                        height:35,
                        alignItems:'center',
                        justifyContent:'center'}}>
                            <Icon name='home-filled' color={focused ? '#1C4491' : '#fff'} size={25}/>
                        </View> 
                    )
                }}
            />
            <Tab.Screen 
                nome="Atrativos" 
                component={Atrativos}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{backgroundColor: focused ? '#fff' : colors.main,
                        borderRadius:12,
                        width:45,
                        height:35,
                        alignItems:'center',
                        justifyContent:'center'}}>
                            <Icon name='beach-access' color={focused ? '#1C4491' : '#fff'} size={25}/>
                        </View> 
                    )
                }}
            />
            <Tab.Screen 
                nome="Cidades" 
                component={Cidades}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{backgroundColor: focused ? '#fff' : colors.main,
                        borderRadius:12,
                        width:45,
                        height:35,
                        alignItems:'center',
                        justifyContent:'center'}}>
                            <Icon name='location-city' color={focused ? '#1C4491' : '#fff'} size={25}/>
                        </View> 
                    )
                }}
            />
            <Tab.Screen 
                nome="Search" 
                component={Search}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{backgroundColor: focused ? '#fff' : colors.main,
                        borderRadius:12,
                        width:45,
                        height:35,
                        alignItems:'center',
                        justifyContent:'center'}}>
                            <Icon name='search' color={focused ? '#1C4491' : '#fff'} size={25}/>
                        </View> 
                    )
                }}
            />
            <Tab.Screen 
                nome="QuemSomos" 
                component={QuemSomos}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{backgroundColor: focused ? '#fff' : colors.main,
                        borderRadius:12,
                        width:45,
                        height:35,
                        alignItems:'center',
                        justifyContent:'center'}}>
                            <Icon name='info-outline' color={focused ? '#1C4491' : '#fff'} size={25}/>
                        </View> 
                    )
                }}
            />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        backgroundColor: colors.main,
        borderRadius: 24,
        margin: 8,
        height: 54
    }
});

export default AppTab;
