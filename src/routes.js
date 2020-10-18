import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

import Inicial from './pages/inicial';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Home from './pages/home';
import Tipo_roteiro from './pages/tipo_roteiro';
import Roteiro_cidades from './pages/roteiro_cidades';
import Atrativos from './pages/atrativos';
import QuemSomos from './pages/quem-somos';
import Favoritos from './pages/favoritos';
import Cidade from './pages/cidade';
import Atrativo from './pages/atrativo';
import Map from './pages/map';


function DrawerPages(){
    return (

        
            <AppDrawer.Navigator>
                
                <AppDrawer.Screen name = "Favoritos" component = {Favoritos}/>
                
                
            </AppDrawer.Navigator >  
    );
}

export default function StackPages(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions = {{headerShown:false}}>
                <AppDrawer.Screen name = "Home" component = {Home}/>
                <AppDrawer.Screen name = "Atrativos" component = {Atrativos}/>   
                <AppDrawer.Screen name = "QuemSomos" component = {QuemSomos}/>
                <AppStack.Screen name = "Tipo_roteiro" component = {Tipo_roteiro} />
                <AppStack.Screen name = "Roteiro_cidades" component = {Roteiro_cidades}/>
                <AppStack.Screen name = "Cidade" component = {Cidade}/>
                <AppStack.Screen name = "Atrativo" component = {Atrativo}/>
                <AppStack.Screen name = "Map" component = {Map}/>
                
                
            </AppStack.Navigator>
        </NavigationContainer>
    );
}






