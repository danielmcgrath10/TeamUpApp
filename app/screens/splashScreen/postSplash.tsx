//les go babee
import React, {Component} from 'react';
import {View, Image, SafeAreaView} from 'react-native';

export default function PostSplash({navigation}) {
    setTimeout(() => {navigation.navigate('MainApp')}, 1000)
    return(
        <SafeAreaView style = {{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            
            <Image style={{height: 200, width: 200}} source={require('../../shared/images/Icons/TeamUpEmblems/TeamUpIcon@600.png')}/>

            </View>

        </SafeAreaView>

       
    )
}