import React, {Component} from 'react';
import {View, Text, Picker, PickerItem, StyleSheet, Button, TouchableOpacity} from 'react-native';

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

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.picker}>
                    <Picker
                        selectedValue = {this.state.SportChoice}
                        onValueChange={(itemValue) => {
                            this.setState({SportChoice: itemValue});
                        }}
                    >
                        <Picker.Item label='Choose a Sport' value='Default Value' />
                        <Picker.Item label="Soccer" value='Soccer'/>
                        <Picker.Item label="Hockey" value='Hockey'/>
                        <Picker.Item label="Running" value='Running'/>
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
                        <Picker.Item label="1" value='1'/>
                        <Picker.Item label='2' value='2'/>
                        <Picker.Item label="3" value='3'/>
                    </Picker>
                </View>

                <View style={styles.textBox}>
                    <Text style={{color: 'black'}}>
                        Please Input a Location:
                    </Text>
                </View>
                <View style={styles.ButtonContainer}>
                    
                       <TouchableOpacity
                            style = {{flex: 1}}
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
                        style={{flex:1}}
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

            </View> 
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    picker: {
        flex: 1,
        justifyContent: 'center',
        borderColor: 'lightgrey',
        borderBottomWidth: 1,
        maxHeight: 60,
    },
    textBox: {
        flex: 1,
        justifyContent: 'center',
        maxHeight: 50,
        paddingLeft: 10
    },
    ButtonContainer: {
        flex: 2,
        flexDirection: 'row',
        maxHeight: 60,
        justifyContent: 'space-evenly'
    },
    ButtonStyles: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgrey',
        borderWidth: 1
    }
})