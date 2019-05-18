import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upperProfile}>
                    <TouchableOpacity style={styles.fabButton}
                        onPress= {() => {
                           console.log('Hello world');
                        }}
                    >
                        <View >
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.lowerProfile}>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    upperProfile: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    fabButton: {
        height: 100,
        width: 100,
        borderRadius: 15,
        borderColor: 'darkgrey',
        borderWidth: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 80,
        alignSelf: 'center',
    },
    lowerProfile: {
        flex: 2,
    }

})