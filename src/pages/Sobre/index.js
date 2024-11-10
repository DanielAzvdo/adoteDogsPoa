import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Logo from "../../components/Logo";

export default function Sobre(){
    return(
        <View style={styles.container}>

            <Logo/>

            <View style={styles.boxSobre}>

                <Text style={styles.title}>Sobre o Projeto</Text>

                <Text style={styles.text}>
                    Após a enchente ocorrida em Porto Alegre e em algumas cidades vizinhas, tivemos um
                    crescimento expressivo de abrigos para Pets. Esses locais que causaram um impacto 
                    positivo significativo, estão encerrando as suas atividades por falta de financiamento.
                    {'\n'}{'\n'}
                    Alinhado ao fato anterior, tem-se os vários pets que ainda não conseguiram reencontrar 
                    seus donos, ou até mesmo um lugar para chamar de lar.{'\n'}{'\n'} 
                    
                    Assim, criamos o aplicativo AdoteDogsPoa com o objetivo de aumentar a visibilidade desses 
                    cachorros, dando agilidade ao processo de adoção, que entendemos ser uma demanda social urgente.{'\n'}
                    </Text>

                <Text style={styles.text}>
                    O projeto foi idealizado para a cadeira "Projeto Integrador - Sistema Mobile" e realizado por:{'\n'}{'\n'}
                    Bruno Righes{'\n'}
                    Daniel R. Barbosa De Azevedo{'\n'}
                    Mateus Moraes{'\n'}
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000'
    },

    boxSobre: {
        backgroundColor: '#fff',
        marginTop: 10,
        width: '85%',
        height: '80%',
        borderRadius: 15,
        padding: 18,
    },

    title: {
        color: '#000', 
        fontSize: 18, 
        fontWeight: 'bold', 
        alignSelf: 'center',
        marginBottom: 5
    },

    text: {
        color: '#000',
        fontSize: 15,
        textAlign: 'justify'
    }
})