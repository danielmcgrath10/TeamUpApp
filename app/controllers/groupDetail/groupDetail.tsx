import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Group } from '../../shared/groups/group';

type groupDetailProps = {
    group: Group
}

export default class GroupDetailScreen extends Component<groupDetailProps, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
})