import React, {Component} from 'react';
import {View, 
    Text, 
    Picker, 
    PickerItem, 
    StyleSheet, 
    Button, 
    TouchableOpacity, 
    TextInput, 
    KeyboardAvoidingView, 
    SafeAreaView, 
    Alert, 
    Image,
    Keyboard
} from 'react-native';
import { Header, Input } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {sportList} from '../../shared/sportlist/sportList';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import { db } from '../../shared/Firebase';
import { firestore } from 'firebase';


//We gotta add headers, descriptions, comments, etc. Lets be professional here

//TODO: Add correct data passage to the rest of the dialogue inputs


type propValues = {
    SportChoice: string,
    DifficultyLevel: string,
    NumPeople: number,
    navigation: any
}

type stateValues ={
    SportChoice: Item,
    DifficultyLevel: Item,
    NumPeople: Item,
    CurrentUser: string,
    CurrentLatitude: number,
    CurrentLongitude: number,
    Message: string
}
export default class AddGroup extends Component<propValues, stateValues> {
    constructor(props) {
        super(props);
        this.state = {
            SportChoice: {label: 'Choose a Sport...', value: 'undefined'},
            DifficultyLevel: {label: 'Select Difficulty Level...', value: 'Not Specified'},
            NumPeople: {label: 'Number of People Desired...', value: 'Not Specified'},
            CurrentUser: "Mr. Placeholder",
            CurrentLatitude: 69,
            CurrentLongitude: 69,
            Message: "Placeholder message (bring weed)"
        };
    }

    populateSportsDropdown(): Item[] {
        let pickerList = [];
        sportList.sort().forEach(sport => {
            pickerList.push(
                {
                    label: sport,   //Why have a label and a value if they're going to be set to the same thing
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
    writeGroupToFirestore(): void {
        let newDoc = db.collection("groups").doc("testGroup");
        let geoPnt = new firestore.GeoPoint(this.state.CurrentLatitude, this.state.CurrentLongitude);
        let setGroup = newDoc.set({
            active: true,
            message: "bring weed",
            openSpots: this.state.NumPeople.value,
            playingCurrently: [],
            region: geoPnt,
            latDelta: 1,
            lonDelta: 1,
            skillLevel: this.state.DifficultyLevel.value,
            sport: this.state.SportChoice.value,
            userId: this.state.CurrentUser,
        });
        //return setGroup
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
                        <Image style={{height: 40, width: 160}} source={require('../../shared/images/Icons/TeamUpEmblems/TEAMUPLOGO.png')}/>
                    </View>
                    <TouchableOpacity 
                        style = {styles.submitButton}
                        //onPress={() => this.props.navigation.goBack()}
                        onPress={() => this.writeGroupToFirestore()}
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
                            onValueChange={(value) => { //overuse of variable names. if the value of the RN picker is "value" then the name of the data in the state variables shouldn't be "value"
                                if(value.value === 'undefined') { //I believe 'value.value' is wrong and returns an undefined value
                                    Alert.alert('Need to Choose a Sport') //This alert should occur when the submit button is pressed, I can't get this alert to trigger
                                } else {
                                    this.setState({SportChoice: {label: value, value: value}}) //again, why have the 'label' in the data type if its never used
                                    console.log(this.state.SportChoice)
                                }
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
                            onValueChange={(value) => {
                                this.setState({DifficultyLevel: {label: value, value: value}})
                                console.log(this.state.DifficultyLevel)
                            }}
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
                            onValueChange={(value) => {
                                this.setState({NumPeople: {label: value, value: value}})
                                console.log(this.state.NumPeople)
                            }}
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
                                <Text style={{color: '#535353', fontSize: 20}}>
                                    Choose Location
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textBoxContainer}>
                        <TextInput
                            style={styles.textBox}
                            placeholder={'Add Notes Here'}
                            multiline = {true}
                        />
                    </View>
                    {/* <View style={{flex:1, justifyContent: 'center', alignSelf:'center'}}>
                        
                    </View> */}
                </View>
            </SafeAreaView>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    picker: {
        flex: 1,
        justifyContent: 'center',
        borderColor: '#535353',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        borderWidth: 1,
        // shadowColor: '#8e2224',
        shadowOffset: {
        width: 1.5,
        height: 5
        },
        shadowRadius: 2,
        shadowOpacity: 0.05
    },
    textBox: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 20,
    },
    ButtonContainer: {
        flex: 1,
        display: 'flex',
    },
    ButtonStyles: {
        flex: 1,
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#535353',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        // shadowColor: '#8e2224',
        shadowOffset: {
            width: 1.5,
            height: 5
        },
        shadowRadius: 2,
        shadowOpacity: 0.05
    },
    bodyContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    textBoxContainer: {
        flex: 7,
        display: 'flex',
        justifyContent: 'center',
        borderColor: '#535353',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white',
        // shadowColor: '#8e2224',
        shadowOffset: {
            width: 1.5,
            height: 5
        },
        shadowRadius: 2,
        shadowOpacity: 0.05
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
        color: 'black',
    }    
})