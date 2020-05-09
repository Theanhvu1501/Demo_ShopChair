import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default () => {
    const { container, title, textTitel, textContent, imageStyle } = styles;
    const navigation = useNavigation();
    function Render() {
        return (
            <TouchableOpacity style={container} onPress={()=> navigation.push('Product')}>
                <View style={title}>
                    <Text style={textTitel}>The Classic</Text>
                    <Text style={textContent}>Classic appearance with a splash of color</Text>
                    <AntDesign name='arrowright' size={30} style={{ marginRight: 20 }} />
                </View>
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: 'http://pngimg.com/uploads/chair/chair_PNG6872.png' }} style={imageStyle} />
                </View>
            </TouchableOpacity>
        )
    }



    return (
        <Swiper
            style={{ height: height / 3 }}
            autoplay={false}>
            <Render />
            <Render />
            <Render />

        </Swiper>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: width - 30,
        height: height / 3.5,
        backgroundColor: 'white',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 30,
        elevation: 8
    },
    title: {
        flex: 1,
        padding: 30,
    },
    textTitel: {
        color: '#e8b83f',
        fontSize: 25,
        fontWeight: 'bold'
    },
    textContent: {
        marginTop: 20,
        color: 'gray',
        fontSize: 15,
        marginBottom: 30,
    },
    imageStyle: {
        width: width / 3,
        height: height / 3.5,
        resizeMode: 'center',
    }
});