//les go babee
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default function SplashScreen({navigation}) {
    return(
        <SafeAreaView style = {{flex: 1}}>
            <Text>
                Splash Screen
            </Text>
        </SafeAreaView>
    )
}