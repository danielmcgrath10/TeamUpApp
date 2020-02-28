import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView, FlatList, Group } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import { GroupList } from '../../shared/groups/mock-groups';
import { ListItem } from 'react-native-elements';

export default function groupsController({navigation}){
    const [activeGroups, setActiveGroups] = React.useState(null);
    const [requestedGroups, setRequestedGroups] = React.useState(null);

    React.useEffect(() => {
        if(!activeGroups){
            setActiveGroups(GroupList);
        } 
        if(!requestedGroups){
            setRequestedGroups(GroupList);
        }
    })

    const toCapitalize = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return(
        <SafeAreaView style={styles.container}>
            {
                activeGroups ? 
                    <FlatList
                        data={GroupList}
                        renderItem={({item, index}) => (
                            <TouchableOpacity key={item.gameID}>
                                <ListItem
                                    leftAvatar={{icon: {name: 'person-outline'}}}
                                    key={item.gameID}
                                    title={toCapitalize(item.sport)}
                                    subtitle={item.skillLevel? toCapitalize(item.skillLevel): null}
                                    bottomDivider
                                    onPress={() => navigation.navigate('GroupDetail', {
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
                onPress={() => navigation.navigate('AddGroup')}    
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
        maxHeight: 50,
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