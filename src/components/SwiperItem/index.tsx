import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import { ImageSliderType } from "../../data/SliderData";
import { LinearGradient } from "react-native-linear-gradient";

import Animated from "react-native-reanimated";


type Props = {
    item: ImageSliderType;
    index: number;
};


const {width} = Dimensions.get('screen')

const SwiperItem = ({ item, index }: Props) => {

    return(
        <Animated.View style={[styles.itemContainer]}>
            <Image source={item.image} style={styles.image}/>
            
            <LinearGradient 
                colors={['transparent', 'rgba(0,0,0,0.8)']} 
                style={styles.background}
            >
                <View style={{ alignItems: 'flex-end'}}></View>
                
                <View style={{ gap: 20}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
              
                </View>
            
            </LinearGradient>
        </Animated.View>
    );
}

export default SwiperItem

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: width
    },

    image: {
        width:300, 
        height:500, 
        borderRadius: 20,
    },

    background: {
        position: 'absolute',
        width: 300,
        height: 500,
        padding: 20,
        justifyContent: 'space-between',
        borderRadius: 20,
    },

    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 1.5
    },

    description: {
        color: '#fff',
        fontSize: 12,
        letterSpacing: 1.2
    },
})
