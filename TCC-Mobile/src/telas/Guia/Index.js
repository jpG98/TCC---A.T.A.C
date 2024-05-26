import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Home from '../Home';
import Usuarios from '../Usuario';
import Clientes from '../Clientes';
import Principal from '../Principal';
import {Ionicons} from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        color = "#d0d"
        size = 30

        if (route.name === 'Home') {
          iconName = focused
            ? 'home-outline'
            : 'bed-outline';
        } else if (route.name === 'Usuario') {
          iconName = focused ? 'person-outline' : 'body-outline';
        }else if (route.name === 'Clientes') {
          iconName = focused ? 'people-outline' : 'happy-outline';
        }
        
        //aqui define os ícones que irão aparecer nas Tabs
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      labelStyle:{
        fontSize: 12
      },
      activeTintColor: '#3f64c7',
      inactiveTintColor: 'gray',      
    }}    
    >
      <Tab.Screen name= "Home" component={Home}></Tab.Screen>
      <Tab.Screen name= "Usuario" component={Usuarios}></Tab.Screen>
      <Tab.Screen name= "Clientes" component={Clientes}></Tab.Screen>
    </Tab.Navigator>
  )
}



export default function app(){
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>

      <Stack.Screen 
          name="Home" 
          component={Tabs}
          options={{
            title:'Meu Aplicativo',
            headerStyle:{
            backgroundColor: '#3f64c7',
            },
            headerTintColor: '#FFF' , 
            headerShown: true         
          }}
          >

      </Stack.Screen>
      <Stack.Screen name="Usuario" component={Usuarios}></Stack.Screen>
      <Stack.Screen name="Principal" component={Principal} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
 
  )
}