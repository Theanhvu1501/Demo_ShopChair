import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'



export default ({ isHome, isCart }) => {
    const navigation = useNavigation();
    const cartArray = useSelector((state) => state.Cart.arrayCart);
    return (
        <View style={styles.container}>
            {
                isHome ?
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <AntDesign name='menu-unfold' size={30} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='ios-arrow-back' size={30} />
                    </TouchableOpacity>
            }
            {
                isCart ? null : <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <AntDesign name='shoppingcart' size={30} />
                    {
                        cartArray.length === 0 ? null :
                            <View style={styles.badge}>
                                <Text style={styles.textBadge}>{cartArray.length}</Text>
                            </View>
                    }
                </TouchableOpacity>
            }

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    badge: {
        width: 14,
        height: 14,
        backgroundColor: 'red',
        borderRadius: 7,
        position: 'absolute',
        right: -3
    },
    textBadge: {
        textAlign: 'center',
        color: 'white',
        fontSize: 10
    }
});