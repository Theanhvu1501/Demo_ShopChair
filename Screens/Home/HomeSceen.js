import React, { Component } from 'react';
import { ScrollView, StatusBar, SafeAreaView ,TouchableOpacity,Text} from 'react-native';
import Header from './Header'
import Introduct from './Introduct';
import BestSellers from './BestSellers';
import data from '../../Data/DataBestSellers';



export default () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#e8ebe9', flex: 1 }}>
            <StatusBar barStyle='light-content'/>
            <ScrollView>
                <Header isHome={true}/>
                <Introduct />
                <BestSellers title='Best Sellers' data={data} />
                <BestSellers title='Hand-Picks' data={data} />
            </ScrollView>
        </SafeAreaView>
    );
}