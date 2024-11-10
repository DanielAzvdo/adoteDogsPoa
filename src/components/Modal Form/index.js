import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Logo from "../Logo";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export function ModalFormAtivo({
        handleClose,
        handleEnviarContrto,
        handleNome,
        handleCpf,
        handleNacionalidade,
        handleProfissao,
    }){

    return(
        <SafeAreaView style={styles.container}>

            <View 
                style={{
                    marginTop: 20, 
                    marginLeft: '85%'
                }}>
                <TouchableOpacity
                    onPress={handleClose}
                >
                    <MaterialIcons name="close" size={35} color='red'/>
                </TouchableOpacity>
            </View>

            <View style={styles.containerBoxContrato}>

                <View style={styles.boxContrato}>
                    
                    <Text style={styles.title}>CONTRATO DE ADOÇÃO RESPONSÁVEL</Text>

                    <Text style={styles.text}>
                        {handleNome}, CPF: {handleCpf}, {handleNacionalidade}, Profissão: {handleProfissao}, doravante denominado ADOTANTE.
                        
                        
                        {'\n'}{'\n'}A parte ADOTANTE vem por meio deste contrato, solicitar a adoção de um cachorro do nosso canil, 
                        encontrado através do aplicativo AdoteDogsPoa.{'\n'}{'\n'}

                        {handleNome}, ADOTANTE, se compromete ainda com os termos de uma ADOÇÃO RESPONSÁVEL, sob pena de estar descumprindo a Lei 14.064/2020,
                        que versa sobre as punições para quem maltratar cães e gatos.
                    </Text>
                    
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={handleEnviarContrto}
                            style={[styles.button, {backgroundColor: '#ff4d4d',}]}
                        >
                            <Text style={[styles.text, {color: '#fff', fontWeight: 'bold'}]}>Enviar Contrato</Text>
                        </TouchableOpacity>
                        <Logo/>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        alignSelf: 'center',
        alignItems: 'center',
        width: '95%',
        height: '90%',
        backgroundColor: 'grey',
        borderRadius: 25,
    },

    containerBoxContrato: {
        backgroundColor: '#fff',
        borderRadius: 15,
        width: '95%',
        height:'90%',
        
        alignItems: 'center'
    },

    boxContrato: {
        width: '85%',
        height:'100%',
    },

    title:{
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 25
    },

    text: {
        color: '#000',
        fontSize: 18,
        textAlign: 'justify'
    },

    button: {
        marginTop: -20,
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
})