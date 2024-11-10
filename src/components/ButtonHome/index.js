import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Feather from 'react-native-vector-icons/Feather';

export default function ButtonHome({funcao, name, size, color}){
    return(
        <TouchableOpacity
            onPress={funcao}
        >
            <View
                style={[styles.buttonCircleMenor, { borderColor: color }]}>
                <Feather name={name} size={size} color={color}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonCircleMenor: {
        marginTop: 15,
        borderWidth: 3,
        borderRadius: 35,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
