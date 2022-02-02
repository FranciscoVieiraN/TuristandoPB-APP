import * as React from 'react';
import { View, Text } from 'react-native';
import  Icons  from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from './styles/colors';

const Tab = createBottomTabNavigator();

import Inicial from './pages/inicial';
import Home from './pages/home';
import Cidades from './pages/cidades';
import Atrativos from './pages/atrativos';
import Cidade from './pages/cidade';
import Atrativo from './pages/atrativo';
import Search from './pages/search';
import QuemSomos from './pages/quem-somos';


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions = {{headerShown:false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Atrativo" component={Atrativo} />
    </HomeStack.Navigator>
  );
}

const AtrativoStack = createNativeStackNavigator();

function AtrativoStackScreen() {
    return (
      <AtrativoStack.Navigator screenOptions = {{headerShown:false}}>
        <AtrativoStack.Screen name="Atrativos" component={Atrativos} />
        <AtrativoStack.Screen name="Atrativo" component={Atrativo} />
      </AtrativoStack.Navigator>
    );
}

const CidadeStack = createNativeStackNavigator();

function CidadeStackScreen() {
  return (
    <CidadeStack.Navigator screenOptions = {{headerShown:false}}>
      <CidadeStack.Screen name="Cidades" component={Cidades} />
      <CidadeStack.Screen name="Cidade" component={Cidade} />
    </CidadeStack.Navigator>
  );
}


function TabBar() {
    return (
        <Tab.Navigator 
      screenOptions = {{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle: [{
          positoin: 'absolute',
          borderRadius: 24,
          backgroundColor: colors.main,
          height: 54,
        margin: 8}]}}
    >
          <Tab.Screen name="HomeTab" component={HomeStackScreen} 
          options={{
            tabBarIcon: ({focused}) => (
                <View style={{backgroundColor: focused ? '#fff' : colors.main,
                borderRadius:12,
                width:45,
                height:35,
                alignItems:'center',
                justifyContent:'center'
                }}>
                    <Icons name='home-filled' color={focused ? colors.main : '#fff'} size={25}/>
                </View> 
              )
            }}
          />
          <Tab.Screen name="AtrativosTab" component={AtrativoStackScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                  <View style={{backgroundColor: focused ? '#fff' : colors.main,
                  borderRadius:12,
                  width:45,
                  height:35,
                  alignItems:'center',
                  justifyContent:'center'
                  }}>
                      <Icons name='beach-access' color={focused ? colors.main : '#fff'} size={25}/>
                  </View> 
                )
            }}
          />
          <Tab.Screen name="CidadesTab" component={CidadeStackScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                  <View style={{backgroundColor: focused ? '#fff' : colors.main,
                  borderRadius:12,
                  width:45,
                  height:35,
                  alignItems:'center',
                  justifyContent:'center'
                  }}>
                      <Icons name='location-city' color={focused ? colors.main : '#fff'} size={25}/>
                  </View> 
                )
            }}
          />
          <Tab.Screen name="Search" component={Search} 
            options={{
              tabBarIcon: ({focused}) => (
                  <View style={{backgroundColor: focused ? '#fff' : colors.main,
                  borderRadius:12,
                  width:45,
                  height:35,
                  alignItems:'center',
                  justifyContent:'center'
                  }}>
                      <Icons name='search' color={focused ? colors.main : '#fff'} size={25}/>
                  </View> 
                )
            }}
          />
          <Tab.Screen name="QuemSomos" component={QuemSomos} 
            options={{
              tabBarIcon: ({focused}) => (
                  <View style={{backgroundColor: focused ? '#fff' : colors.main,
                  borderRadius:12,
                  width:45,
                  height:35,
                  alignItems:'center',
                  justifyContent:'center'
                  }}>
                      <Icons name='info-outline' color={focused ? colors.main : '#fff'} size={25}/>
                  </View> 
                )
            }}
          />
      </Tab.Navigator>
    );
}

export default function MainStackScreen() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions = {{headerShown:false}}>
      <HomeStack.Screen name="Inicial" component={Inicial} />
      <HomeStack.Screen name="Home" component={TabBar} />
    </HomeStack.Navigator>
    </NavigationContainer>
  );
}
