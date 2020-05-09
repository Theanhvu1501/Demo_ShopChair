import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Home/HomeSceen';
import Cart from '../Cart/Cart';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Product from '../Product/Product';
import ListProducts from '../ListProducts/ListProducts'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackScreen = () => (
    <Stack.Navigator initialRouteName="Home" headerMode='none' >
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Product" component={Product}/>
        <Stack.Screen name="ListProducts" component={ListProducts}/>
    </Stack.Navigator>
)

export default () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="StackScreen" component={StackScreen} />
        </Drawer.Navigator>
    );
}