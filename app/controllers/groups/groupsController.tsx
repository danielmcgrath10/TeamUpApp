import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import {Header, ButtonGroup} from 'react-native-elements';
import Icon  from 'react-native-vector-icons/Ionicons';
import { Group } from '../../shared/groups/group';

type Props = {
    activeGroups: Group[]
    requested: Group[]
}

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
                    <Text>
                        
                    </Text>
                    <TouchableOpacity style={styles.addIcon}>
                        <Icon 
                            name="ios-add"
                            size = {35}
                            
                        />
                    </TouchableOpacity>
                    
                </View>
                    <ButtonGroup
                        onPress={this.updateButtonIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={styles.buttonGroup}
                    /> 

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
        backgroundColor: 'white',
        maxHeight: 50,
        width: '100%',
        borderBottomColor: 'darkgrey',
        marginBottom: 2,
    },
    buttonGroup: {
        alignSelf: 'center',
        height: 25,
        width: '60%',
        marginTop: 2,
    },
    addIcon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 20,
        alignSelf: 'flex-end',
    }
})