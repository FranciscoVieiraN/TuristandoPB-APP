import * as React from 'react';
import { View, Text } from 'react-native';
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

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions = {{headerShown:false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Atrativos" component={Atrativos} />
      <HomeStack.Screen name="Atrativo" component={Atrativo} />
      <HomeStack.Screen name="Roteiro_cidades" component={Roteiro_cidades} />
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
      <CidadeStack.Screen name="Roteiro_cidades" component={Roteiro_cidades} />
      <CidadeStack.Screen name="Cidade" component={Cidade} />
    </CidadeStack.Navigator>
  );
}


export default function Pages() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions = {{
            headerShown:false,
            tabBarShowLabel: false,
            tabBarStyle: [{
              positoin: 'absolute',
              backgroundColor: '#1C4491'}]}}
          >
          <Tab.Screen name="HomeTab" component={HomeStackScreen} />
          <Tab.Screen name="AtrativosTab" component={AtrativoStackScreen} />
          <Tab.Screen name="Roteiro_cidadesTab" component={CidadeStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
};

//shift+alt+A
/* export default function StackPages(){
  return(
      <NavigationContainer>
          <AppStack.Navigator screenOptions = {{headerShown:false}}>
              <AppStack.Screen name = "Inicial" component = {Inicial}/>
              <AppStack.Screen name = "Home" component = {Home}/>
              <AppStack.Screen name = "Atrativos" component = {Atrativos}/>                
              <AppStack.Screen name = "Roteiro_cidades" component = {Roteiro_cidades}/>
              <AppStack.Screen name = "Cidade" component = {Cidade}/>
              <AppStack.Screen name = "Atrativo" component = {Atrativo}/>  
          </AppStack.Navigator>
      </NavigationContainer>
  );
} */
