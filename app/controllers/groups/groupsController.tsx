import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import {Header, ButtonGroup} from 'react-native-elements';
import Icon  from 'react-native-vector-icons/Ionicons';
import { Group } from '../../shared/groups/group';

// type Props = {
//     activeGroups: Group[]
//     requested: Group[]
// }

type groupState = {
    activeGroups: Group[]
}

export default class groupsController extends React.Component<{}, groupState> {
    constructor(props) {
        super(props);
        this.state = {
            activeGroups: null
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
                    
                    <TouchableOpacity 
                        style={styles.addIcon}
                        onPress={() => this.props.navigation.navigate('addGroup')}    
                    >
                        <Icon 
                            name="ios-add"
                            size = {35}
                        />
                    </TouchableOpacity>
                    
                </View>
                {this.state.activeGroups ? 
                    <ScrollView>

                    </ScrollView> :
                    <View style={styles.noInfoDisplay}>
                        <Text style={styles.noInfoDisplayText}>
                            No Group Activity to Display
                        </Text>
                    </View>
                }
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
        fontSize: 25,
    },
    noInfoDisplay: {
        flex: 1,
        justifyContent: 'center'
    },
    noInfoDisplayText: {
        alignSelf: 'center',
        fontSize: 18,
    }
})