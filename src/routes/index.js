import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackRoutes from "./stackRoutes";
import Sobre from "../pages/Sobre";
import Perfil from "../pages/Perfil";
import Formulario from "../pages/Formulario";

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#fff',

                tabBarStyle:{
                    backgroundColor: '#202225',
                    borderTopWidth: 0
                }
            }}
        >

            <Tab.Screen
                name="HomeStack"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" color={color} size={size} />
                    }
                }}
            />

            <Tab.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="map" color={color} size={size} />
                    }
                }}
            />

            <Tab.Screen
                name="Formulário"
                component={Formulario}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="file" color={color} size={size} />
                    }
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="user" color={color} size={size} />
                    }
                }}
            />

        </Tab.Navigator>
    );
}

