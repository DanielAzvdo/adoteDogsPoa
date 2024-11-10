import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function ModalAtivo({
        handleClose,
        handleTitle, 
        handleImage, 
        handleIdade, 
        handleLocalizacao, 
        handleSexo,
        handleVacinado,
        handleRaca,
        handlePerfil1,
        handlePerfil2
    }){

    return(
        <SafeAreaView style={styles.container}>

            <Image source={handleImage} style={[styles.image, {flex:1}]}/>

            <View 
                style={{
                    position: 'absolute', 
                    marginTop: 20, 
                    marginLeft: '85%'
                }}>
                <TouchableOpacity
                    onPress={handleClose}
                >
                    <MaterialIcons name="close" size={35} color='red'/>
                </TouchableOpacity>
            </View>
            
            
            <ScrollView style={{flex:1}}>
                   
                    <View style={[styles.boxGeral, {flexDirection: 'row', alignItems: 'center'}]}>
                        <Text style={styles.title}>{handleTitle}</Text>
                        <Text style={styles.idade}>{handleIdade}</Text>
                    </View>

                    <View style={[styles.boxRacaLocalizacao, {marginBottom: 10}]}>
                        <MaterialIcons name="pets" size={25} color='#fff'/>
                        <Text style={styles.texto}>{handleRaca} | </Text>
                        <Text style={styles.texto}>{handleSexo}</Text>
                    </View>

                    <View style={[styles.boxRacaLocalizacao, {marginBottom: 10}]}>
                        <MaterialIcons name="vaccines" size={25} color='green'/>
                        <Text style={[styles.texto, {color: 'green'}]}>{handleVacinado}</Text>
                    </View>

                    <View style={styles.boxRacaLocalizacao}>
                        <Feather name="map-pin" size={20} color={'#fff'}/>
                        <Text style={styles.texto}>{handleLocalizacao}</Text>
                    </View>

                    <View style={{borderBottomWidth: 0.5, borderColor: 'grey', marginTop: 10}}></View>

                    <View style={styles.boxGeral}>
                        <Text style={[styles.title, {fontSize: 25}]}>Básico</Text>

                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>

                            <View style={styles.basicoTexts}>
                                <Text style={{color: '#fff'}}>{handleRaca}</Text>
                            </View>
                            <View style={styles.basicoTexts}>
                                <Text style={{color: '#fff'}}>{handleVacinado}</Text>
                            </View>
                            <View style={styles.basicoTexts}>
                                <Text style={{color: '#fff'}}>{handleSexo}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{borderBottomWidth: 0.5, borderColor: 'grey', marginTop: 10}}></View>

                    <View style={styles.boxGeral}>
                        <Text style={[styles.title, {fontSize: 25}]}>Perfil</Text>

                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>

                            <View style={styles.basicoTexts}>
                                <Text style={{color: '#fff'}}>{handlePerfil1}</Text>
                            </View>
                            <View style={styles.basicoTexts}>
                                <Text style={{color: '#fff'}}>{handlePerfil2}</Text>
                            </View>
                        </View>
                    </View>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },

    image: {
        width: 400, 
        height: 350,
    },

    boxGeral: { 
        marginTop: 7.5,
        marginBottom: 5,
        marginLeft: 25
    },

    title: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '600',
        letterSpacing: 1.5
    },

    idade: {
        marginLeft: 15,
        color: '#fff',
        fontSize: 25,
        letterSpacing: 1.2
    },

    boxRacaLocalizacao: {
        flexDirection: 'row',
        marginLeft: 25,
        alignItems: 'center'
    },

    texto: {
        marginLeft: 5,
        color: '#fff',
        fontSize: 20,
        letterSpacing: 1.2
    },

    basicoTexts: {
        marginTop: 10,
        marginRight: 7.5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#fff',
        width: 125,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    }

})