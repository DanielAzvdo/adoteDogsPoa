import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

import MapViewDirections from "react-native-maps-directions";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Maps extends Component{

    constructor(props){
        super(props);
        this.state = {
            region:{
                latitude: -30.02755139772587, 
                longitude: -51.175382761747485,
                latitudeDelta: 0.0072,
                longitudeDelta: 0.0072
            },
            destLocation: null
        };
    }

    async componentDidMount(){
        Geolocation.getCurrentPosition(
           async ({coords:{latitude, longitude} }) => {
            this.setState({
                region:{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0072,
                    longitudeDelta: 0.0072
                }
            });
           },
           () => {},
           {
            timeout: 2000,
            maximumAge: 1000,
            enableHighAccuracy: true,

           }
        )
    }


    render(){

        const { region } = this.state;

        return(
            <View style={styles.container}>

                <MapView
                    ref={(map) => {this.map = map}}

                    mapType="standard" //standard, satellite ou  hybrid
                    style={styles.mapa}
                    region={region} 
                    showsTraffic={true}  
                    showsUserLocation
                    loadingEnabled
                >
                    {this.state.destLocation &&
                        <MapViewDirections
                            origin={this.state.region}
                            destination={this.state.destLocation}
                            apikey="AIzaSyARPM0HDc3DChJbc3zWu8w2aAzj83-0SM8"
                            strokeWidth={5}
                            strokeColor="#000"
                            onReady={result => {
                                this.map.fitToCoordinates(result.coordinates, {
                                    edgePadding:{
                                        right: 10,
                                        left: 10,
                                        top: 10,
                                        bottom: 10
                                    }
                                })
                            }}  
                        />
                    }

                </MapView>

                <View style={styles.boxButton}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {
                            this.setState({destLocation:{
                                latitude: -30.005351576941226,
                                longitude: -51.138174389846796          
                            }})
                        }}
                    >
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.textButton}>Abrigo</Text>
                            <MaterialIcons
                                name="pets"
                                size={15}
                                color='#FFF'
                            />
                        </View>
                        
                    </TouchableOpacity>
                </View>
                

            </View>
        )
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    mapa: {
        width: 350,
        height: 500
    },

    boxButton: {
        position: 'absolute', 
        top: '10%',
    },

    button: {
        backgroundColor: '#000',
        height: 40,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: '65%'
    },

    textButton: {
        color: '#FFF',
        marginRight: 5
    }
})