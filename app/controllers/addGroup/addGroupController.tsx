import React, {Component} from 'react';
import {View, Text, Picker, PickerItem, StyleSheet, Button, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import { Header, Input } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {sportList} from '../../shared/sportlist/sportList';

type propValues = {
    SportChoice: string,
    DifficultyLevel: string,
    NumPeople: number,
}

type stateValues ={
    SportChoice: string,
    DifficultyLevel: string
    NumPeople: number
}
export default class AddGroup extends Component<propValues, stateValues> {
    constructor(props) {
        super(props);
        this.state = {
            SportChoice: 'Choose a Sport',
            DifficultyLevel: 'Choose a Difficulty',
            NumPeople: 0
        };
    }

    populateSportsDropdown(): Object[] {
        let pickerList = [];
        sportList.sort().forEach(sport => {
            pickerList.push(
                <Picker.Item
                    label = {sport}
                    value = {sport}
                />
            )    
        });
        return pickerList;
    }

    populateNumPeopleDropdown(): Object[] {
        let pickerList = [];
        let num = 0;
        let desNum = 30;
        while (num < desNum) {
            pickerList.push(
                <Picker.Item
                    label= {num.toString()}
                    value={num.toString()}
                />
            );
            num = num + 1;
        }
        return pickerList;
    }

    render() {
        return(
            <KeyboardAwareScrollView 
                contentContainerStyle={styles.container}   
            >
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
                    <Picker
                        selectedValue = {this.state.SportChoice}
                        onValueChange={(itemValue) => {
                            this.setState({SportChoice: itemValue});
                        }}
                    >
                        <Picker.Item label='Choose a Sport' value='Default Value' />
                        {this.populateSportsDropdown()}
                    </Picker>
                </View>
                
                <View style={styles.picker}>
                    <Picker
                        selectedValue = {this.state.DifficultyLevel}
                        onValueChange={(itemValue) => {
                            this.setState({DifficultyLevel: itemValue});
                        }}
                    >
                        <Picker.Item label='Choose a Difficulty' value='none' />
                        <Picker.Item label="Beginner" value='Beginner'/>
                        <Picker.Item label="Intermediate" value='Intermediate'/>
                        <Picker.Item label="Advanced" value='Advanced'/>
                    </Picker>
                </View>

                <View style={styles.picker}>
                    <Picker
                        selectedValue = {this.state.NumPeople}
                        onValueChange={(itemValue) => {
                            this.setState({NumPeople: itemValue});
                        }}
                    >
                        <Picker.Item label='Choose Number of People Needed' value='0' />
                        {this.populateNumPeopleDropdown()}
                    </Picker>
                </View>

                <View style={styles.textBox}>
                    <Text style={{color: 'black', alignSelf: 'center'}}>
                        Please Input a Location:
                    </Text>
                </View>

                <View style={styles.ButtonContainer}>
                       <TouchableOpacity
                            style = {{flex: 1, height: 50}}
                            onPress={() => {
                                console.log("you pressed use current")
                            }}
                       >
                            <View style={styles.ButtonStyles}>
                                <Text style={{color: 'black'}}>
                                    Use Current
                                </Text>
                            </View>
                       </TouchableOpacity>

                    <TouchableOpacity 
                        style={{flex:1, height: 50}}
                        onPress={()=>{
                        console.log('You Pressed Choose from map')
                        }}
                    >
                        <View style={styles.ButtonStyles}>
                            <Text style={{color: 'black'}}>
                                Choose From a Map
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
                        console.log('Hello');
                    }}
                >
                    <View style={styles.submitButtonView}>
                        <Text style={styles.submitButtonText}>
                            CREATE
                        </Text>  
                    </View>       
                </TouchableOpacity>
            </KeyboardAwareScrollView> 
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
        borderWidth: 1,
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