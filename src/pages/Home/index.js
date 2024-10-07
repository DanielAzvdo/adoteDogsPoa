import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Swiper from "../../components/Swiper";
import { ImageSlider } from "../../data/SliderData";

import Feather from 'react-native-vector-icons/Feather';

export default function Home(){

    const navigation = useNavigation();

    function irDetalhes(){
        navigation.navigate('Detalhes')
    }

    return(
        <View style={styles.container}>
            
            <View style={styles.containerButtonsSuperior}>
                <TouchableOpacity>
                    <View>
                        <Feather name="settings" size={35} color={'grey'}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSuperior}>
                    <View>
                        <Feather name="user" size={30} color={'#fff'}/>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{position: 'absolute', height: '85%'}}>
                <Swiper itemList={ImageSlider}/>
            </View>
            
            <View style={styles.containerButtons}>

                <View style={styles.boxButtons}>
                    <TouchableOpacity >
                        <View>
                            <Feather name="x" size={50} color={'red'}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.boxButtons}>
                    <TouchableOpacity
                    onPress={ irDetalhes }
                    >
                        <View 
                            style={{
                                marginBottom: 15,
                                backgroundColor: 'grey',
                                borderRadius: 35,
                                width: 70,
                                height: 70,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Feather name="file-text" size={60} color={'#fff'}/>
                        </View>
                    </TouchableOpacity>
                </View>                       

                <View style={styles.boxButtons}>
                    <TouchableOpacity>
                        <View>
                            <Feather name="heart" size={50} color={'green'}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View> 
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerButtonsSuperior: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',      
        marginTop: 15,
        padding: 10,
    },

    buttonSuperior: {
        backgroundColor: 'grey', 
        borderRadius: 20, 
        width: 40, 
        height: 40, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    containerButtons: {
        width: '85%',
        marginTop: 450,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    boxButtons: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '105%'
    },

})