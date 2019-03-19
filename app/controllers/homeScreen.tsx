import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class HomeScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <Text style={{justifyContent: 'center'}}>
                        Insert Map in this view
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {

    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 50,
        
    },
    footerButton: {
        borderColor: '#898989',
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})