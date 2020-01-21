import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SearchScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style = {styles.textBox}>
                    <Text>
                        Hey Whaddup Stokers
                    </Text>
                </View> 
            </View>
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
    
