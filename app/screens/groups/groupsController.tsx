import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import { Group } from '../../shared/groups/group';
import { GroupList } from '../../shared/groups/mock-groups';
import { ListItem } from 'react-native-elements';

type Props = {
    activeGroups: Group[],
    requested: Group[],
    navigation: any
}

type groupState = {
    activeGroups: Group[]
}

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
                            Groups
                        </Text>
                    </View>
                </View>
                {this.state.activeGroups ? 
                        <FlatList
                            data={this.state.activeGroups}
                            renderItem={({item, index}) => (
                                <TouchableOpacity key={index}>
                                    <ListItem
                                        leftAvatar={{icon: {name: 'person-outline'}}}
                                        key={index}
                                        title={this.toCapitalize(item.sport)}
                                        subtitle={item.skillLevel? this.toCapitalize(item.skillLevel): null}
                                        bottomDivider
                                        onPress={() => this.props.navigation.navigate('groupDetail', {
                                            group: item
                                        })}
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
                <TouchableOpacity 
                    style={styles.addIcon}
                    onPress={() => this.props.navigation.navigate('addGroup')}    
                >
                    <Icon 
                        color='white'
                        name="ios-add"
                        size = {40}
                        style={{fontWeight: '800'}}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'flex-end',
        backgroundColor: '#f2f2f2',
        minHeight: 50,
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: 'darkgrey',
        marginBottom: 2,
    },
    addIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 55,
        height: 55,
        backgroundColor: 'blue',
        borderRadius: 100,
        right: 20,
        bottom: 20,
        elevation: 10,
    },
    headerTextContainer: {
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