import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Modal } from "react-native";

import { ImageSliderType } from "../../data/SliderData";
import { LinearGradient } from "react-native-linear-gradient";

import { ModalAtivo } from "../Modal";

import Animated from "react-native-reanimated";

import Feather from 'react-native-vector-icons/Feather';


type Props = {
    item: ImageSliderType;
    index: number;
};


const {width} = Dimensions.get('screen')

const SwiperItem = ({ item, index }: Props) => {

    const [ modalVisivel, setModalVisivel ] = useState(false);

    return(
        <Animated.View style={[styles.itemContainer]}>
            <Image source={item.image} style={styles.image}/>
            
            <LinearGradient 
                colors={['transparent', 'rgba(0,0,0,0.8)']} 
                style={styles.background}
            >
                <View style={{ alignItems: 'flex-end'}}></View>
                
                <TouchableOpacity                 
                    style={{ justifyContent: 'center'}}
                    onPress={() => setModalVisivel(true)}
                >
                    <View style={styles.boxNomeIdade}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.idade}>{item.idade}</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Feather name="map-pin" size={20} color={'#fff'}/>
                        <Text style={styles.localizacao}>{item.localizacao}</Text>
                    </View>
                </TouchableOpacity>

                <Modal
                    visible={modalVisivel}
                    transparent={true}
                    onRequestClose={ () => setModalVisivel(false)}
                >
                    <ModalAtivo
                        handleClose={()=> setModalVisivel(false)}
                        handleTitle={item.title}
                        handleImage={item.image}
                        handleIdade={item.idade}
                        handleLocalizacao={item.localizacao}
                        handleSexo={item.sexo}
                        handleVacinado={item.vacinado}
                        handleRaca={item.raca}
                        handlePerfil1={item.perfil1}
                        handlePerfil2={item.perfil2}
                    />
                </Modal>
            
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
        width: width,
        marginTop: 17.5,
    },

    image: {
        width: 400, 
        height: 500,
        borderRadius: 15,
    },

    background: {
        marginTop: -20,
        position: 'absolute',
        width: 400,
        height: 500,
        padding: 20,
        justifyContent: 'space-between',
    },

    boxNomeIdade: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 2.5 
    },

    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '600',
        letterSpacing: 1.5
    },

    idade: {
        marginLeft: 15,
        color: '#fff',
        fontSize: 18,
        letterSpacing: 1.2
    },

    localizacao: {
        marginLeft: 5,
        color: '#fff',
        fontSize: 15,
        letterSpacing: 1.2
    }
})
