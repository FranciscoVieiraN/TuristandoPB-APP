import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicial from "../pages/inicial";
import Atrativo from "../pages/atrativo";
import Cidade from "../pages/cidade";
import AppTab from "./tab";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen nome="Inicial" component={Inicial} />
            <Stack.Screen nome="Atrativo" component={Atrativo} />
            <Stack.Screen nome="Home" component={AppTab} />
            <Stack.Screen nome="Atrativos" component={AppTab} />
            <Stack.Screen nome="Cidades" component={AppTab} />
            <Stack.Screen nome="Search" component={AppTab} />
            <Stack.Screen nome="QuemSomos" component={AppTab} />
            <Stack.Screen nome="Cidade" component={Cidade} />
        </Stack.Navigator>
    )
}

export default AppStack;
