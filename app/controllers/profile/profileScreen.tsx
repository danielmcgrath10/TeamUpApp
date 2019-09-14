import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import  Icon from 'react-native-vector-icons/Ionicons';
import { UserProfile, MockProfile } from '../../shared/models/Mock-Profile';

type Props = {
    profileInfo: UserProfile
}
type State = {
    loading: boolean,
    profileInfo: UserProfile
}

export default class ProfileScreen extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            profileInfo: MockProfile,
        }
    }

    // componentDidMount() {
    //     //TODO: this is a pre-built thing I made in anticipation but I knoe it needs to change.
    //     fetch()
    //     .then(response => response.json())
    //     .then((responseJson) => {
    //         this.setState({
    //             loading: false,
    //             profileInfo: responseJson
    //         })
    //     })
    //     .catch(err => console.log(err))
    // }

    render() {
        // if(this.state.loading) {
        //     return (
        //         <View style={styles.loadingScreen}>
        //             <ActivityIndicator size='large'/>
        //         </View>
        //     )
        // }

        return (
            this.state.profileInfo ?
            (
                <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.upperProfile}>
                        
                        <TouchableOpacity 
                            style={styles.settingsButton}
                        >
                            <Icon
                                name="md-settings"
                                size={30}
                            />
                        </TouchableOpacity>
                        

                        <TouchableOpacity style={styles.fabButton}
                            onPress= {() => {
                            console.log('Hello world');
                            }}
                        >
                            <View >
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lowerProfile}>
                        <View style={styles.profileStats}>
                            <View style={styles.profileStatBox}>
                                <Text>
                                    Friends: {this.state.profileInfo.friends ? this.state.profileInfo.friends : 'None'}
                                </Text>
                            </View>
                            <View style={styles.profileStatBox}>
                                <Text>
                                    Rating: {this.state.profileInfo.rating ? this.state.profileInfo.rating : 'No Rating to Show'}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.profileDescriptors}>
                            <View style={styles.profileSummary}>
                                {this.state.profileInfo.summary ? 
                                    <Text style={styles.profileSummaryText}>
                                        {this.state.profileInfo && this.state.profileInfo.summary}
                                    </Text> :
                                    <Text style={styles.profileSummaryText}>
                                        No Summary to Show
                                    </Text>
                                }
                            </View>
                        </View>
                    </View>

                </View>
                </SafeAreaView>
            ) :
            (
                <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.upperProfile}>
                        
                        <TouchableOpacity 
                            style={styles.settingsButton}
                        >
                            <Icon
                                name="md-settings"
                                size={30}
                            />
                        </TouchableOpacity>
                        

                        <TouchableOpacity style={styles.fabButton}
                            onPress= {() => {
                            console.log('Hello world');
                            }}
                        >
                            <View >
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lowerProfile}>
                        <View style={styles.profileStats}>
                            <View style={styles.profileStatBox}>
                                <Text>
                                    Friends: {'None'}
                                </Text>
                            </View>
                            <View style={styles.profileStatBox}>
                                <Text>
                                    Rating: {'No Rating to Show'}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.profileDescriptors}>
                            <View style={styles.profileSummary}>
                                <Text style={styles.profileSummaryText}>
                                    No Summary to Show
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>
                </SafeAreaView>
            )
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    upperProfile: {
        flex: 2,
        backgroundColor: 'lightgrey'
    },
    fabButton: {
        height: '75%',
        width: '70%',
        borderRadius: 15,
        borderColor: 'darkgrey',
        borderWidth: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 70,
        alignSelf: 'center',
    },
    lowerProfile: {
        flex: 1,
    },
    profileStats: {
        flexDirection: 'row',
    },
    profileStatBox: {
        borderColor: 'darkgrey',
        borderWidth: 1,
        height: 50,
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    statBoxText: {
        
    },
    profileDescriptors: {
        flex:2,
        flexDirection: 'column'
    },
    profileSummary: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
    },
    profileFavSports: {
        flex: 1,
    },
    settingsButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    loadingScreen: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    profileSummaryText: {
        padding: 5,
        alignSelf: 'center'
    }
})