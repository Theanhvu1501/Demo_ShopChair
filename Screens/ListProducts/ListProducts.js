import React, { Component } from 'react';
import { View, Text,FlatList ,TouchableOpacity,StyleSheet,Dimensions,Image} from 'react-native';
import Header from '../Home/Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

import data from '../../Data/DataBestSellers';
const { width, height } = Dimensions.get('window')
const width_item = width / 2.3;


export default () => {
    const navigation = useNavigation();
    const { itemImage, itemRow, sale } = styles;
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
        <View>
            <Header />
            <View style={{paddingHorizontal:15,marginTop:30}}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={{fontWeight:'bold',fontSize:20,marginRight:10}}>120 Products</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'bold',fontSize:20,marginRight:10}}>Popular</Text>
                        <AntDesign name='circledowno' size={20} />
                    </View>
                </View>
                <View style={{ PaddingTop: 30 ,alignItems:'center'}}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    itemRow: {
        width: width_item,
        height: width_item + 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 15,
        paddingBottom: 2,
        elevation: 2,
        marginBottom:20
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