import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import { Group } from '../../shared/groups/group';
import { GroupList } from '../../shared/groups/mock-groups';
import { ListItem } from 'react-native-elements';
import { db } from '../../shared/Firebase';

type Props = {
    activeGroups: Group[],
    requested: Group[],
    navigation: any
}

type groupState = {
    activeGroups: Group[]
}

let groupsRef = db.collection("groups");

export default class groupsController extends React.Component<Props, groupState> {
    constructor(props) {
        super(props);
        this.state = {
            activeGroups: GroupList,
        };
    }

    toCapitalize = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
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
                        <FlatList
                            data={this.state.activeGroups}
                            renderItem={({item}) => (
                                <TouchableOpacity>
                                    <ListItem
                                        key={item.userID}
                                        title={this.toCapitalize(item.sport)}
                                        subtitle={item.skillLevel? this.toCapitalize(item.skillLevel): null}
                                        bottomDivider
                                    />
                                </TouchableOpacity>
                            )}
                        />

                     :
                    <View style={styles.noInfoDisplay}>
                        <Text style={styles.noInfoDisplayText}>
                            No Group Activity to Display
                        </Text>
                    </View>
                }
            </SafeAreaView>
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
        backgroundColor: '#f2f2f2',
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