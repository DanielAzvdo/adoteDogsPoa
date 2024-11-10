import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Modal, TouchableOpacity } from "react-native";

import { ModalFormAtivo } from "../../components/Modal Form";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../components/Logo";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Formulario(){

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [profissao, setProfissao] = useState('');

    const [ modalVisivel, setModalVisivel ] = useState(false);

    const navigation = useNavigation();

    function limpar(){
        setNome(''),
        setCpf(''),
        setNacionalidade(''),
        setProfissao('')
    }

    function enviar(){
        if(nome === '' || cpf === '' || nacionalidade === '' || profissao === '' ){
            return(alert("PREENCHA TODOS OS CAMPOS"))
        };
        return(
            setModalVisivel(true)
        );
    }

    function enviarContrato(){
        setModalVisivel(false),
        alert("CONTRATO ENVIADO COM SUCESSO"),
        navigation.navigate('HomeStack')
    }

    return(
        <View style={styles.container}>

            <Logo/>

            <Text style={styles.title}>Formulário de Adoção Responsável</Text>
            
            <View style={{padding: 20}}>
                <Text style={styles.text}>Preencha as informações abaixo e Clique em Enviar para visualizar o nosso Contrato!</Text>
            </View>

            <TextInput
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                placeholder="  Seu nome"
            />
            <TextInput
                style={styles.input}
                onChangeText={setCpf}
                value={cpf}
                placeholder="  CPF"
            />            
            <TextInput
                style={styles.input}
                onChangeText={setNacionalidade}
                value={nacionalidade}
                placeholder="  Sua Nacionalidade"
            />
            <TextInput
                style={styles.input}
                onChangeText={setProfissao}
                value={profissao}
                placeholder="  Sua Profissão"
            />

            <View style={styles.boxButtonModal}>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: '#ff4d4d',}]}
                    onPress={limpar} 
                >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.textButton}>Limpar</Text>
                        <MaterialIcons name="delete" size={30} color='#fff'/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {backgroundColor: '#00b300',}]}
                    onPress={enviar} 
                >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.textButton}>Enviar</Text>
                        <MaterialIcons name="send" size={25} color='#fff'/>
                    </View>
                </TouchableOpacity>
            </View>


            <Modal
                visible={modalVisivel}
                transparent={true}
                onRequestClose={ () => setModalVisivel(false)}
            >
                <ModalFormAtivo
                    handleClose={()=> setModalVisivel(false)}
                    handleEnviarContrto={() => enviarContrato()}
                    handleNome={nome}
                    handleCpf={cpf}
                    handleNacionalidade={nacionalidade}
                    handleProfissao={profissao}
                />
            </Modal>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },

    title: {
        marginTop: 10,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },

    text: {
        color: '#fff',
        fontSize: 20,
    },

    input:{
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 15,
        textAlign: 'left',
        width: '85%',
        fontSize: 18
    },

    boxButtonModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
        width: '85%'
    },

    button: {
        marginTop: 15,
        width: '40%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    textButton: {
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginRight: 7.5
    }

})