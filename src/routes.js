import * as React from 'react';
import { View, Text } from 'react-native';
import  Icons  from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

import Inicial from './pages/inicial';
import Home from './pages/home';
import Roteiro_cidades from './pages/roteiro_cidades';
import Atrativos from './pages/atrativos';
import Cidade from './pages/cidade';
import Atrativo from './pages/atrativo';

const InicialStack = createNativeStackNavigator();

function InicialStackScreen() {
  return (
    <InicialStack.Navigator screenOptions={{ headerShown: false }}>
      <InicialStack.Screen name="Inicial" component={Inicial} />
    </InicialStack.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions = {{headerShown:false}}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const AtrativoStack = createNativeStackNavigator();

function AtrativoStackScreen() {
    return (
      <AtrativoStack.Navigator screenOptions = {{headerShown:false}}>
        <AtrativoStack.Screen name="Atrativos" component={Atrativos} />
        <AtrativoStack.Screen name="Atrativo" component={Atrativo} />
      </AtrativoStack.Navigator>
    );
};

const CidadeStack = createNativeStackNavigator();

function CidadeStackScreen() {
  return (
    <CidadeStack.Navigator screenOptions = {{headerShown:false}}>
      <CidadeStack.Screen name="Roteiro_cidades" component={Roteiro_cidades} />
      <CidadeStack.Screen name="Cidade" component={Cidade} />
    </CidadeStack.Navigator>
  );
};


export default function Pages() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions = {{
            headerShown:false,
            tabBarShowLabel: false,
            tabBarStyle: [{
              positoin: 'absolute',
              backgroundColor: '#1C4491',
              height: 54}]}}
          >
          <Tab.Screen name="HomeTab" component={HomeStackScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                  <View style={{backgroundColor: focused ? '#fff' : '#1C4491',
                  borderRadius:8,
                  width:45,
                  height:35,
                  alignItems:'center',
                  justifyContent:'center'
                  }}>
                      <Icons name='sensor-door' color={focused ? '#1C4491' : '#fff'} size={25}/>
                  </View> 
                )
            }}
          />
          <Tab.Screen name="AtrativosTab" component={AtrativoStackScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                  <View style={{backgroundColor: focused ? '#fff' : '#1C4491',
                  borderRadius:8,
                  width:45,
                  height:35,
                  alignItems:'center',
                  justifyContent:'center'
                  }}>
                      <Icons name='beach-access' color={focused ? '#1C4491' : '#fff'} size={25}/>
                  </View> 
                )
            }}
          />
          <Tab.Screen name="Roteiro_cidadesTab" component={CidadeStackScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                  <View style={{backgroundColor: focused ? '#fff' : '#1C4491',
                  borderRadius:8,
                  width:45,
                  height:35,
                  alignItems:'center',
                  justifyContent:'center'
                  }}>
                      <Icons name='location-city' color={focused ? '#1C4491' : '#fff'} size={25}/>
                  </View> 
                )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
};
