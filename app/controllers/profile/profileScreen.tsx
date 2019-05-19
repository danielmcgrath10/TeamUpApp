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
                    <View style={styles.profileStats}>
                        <View style={styles.profileStatBox}>
                            <Text>
                                Friends: 
                            </Text>
                        </View>
                        <View style={styles.profileStatBox}>
                            <Text>
                                Rating: 
                            </Text>
                        </View>
                    </View>
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
        height: 110,
        width: 110,
        borderRadius: 15,
        borderColor: 'darkgrey',
        borderWidth: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 70,
        alignSelf: 'center',
    },
    lowerProfile: {
        flex: 2,
    },
    profileStats: {
        flexDirection: 'row',
    },
    profileStatBox: {
        borderColor: 'darkgrey',
        borderWidth: 1,
        height: 50,
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    statBoxText: {
        
    }
})