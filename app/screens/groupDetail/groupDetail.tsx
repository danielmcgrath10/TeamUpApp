import React, {Component} from 'react';
import { View, StyleSheet, SafeAreaView, Image, FlatList, Button, SectionList, TouchableOpacity } from 'react-native';
import { Group } from '../../shared/groups/group';
import {Text, ListItem, ButtonGroup} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'

export default function GroupDetailScreen({route, navigation}) {
    const {group} = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () =>(
                <Text style={styles.headerText}>
                    {toCapitalize(group.sport)}
                </Text>
            )
        })
    })

    const toCapitalize = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {this.toCapitalize(this.state.group.sport)}
                </Text>
            </View>
            <View style={styles.body}>
                <View style={styles.groupDetailTop}>
                    <View style={styles.groupImage}>
                    
                    </View>
                </View>
                <View style={styles.groupDetailMiddle}>
                    <View style={styles.listContainer}>
                        {
                            this.state.group.requests ? 
                                <FlatList
                                    data={this.state.group.requests}
                                    renderItem={({item, index}) => (
                                        <ListItem
                                            key={index}
                                            title={this.toCapitalize(item.name)}
                                            subtitle={'Rating: ' + item.rating}
                                            rightElement={
                                                <ButtonGroup 
                                                    onPress={this.handleListButtonClick}
                                                    buttons={['accept', 'deny']}
                                                    containerStyle={{width: 150}}
                                                />
                                            }
                                            bottomDivider
                                        />
                                    )}
                                />
                            : 
                                <Text style={styles.noRequestText}>
                                    Currently No Requests
                                </Text>  
                        }
                    </View>
                </View>
                <View style={styles.groupDetailBottom}>
                    <View style={styles.listContainer}>
                        {
                            this.state.group.requests ? 
                                <FlatList
                                    data={this.state.group.playingCurrently}
                                    renderItem={({item, index}) => (
                                        <ListItem
                                            key={index}
                                            title={this.toCapitalize(item.name)}
                                            bottomDivider
                                        />
                                    )}
                                />
                            : 
                                <Text style={styles.noRequestText}>
                                    Currently No Players Joined
                                </Text>  
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
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
    settingsButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    headerText: {
        display: "flex",
        fontSize: 25,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    groupDetailTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        flex: 0,
    },
    groupDetailMiddle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
    },
    groupDetailBottom: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 2
    },
    groupImage: {
        height: 90,
        width: 90,
        borderRadius: 50,
        borderColor: 'darkgrey',
        borderWidth: 0.5,
        backgroundColor: 'white',
    },
    listContainer: {
        display: 'flex',
        margin: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 1,
        height: '98%',
        padding: 5
    },
    noRequestText: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20
    },
    sectionHeader: {
        fontSize: 15,
        fontWeight: "400",
        marginTop: 5,
        color:'grey',
    },
    groupMessageContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex:0,
        padding: 10,
        justifyContent: 'center'
    },
    groupMessage: {
        
    }
})