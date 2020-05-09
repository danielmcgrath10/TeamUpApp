import React, {Component} from 'react';
import {View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    SafeAreaView, 
    Alert, 
    Image,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
} from 'react-native';
import {sportList} from '../../shared/sportlist/sportList';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import { ButtonGroup, Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';

export default function AddGroup({navigation}) {
    const [activity, onChangeActivity] = React.useState(null);
    const [numPeople, setNumPeople] = React.useState(null);
    const [eventText, onChangeEventText] = React.useState(null);
    const [buttonIndex, onChangeButtonIndex] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity 
                    style={styles.cancelButton}
                    onPress={() => {
                        Alert.alert(
                            "Are You Sure?",
                            "Cancelling now will lose any changes",
                            [
                                {
                                    text: 'Cancel',
                                },
                                {
                                    text: 'Accept',
                                    onPress: () => {
                                        navigation.goBack()
                                    }
                                }
                            ]
                        )
                    }}
                >
                    <Text style={styles.headerCancel}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            ),
            headerTitle: () =>(
                <Image style={{height: 30, width: 120}} source={require('../../shared/images/Icons/TeamUpEmblems/TEAMUPLOGO.png')}/>
            )
        })
    })

    function populateNumPeople(): Item[] {
        let pickerList = [];
        let num = 1;
        let desNum = 30;
        while (num < desNum) {
            pickerList.push(
                {
                    label: num.toString(),
                    value: num.toString()
                }
            );
            num = num + 1;
        }
        return pickerList;
    }

    // Input Firebase Call here!
    const handleSubmit = () => {
        setLoading(false);
        
    }

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <View style={styles.secondaryContainer}>
                    <TextInput
                        style={styles.activityInput}
                        onChangeText={text => onChangeActivity(text)}
                        value={activity}
                        placeholder={'Please Input an Activity...'}
                        placeholderTextColor={'grey'}
                    />
                    <TouchableOpacity
                        style={styles.locationSelect}
                    >
                        <Text style={styles.locationSelectText}>
                            Select Location
                        </Text>
                    </TouchableOpacity>
                    <ButtonGroup
                        onPress={(val) => onChangeButtonIndex(val)}
                        selectedIndex={buttonIndex}
                        buttons={['Easy', 'Intermediate', 'Advanced']}
                        containerStyle={{height: 50, borderColor: 'grey', borderWidth: 0.5, borderRadius: 10, width: '90%', alignSelf: 'center'}}
                    />
                    <RNPickerSelect
                        style={pickerStyles}
                        placeholder={
                            {
                                label: "Select Number of People ...",
                                value: undefined,
                                color: 'grey'
                            }
                        }
                        onValueChange={(val) => setNumPeople(val ? val.value : null)}
                        items={populateNumPeople()}
                    />
                    <TextInput
                        multiline
                        blurOnSubmit={true}
                        style={styles.commentInput}
                        placeholder={'Include Any Comments Here ...'}
                        numberOfLines = {5}
                        onChangeText={text => onChangeEventText(text)}
                        value={eventText}
                        placeholderTextColor={'grey'}
                    />
                </View>
                <TouchableOpacity 
                    style = {styles.submitButton}
                    onPress={handleSubmit}
                >
                    <Text style={styles.headerSubmit}>
                        Submit
                    </Text>
                </TouchableOpacity>
                {/* <Spinner
                    visible={loading}
                /> */}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    secondaryContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10
    },
    header: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#f2f2f2',
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 2,
    },
    headerText: {
        fontSize: 25,
        color: 'white'  
    },
    headerLogo: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    cancelButton: {
        marginLeft: 20
    },
    submitButton: {
        display: 'flex',
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        borderColor: '#007AFF',
        borderWidth: 0.25,
        margin: 10,
        padding: 15,
        borderRadius: 10
    },
    headerSubmit: {
        fontSize: 20,
        color: '#007AFF',
        alignSelf: 'center'
    },
    headerCancel: {
        fontSize: 19,
        color: '#007AFF',
        alignSelf: 'center'
    },
    activityInput: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        padding: 15,
        margin: 10,
        width: '90%',
        borderColor: 'grey',
        borderWidth: 0.25,
        backgroundColor: 'white',
        borderRadius: 10,
        color: '#464646'
    },
    locationSelect: {
        display: 'flex',
        borderWidth: 0.5,
        borderColor: 'grey',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10,
        padding: 15,
        color: '#464646'
    },
    locationSelectText: {
        display: 'flex',
        color: '#464646',
        fontSize: 20,
        alignSelf: 'center'
    },
    commentInput: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '90%',
        margin: 10,
        padding: 10,
        fontSize: 20,
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 10,
        height: 200,
        backgroundColor: 'white',
        color: '#464646'
    }   
})

const pickerStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 20,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: 'grey',
        padding: 15,
        width: '90%',
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: 'white',
        color: '#464646'
    },
    inputAndroid: {
        fontSize: 25,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        padding: 15,
        width: '90%',
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: 'white',
        color: '#464646'
    }
})