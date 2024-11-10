import React from "react";
import { View, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Swiper from "../../components/Swiper";
import { ImageSlider } from "../../data/SliderData";

import Logo from "../../components/Logo";
import ButtonHome from "../../components/ButtonHome";
import BigButtonHome from "../../components/BigButtonHome";


export default function Home(){

    const navigation = useNavigation();

    function irDetalhes(){
        navigation.navigate('Detalhes')
    }

    function irFormulario(){
        navigation.navigate('Formulário')
    }

    return(
        <View style={styles.container}>

            <View style={styles.logo}>
                <Logo/>
            </View>

            <View style={styles.swiper}>
                <Swiper itemList={ImageSlider}/>
            </View>
            
            <View style={styles.containerButtons}>

                <ButtonHome 
                    funcao={()=>{}}
                    name={'refresh-ccw'} 
                    size={25} 
                    color={'#757575'}
                />
                
                <BigButtonHome 
                    funcao={()=>{}}
                    name={'x'} 
                    size={50} 
                    color={'#ff4d4d'}
                />
                
                <ButtonHome 
                    funcao={irDetalhes}
                    name={'star'} 
                    size={30} 
                    color={'#66a3ff'}
                />
                
                <BigButtonHome 
                    funcao={irFormulario}
                    name={'heart'} 
                    size={50} 
                    color={'#00b300'}
                />
                
                <ButtonHome 
                    funcao={()=>{}}
                    name={'zap'} 
                    size={30} 
                    color={'#660066'}
                />

            </View> 
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

    logo: {
        marginTop: -20
    },

    swiper: {
        position: 'absolute',
        height: '85%'
    },

    containerButtons: {
        width: '85%',
        marginTop: 510,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

})