import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Header from '../Home/Header';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Header isCart={true} />
            <Image 
            style={{width:300,height:300 , alignSelf:'center',marginTop:90}}
            source = {{uri:'http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG73.png'}}/>
            <Text style={{fontWeight:'bold',fontSize:30,marginTop:50,textAlign:'center'}}>Your cart is empty :(</Text>
            <TouchableOpacity 
                onPress = {() => navigation.navigate('Home')}
                style={{width:350,height:80,backgroundColor:'#58b4ae',justifyContent:'center',
                 alignSelf:'center',marginTop:50,borderRadius:45}}>
                <Text style={{fontWeight:'bold',fontSize:25,color:'white',textAlign:'center'}}>
                    ADD COURSES TO CART
                </Text>
            </TouchableOpacity>
        </View>
    )
}