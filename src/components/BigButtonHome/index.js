import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Feather from 'react-native-vector-icons/Feather';

export default function BigButtonHome({funcao, name, size, color}){
    return(
        <TouchableOpacity
            onPress={funcao}
        >
            <View
                style={[styles.buttonCircle, {borderColor: color}]}>
                <Feather name={name} size={size} color={color}/>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    buttonCircle: {
        borderWidth: 3,
        borderRadius: 35,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }

})
