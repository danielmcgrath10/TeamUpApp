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
}

export default class groupsController extends React.Component<{}, MyState> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>
                            Group Activity
                        </Text>
                    </View>
                    
                    <TouchableOpacity style={styles.addIcon}>
                        <Icon 
                            name="ios-add"
                            size = {35}
                            
                        />
                    </TouchableOpacity>
                    
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
        flexDirection: 'row',
        backgroundColor: 'white',
        maxHeight: 55,
        width: '100%',
        borderBottomWidth: 2,
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
        position: 'absolute',
        right: 20,
        top: 10,
    },
    headerTextContainer: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    headerText: {
        fontSize: 20,
    }
})