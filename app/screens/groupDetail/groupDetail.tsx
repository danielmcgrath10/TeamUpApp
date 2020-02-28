import React, {Component} from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Group } from '../../shared/groups/group';
import {Text} from 'react-native-elements';

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
            
            <View style={styles.body}>
                <View style={styles.groupDetailTop}>
                    <View style={styles.groupImage}>

                    </View>
                </View>
                <View style={styles.groupDetailMiddle}>

                </View>
                <View style={styles.groupDetailBottom}>

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
        padding: 10
    },
    groupDetailMiddle: {
        display: 'flex',
        flexDirection: 'column',
    },
    groupDetailBottom: {
        display: 'flex',
        flexDirection: 'column',
    },
    groupImage: {
        height: 90,
        width: 90,
        borderRadius: 50,
        borderColor: 'darkgrey',
        borderWidth: 1,
        backgroundColor: 'white',
    }   
})