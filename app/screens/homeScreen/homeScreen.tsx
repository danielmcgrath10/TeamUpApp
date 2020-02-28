import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function HomeScreen({navigation}) {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.header}/>
                    <TouchableOpacity style={styles.fabButton}
                    />
                
                <View style={styles.mapContainer}>
                    <Text style={{justifyContent: 'center'}}>
                        Insert Map in this view
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        zIndex: 1,
    }

})