import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Logo(){
    return(
        <View>
            <Image source={require('../../../assets/images/Logo.png')} style={styles.imageLogo}/>
        </View>
    );
}


const styles = StyleSheet.create({
    imageLogo: {
        width: 70, 
        height: 70,
        marginTop: 2
    }
})