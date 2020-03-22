import React, {Component} from 'react';
import {View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    SafeAreaView, 
    Alert, 
    Image,
} from 'react-native';
import {sportList} from '../../shared/sportlist/sportList';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import { db } from '../../shared/Firebase';
import { firestore } from 'firebase';


//We gotta add headers, descriptions, comments, etc. Lets be professional here


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
export default function AddGroup({navigation}) {
    const [SportChoice, setSportChoice] = React.useState({label: 'Choose a Sport...', value: 'undefined'});
    const [DifficultyLevel, setDifficultyLevel] = React.useState({label: 'Select Difficulty Level...', value: 'Not Specified'});
    const [NumPeople, setNumPeople] = React.useState({label: 'Number of People Desired...', value: 'Not Specified'});
    
    
    //navigation.goBack()
    React.useLayoutEffect(() => {
        function writeGroupToFirestore(): Promise<void> {
            let newDoc = db.collection("groups").doc("testGroup");
            //let geoPnt = new firestore.GeoPoint(this.state.CurrentLatitude, this.state.CurrentLongitude);
            let setGroup = newDoc.set({
                active: true,
                //message: this.state.Message,
                openSpots: NumPeople.value,
                playingCurrently: [], //people will be added to this array as they join the game
                //region: geoPnt,
                //latDelta: 1,
                //lonDelta: 1,
                skillLevel: DifficultyLevel.value,
                sport: SportChoice.value,
                //userId: this.state.CurrentUser,
            });
            return setGroup
        }

        navigation.setOptions({
            headerTitle: () =>(
                <Image style={{height: 30, width: 120}} source={require('../../shared/images/Icons/TeamUpEmblems/TEAMUPLOGO.png')}/>
            ),
            headerRight: () => (
                <TouchableOpacity 
                    style = {styles.submitButton}
                    onPress={() => 
                        writeGroupToFirestore()
                        .then(function(){
                            console.log("Group Written Successfully");
                        })
                        .catch(function(error) {
                            console.error("Error writing document: ", error);
                        })
                    }
                >
                    <Text style={styles.headerSubmit}>
                        Submit
                    </Text>
                </TouchableOpacity>
            )
        })
    })

    function populateSportsDropdown(): Item[] {
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

    function populateNumPeopleDropdown(): Item[] {
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
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.bodyContainer}>
                <View style={styles.picker}>
                    <RNPickerSelect
                        style={{
                            inputIOS: {
                                color: 'black',
                                fontSize: 20,
                            }
                        }}
                        onValueChange={(value, index) => {
                            if(value === 'undefined') {
                                Alert.alert('Need to Choose a Sport')
                            } else (
                                setSportChoice({label: value, value: value})
                            )
                        }}
                        items={populateSportsDropdown()}
                        placeholder= {SportChoice}
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
                        placeholder= {DifficultyLevel}
                        onValueChange={(value) => {
                            console.log(value)
                            setDifficultyLevel({label: value, value: value})
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
                        placeholder={NumPeople}
                        onValueChange={(value) => console.log(value)}
                        items={populateNumPeopleDropdown()}
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
            </View>
        </SafeAreaView>
    )
    
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
        right: 20
    },
    headerSubmit: {
        fontSize: 19,
        color: '#007AFF',
    }    
})