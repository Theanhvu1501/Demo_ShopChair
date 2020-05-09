import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Header from '../Home/Header';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { addNewCart } from '../action/Cart';
const { height } = Dimensions.get('window');


export default () => {
    const { imageStyle, textTile, title, textContent, btn, textBtn } = styles;
    const router = useRoute();
    const dispatch = useDispatch();

    const handAddCart =() => {
        const action = addNewCart(router.params.item)
        dispatch(action);
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#e8ebe9', flex: 1 }}>
            <StatusBar barStyle='light-content' />
            <Header />
            <View style={title}>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <View style={{ width: 5, height: 40, backgroundColor: '#fc7e2f', alignSelf: 'center', marginRight: 10 }} />
                    <Text style={textTile}>{router.params.item.name}</Text>
                </View>
                <Animatable.Text animation='fadeInLeftBig' style={textContent}>RATAN AMOS</Animatable.Text>
                <Animatable.Text animation='fadeInLeftBig' style={textContent}>FABRIC AMOS</Animatable.Text>
                <Animatable.Text animation='fadeInLeftBig' style={textContent}>LEATHER AMOS</Animatable.Text>
            </View>
            <Animatable.Image
                animation='zoomIn'
                duration={900}
                source={{ uri: router.params.item.image }}
                style={imageStyle} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50, marginTop: 20 }}>
                <Animatable.Text animation='zoomIn' style={textTile}>{router.params.item.price + '$'}</Animatable.Text>
                <TouchableOpacity onPress={handAddCart}
                    style={btn}>
                    <Text style={textBtn}> BUY NOW</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        height: height / 2.3,
        resizeMode: 'center',
    },
    title: {
        margin: 20,
        marginTop: 50
    },
    textTile: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    textContent: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 50,
        paddingLeft: 10
    },
    btn:    
    {
        backgroundColor: 'red',
        width: 120, height: 50,
        borderRadius: 20,
        justifyContent: 'center'
    },
    textBtn:
    {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }

});