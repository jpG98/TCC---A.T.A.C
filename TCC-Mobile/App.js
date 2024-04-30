import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView,Stack } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import cadastro from './src/telas/cadastro';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageWidth = windowWidth * 0.5; // Defina a largura da imagem como metade da largura da tela
const imageHeight = windowHeight * 0.3; // Defina a altura da imagem como metade da altura da tela

const LoginScreen = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);

  const handleLogin = () => {
    if (!login.trim()) {
      setLoginError(true);
      return;
    }
    if (!senha.trim()) {
      setSenhaError(true);
      return;
    }
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login:', login);
    console.log('Senha:', senha);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <LinearGradient
        colors={['#77B28C', '#F9E9C1']}
        style={styles.background}>
        <View style={styles.overlay}>

          <Text style={styles.title}>Mude o Mundo.</Text>

          <Text style={styles.subtitle}>Começa por Você.</Text>

          <TextInput
            placeholder="Login"
            style={[styles.input, loginError && styles.errorInput, styles.Textobranco]} // Adicionando estilo para o texto branco
            value={login}
            onChangeText={text => {
              setLogin(text);
              setLoginError(false);
            }}
          />
          {loginError && <Text style={styles.errorText}>Campo obrigatório</Text>}
          <TextInput
            placeholder="Senha"
            style={[styles.input, senhaError && styles.errorInput, styles.Textobranco]} // Adicionando estilo para o texto branco
            secureTextEntry={true}
            value={senha}
            onChangeText={text => {
              setSenha(text);
              setSenhaError(false);
            }}
          />
          {senhaError && <Text style={styles.errorText}>Campo obrigatório</Text>}
          <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.botaocadastro} onPress={() => navigation.navigate('Cadastro')}>Não Possui Cadastro?</Text>


        </View>
      </LinearGradient>
      <View style={styles.circle}>
        <Image
          source={require('../TCC-Mobile/assets/logoTCC3.png')} // logo 
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.0)', // Adiciona uma opacidade ao fundo
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {//titulo
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(1,1,1,0.4)',
    marginBottom: 3,
  },
  subtitle: { //subtitulo
    fontSize: 23,
    fontWeight: 'bold',
    color: 'rgba(1,1,1,0.4)',
    marginBottom: 20,

  },
  botaocadastro: { //subtitulo
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(1,1,1,0.4)',
    marginTop: 9,

  },
  buttonEntrar: { //subtitulo
    width: '40%',
    height: 40,
    backgroundColor: 'rgba(1,1,1,0.4)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },


  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(1,1,1,0.4)',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(1,0,1,0.4)',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgba(1,1,1,0.4)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

 
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(1,1,1,0.4))', // Cor do círculo com opacidade de 30%
    position: 'absolute',
    top: '20%', // Posiciona o círculo no meio verticalmente
    left: '50%', // Posiciona o círculo no meio horizontalmente
    marginTop: -100, // Ajusta a margem superior para centralizar
    marginLeft: -100, // Ajusta a margem esquerda para centralizar
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: imageWidth / 2, // Para garantir que a imagem seja um círculo
    resizeMode: 'cover',
  },
  Textobranco: {
    color: '#FFFFFF', 
  },

});

export default LoginScreen;
