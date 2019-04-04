import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import {Header, ButtonGroup} from 'react-native-elements';
import Icon  from 'react-native-vector-icons/Ionicons';

type MyState = {
    selectedIndex: number
}

export default class groupsController extends React.Component<{}, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };

        this.updateButtonIndex = this.updateButtonIndex.bind(this);
    }

    updateButtonIndex(selectedIndex: number) {
        this.setState({selectedIndex})
    }

    render() {
        const buttons = ['Active Groups', 'Requested'];
        const {selectedIndex} = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                   <ButtonGroup
                        onPress={this.updateButtonIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={styles.buttonGroup}
                    /> 
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
    header: {
        flex: 1,
        backgroundColor: 'grey',
        maxHeight: 50,
        width: '100%',
        borderBottomColor: 'darkgrey',
    },
    buttonGroup: {
        alignSelf: 'center',
        height: 30,
        width: '60%',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    iconStyles: {
        
    }
})