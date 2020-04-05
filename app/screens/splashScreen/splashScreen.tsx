//les go babee
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default function SplashScreen({navigation}) {
    setTimeout(() => {navigation.navigate('MainApp')}, 1000)
    return(
        <SafeAreaView style = {{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{justifyContent: 'center'}}>
                    Splash Screen
                </Text>
            </View>

        </SafeAreaView>

        
    )
}