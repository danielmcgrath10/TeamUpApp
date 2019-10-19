import React, {Component} from 'react';
import {View, Text, Picker, PickerItem, StyleSheet, Button, TouchableOpacity, TextInput, KeyboardAvoidingView, SafeAreaView, Platform, ActionSheetIOS, ScrollView, Alert, Image} from 'react-native';
import { Header, Input } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {sportList} from '../../shared/sportlist/sportList';
import RNPickerSelect, {Item} from 'react-native-picker-select';

type propValues = {
    SportChoice: Item,
    DifficultyLevel: Item,
    NumPeople: Item,
}

type stateValues ={
    SportChoice: Item,
    DifficultyLevel: Item
    NumPeople: Item
}
export default class AddGroup extends Component<propValues, stateValues> {
    constructor(props) {
        super(props);
        this.state = {
            SportChoice: {label: 'Choose a Sport...', value: 'undefined'},
            DifficultyLevel: {label: 'Select Difficulty Level...', value: 'Not Specified'},
            NumPeople: {label: 'Number of People Desired...', value: 'Not Specified'}
        };

        this.populateSportsDropdown = this.populateSportsDropdown.bind(this);
    }

    populateSportsDropdown(): Item[] {
        let pickerList = [];
        sportList.sort().forEach(sport => {
            pickerList.push(
                {
                    label: sport,
                    value: sport
                }
            )    
        });
        return pickerList;
    }

    populateNumPeopleDropdown(): Item[] {
        let pickerList = [];
        let num = 0;
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

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity 
                        style = {styles.cancelButton}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={styles.headerCancel}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.headerLogo}>
                        <Text style={styles.headerText}>
                            Create
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style = {styles.submitButton}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={styles.headerCancel}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.picker}>
                        <RNPickerSelect
                            style={{
                                inputIOS: {
                                    color: 'black',
                                    fontSize: 20,
                                }
                            }}
                            onValueChange={(value) => {
                                if(value.value === 'undefined') {
                                    Alert.alert('Need to Choose a Sport')
                                } else (
                                    this.setState({SportChoice: value.value})
                                )
                            }}
                            items={this.populateSportsDropdown()}
                            placeholder= {this.state.SportChoice}
                        />
                    </View>
                    <View style={styles.picker}>
                        <RNPickerSelect
                            style={{
                                inputIOS: {
                                    color: 'black',
                                    fontSize: 20,
                                }
                            }}
                            placeholder= {this.state.DifficultyLevel}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                {
                                    label: 'Beginner',
                                    value: 'beginner'
                                },
                                {
                                    label: 'Intermediate',
                                    value: 'intermediate'
                                },
                                {
                                    label: 'Advanced',
                                    value: 'advanced'
                                }
                            ]}
                        />
                    </View>
                    <View style={styles.picker}>
                        <RNPickerSelect
                            style={{
                                inputIOS: {
                                    color: 'black',
                                    fontSize: 20,
                                }
                            }}
                            placeholder={this.state.NumPeople}
                            onValueChange={(value) => console.log(value)}
                            items={this.populateNumPeopleDropdown()}
                        />
                    </View>

                    <View style={styles.ButtonContainer}>
                        <TouchableOpacity
                            style = {{flex: 1, height: 60}}
                            onPress={() => {
                                console.log("you pressed use current")
                            }}
                        >
                            <View style={styles.ButtonStyles}>
                                <Text style={{color: 'black', fontSize: 20}}>
                                    Choose Location
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* <TouchableOpacity 
                            style={{flex:1, height: 60}}
                            onPress={()=>{
                            console.log('You Pressed Choose from map')
                            }}
                        >
                            <View style={styles.ButtonStyles}>
                                <Text style={{color: 'black', fontSize: 20}}>
                                    Choose from Map
                                </Text>
                            </View>  
                        </TouchableOpacity>      */}
                    </View>
                    <View style={styles.textBoxContainer}>
                        <TextInput
                            style={styles.textBox}
                            placeholder={'Add Notes Here'}
                            multiline = {true}
                        />
                    </View>
                    <View style={{flex:3, justifyContent: 'center', alignSelf:'center'}}>
                        <Image style={{height: 150, width: 150}} source={require('../../shared/images/Icons/TeamUpEmblems/teamUpEmblem.png')}/>
                    </View>
                </View>
            </SafeAreaView> 
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    picker: {
        flex: 1,
        justifyContent: 'center',
        borderColor: 'black',
        maxHeight: 60,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        borderWidth: 1,
        shadowColor: '#8e2224',
        shadowOffset: {
        width: 1.5,
        height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 0.6
    },
    textBox: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 20,
    },
    ButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
    },
    ButtonStyles: {
        padding: 10,
        height: 60,
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#8e2224',
        shadowOffset: {
        width: 1.5,
        height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 0.6
    },
    bodyContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    textBoxContainer: {
        flex: 2,
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        shadowColor: '#8e2224',
        shadowOffset: {
        width: 1.5,
        height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 0.6
    },
    header: {
        height: 60,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#c93033',
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
        position: 'absolute',
        left: 20,
        top: 20,
    },
    submitButton: {
        position: 'absolute',
        right: 20,
        top: 20
    },
    headerCancel: {
        fontSize: 19,
        color: 'white',
    }    
})