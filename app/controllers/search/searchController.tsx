import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default class SearchScreen extends React.Component {
    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style = {styles.textBox}>
                    <Text>
                        Hey Whaddup Stokers
                    </Text>
                </View> 
            </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
    
