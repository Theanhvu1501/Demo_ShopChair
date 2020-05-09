import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Header from '../Home/Header'
import { useSelector, useDispatch } from 'react-redux';
import { removeCart, incQuantyti, decQuantyti } from '../action/Cart';
import CartEmpty from './CartEmpty';
const { width, height } = Dimensions.get('window');

export default () => {
    const arrayCart = useSelector((state) => state.Cart.arrayCart);
    const quantity = useSelector(state => state.Cart.quantity);
    const dispatch = useDispatch();

    const { header, information, itemRow, count, textBtn, btn, btndelete, textQuantyti, text } = styles;

    const renderItem = ({ item }) => (
        <View>
            <View style={itemRow}>
                < Image
                    style={{ width: 130, height: 130, resizeMode: 'center' }}
                    source={{ uri: item.image }} />
                <View style={{ justifyContent: 'space-between', padding: 20, flex: 1 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
                        <Text>sadsadsa</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.price + '$'}</Text>
                        <View
                            style={count}>
                            <TouchableOpacity onPress={() => dispatch(incQuantyti())} style={textQuantyti}>
                                <Text style={text}>+</Text>
                            </TouchableOpacity>
                            <View style={textQuantyti}>
                                <Text style={text}>{quantity}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                quantity === 1 ? null : dispatch(decQuantyti())
                            }} style={textQuantyti}>
                                <Text style={text}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ height: 2, backgroundColor: 'gray', marginTop: 5 }} />
            <TouchableOpacity style={btndelete} onPress={() => {
                Alert.alert(
                    "Remove Item",
                    "Do you want to delete this product?",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        {
                            text: "OK", onPress: () => {
                                const action = removeCart(item);
                                dispatch(action)
                            }
                        }
                    ],
                    { cancelable: false }
                );

            }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>x</Text>
            </TouchableOpacity>
        </View>


    )
    return (
        <View style={{ flex: 1 }}>
            {
                arrayCart.length === 0
                    ? 
                    <CartEmpty />
                    :
                    <View style={{ flex: 1, backgroundColor: '#e8ebe9' }}>
                        <Header isHome={false} isCart={true} />
                        <View style={header}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Shopping Cart</Text>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
                                <Text style={{ fontSize: 20 }}>{arrayCart.length} items</Text>
                                <Text style={{ fontSize: 20 }}>Edit</Text>
                            </View>
                            <View style={{ height: 3, backgroundColor: 'black', marginTop: 10 }} />
                            <View style={information}>
                                <FlatList
                                    data={arrayCart}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.name}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                            <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>Sub total</Text>
                                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                                    $1040.000
                                </Text>
                            </View>
                            <TouchableOpacity style={btn}>
                                <Text style={textBtn}>Check out</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        marginHorizontal: 20,
        marginTop: 20
    },
    information: {
        height: 400,
        marginTop: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'gray'
    },
    itemRow: {
        flexDirection: 'row',
    },
    count: {
        width: 100
        , height: 40,
        flexDirection: 'row',
        backgroundColor: 'gray',
        borderRadius: 5
    },

    btn: {
        width: width - 80,
        height: 70,
        borderRadius: 30,
        backgroundColor: 'black',
        alignSelf: 'center',
        marginTop: 30,
        justifyContent: 'center'
    },
    textBtn: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    },
    btndelete: {
        width: 20,
        height: 20,
        borderRadius: 15,
        backgroundColor: 'red',
        position: 'absolute',
        top: 5, right: 5
    },
    textQuantyti: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});