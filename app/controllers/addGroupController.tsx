import React, {Component} from 'react';
import {View, Text, Picker, PickerItem, StyleSheet, Button, TouchableOpacity} from 'react-native';


export default class AddGroup extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state.SportChoice = 'Default Value';
    // }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.picker}>
                    <Picker
                        selectedValue = 'Choose a Sport'
                        onValueChange={(PickerItem) => {
                            //this.setState(this.props.SportChoice, PickerItem.label)
                            console.log('You chose:' + PickerItem.label)
                        }}
                    >
                        <PickerItem label='Choose a Sport' value='Default Value' />
                        <PickerItem label="hey" value='pick1'/>
                        <PickerItem label="there" value='pick2'/>
                        <PickerItem label="judge" value='pick3'/>
                    </Picker>
                </View>
                
                <View style={styles.picker}>
                    <Picker
                        selectedValue = "Choose a Difficulty"
                    >
                         <PickerItem label='Choose a Difficulty' value='Default Value' />
                        <PickerItem label="hey" value='pick1'/>
                        <PickerItem label="there" value='pick2'/>
                        <PickerItem label="judge" value='pick3'/>
                    </Picker>
                </View>

                <View style={styles.picker}>
                    <Picker
                        selectedValue = "Choose Number of People Needed"
                    >
                        <PickerItem label='Choose Number of People Needed' value='Default Value' />
                        <PickerItem label="hey" value='pick1'/>
                        <PickerItem label="there" value='pick2'/>
                        <PickerItem label="judge" value='pick3'/>
                    </Picker>
                </View>

                <View style={styles.textBox}>
                    <Text>
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
                                <Text>
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
                            <Text>
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
        maxHeight: 40,
        justifyContent: 'space-evenly'
    },
    ButtonStyles: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgrey',
        borderWidth: 0.5
    }
})