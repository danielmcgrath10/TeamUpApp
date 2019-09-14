import React, {Component} from 'react';
import {View, Text, Picker, PickerItem, StyleSheet, Button, TouchableOpacity, TextInput, KeyboardAvoidingView, SafeAreaView, Platform, ActionSheetIOS, ScrollView} from 'react-native';
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
            SportChoice: {label: 'Choose a Sport...', value: null},
            DifficultyLevel: {label: 'Select Difficulty Level...', value: null},
            NumPeople: {label: 'Number of People Desired...', value: null}
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
            <SafeAreaView style={{flex: 1}}>
                <ScrollView contentContainerStyle={{flex:1}}>
                <KeyboardAvoidingView style={styles.container} behavior='height'>
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
                </View>
                <View style={styles.picker}>
                    <RNPickerSelect
                        style={{
                            inputIOS: {
                                color: 'black'
                            }
                        }}
                        onValueChange={(value) => this.setState({SportChoice: value.value})}
                        items={this.populateSportsDropdown()}
                        placeholder= {this.state.SportChoice}
                    />
                </View>
                <View style={styles.picker}>
                    <RNPickerSelect
                        style={{
                            inputIOS: {
                                color: 'black'
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
                                color: 'black'
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
                                <Text style={{color: 'black'}}>
                                    Use Current Location
                                </Text>
                            </View>
                       </TouchableOpacity>

                    <TouchableOpacity 
                        style={{flex:1, height: 60}}
                        onPress={()=>{
                        console.log('You Pressed Choose from map')
                        }}
                    >
                        <View style={styles.ButtonStyles}>
                            <Text style={{color: 'black'}}>
                                Choose From Map
                            </Text>
                        </View>  
                    </TouchableOpacity>
                        
                </View>
                <View style={{flex:5, borderColor: 'lightgrey', borderWidth: 2, margin: 10, marginTop: 0}}>
                    <TextInput
                        placeholder={'Add Notes Here'}
                        multiline = {true}
                    />
                </View>
                <TouchableOpacity
                    style={styles.submitButtonContainer}
                    onPress={() => {
                        //TODO: This is where you can input logic to pass the json to firestore
                        console.log('Hello');
                        this.props.navigation.goBack(); //TODO: throw this in the returned confirmation logic if the addition is successful
                    }}
                >
                    <View style={styles.submitButtonView}>
                        <Text style={styles.submitButtonText}>
                            CREATE
                        </Text>  
                    </View>       
                </TouchableOpacity>
                
                </KeyboardAvoidingView>
                </ScrollView>
            </SafeAreaView> 
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        bottom: 0,
    },
    picker: {
        flex: 1,
        justifyContent: 'center',
        borderColor: 'lightgrey',
        borderBottomWidth: 1,
        maxHeight: 60,
        margin: 5,
    },
    textBox: {
        flex: 1,
        justifyContent: 'center',
        maxHeight: 60,
        paddingLeft: 10
    },
    ButtonContainer: {
        flex: 2,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-evenly'
    },
    ButtonStyles: {
        padding: 10,
        height: 60,
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgrey',
        borderWidth: 1
    },
    submitButtonContainer: {
        alignSelf: 'baseline',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 10,
        width: '90%',
    },
    submitButtonView: {
        backgroundColor: 'lightgrey',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
    },
    submitButtonText: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
    },

    header: {
        height: 60,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 2,
    },
    headerText: {
        fontSize: 25,  
    },
    footer: {
        bottom: 5,
        alignSelf: 'center',
        height: 20,
        width: '100%',
    },
    submitButton: {
        width: '100%',
        height: 10,
        borderRadius: 5,
        borderColor: 'darkgrey',
        borderWidth: 1,
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
    headerCancel: {
        fontSize: 19,
    }    
})