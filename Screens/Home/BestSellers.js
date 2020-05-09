import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window')
const width_item = width / 2.5;




export default (props) => {
    const { container, title, textTitle, textBtn, itemImage, itemRow, sale } = styles;
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={itemRow} onPress={() => navigation.push('Product',{ item})}>
                <View style={sale}>
                    <Text style={{ color: 'white' }}>{item.sale}</Text>
                </View>
                <Image source={{ uri: item.image }} style={itemImage} />
                <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: '800' }}>{item.price + '$'}</Text>
                    <AntDesign name='shoppingcart' size={20} style={{ marginRight: 10 }} />
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={container}>
            <View style={title}>
                <Text style={textTitle}>{props.title}</Text>
                <TouchableOpacity onPress={() => navigation.push('ListProducts')}>
                <Text style={textBtn}>View all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 30 }}>
                <FlatList
                    data={props.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginLeft: 20
    },
    title: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    textBtn: {
        fontSize: 18,
        color: '#e8b83f',
        right: 20,
        alignSelf: 'center'
    },
    itemRow: {
        width: width_item,
        height: width_item + 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 15,
        paddingBottom: 2,
        elevation: 2,
    },
    itemImage: {
        width: width_item - 20,
        height: width_item - 40,
        resizeMode: 'center',
        alignSelf: 'center',
        marginTop: 25
    },
    sale: {
        position: 'absolute',
        width: 50,
        height: 20,
        backgroundColor: 'red',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    }
});