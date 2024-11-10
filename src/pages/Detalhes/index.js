import React from "react";
import { View, StyleSheet } from "react-native";

import Logo from "../../components/Logo";
import Maps from "../../components/Maps";

export default function Detalhes(){
    return(
        <View style={styles.container}>    
            <Logo/>
            <Maps/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
})