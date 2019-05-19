import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Header} from 'react-native-elements';

export default class HomeScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.header}/>
                    <TouchableOpacity style={styles.fabButton}
                        onPress= {() => {
                            this.props.navigation.navigate('profileScreen');
                        }}
                    >
                        <View >
                        </View>
                    </TouchableOpacity>
                </View>
                
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
    },
    header: {
        backgroundColor: 'grey',
        height: 50,
        width: '100%',
        borderBottomColor: 'darkgrey',
        opacity: 0.5,
        position: 'absolute',
        top: 0,
    },
    fabButton: {
        height: 70,
        width: 70,
        borderRadius: 15,
        borderColor: 'darkgrey',
        borderWidth: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 20,
        alignSelf: 'center',
    }

})