import React, {Component} from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Group } from '../../shared/groups/group';
import {Text} from 'react-native-elements';

type groupDetailProps = {
    navigation: any
}

type groupDetailState = {
    group: Group
}

export default class GroupDetailScreen extends Component<groupDetailProps, groupDetailState> {
    constructor(props) {
        super(props);
        this.state = {
            group: this.props.navigation.state.params.group
        }
    }

    toCapitalize = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {this.toCapitalize(this.state.group.sport)}
                    </Text>
                </View>
                <View style={styles.body}>
                    {/* <View style={}>
                        
                    </View> */}
                </View>
            </SafeAreaView>
        )
    }
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
    }   
})