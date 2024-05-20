import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './src/telas/cadastro'; // Importa a tela de cadastro

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageWidth = windowWidth * 0.5;
const imageHeight = windowHeight * 0.3;

const Stack = createStackNavigator();

const TeladeLogin = ({ navigation }) => {
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
          <Image
            source={require('../TCC-Mobile/assets/logoTCC3.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Mude o Mundo.</Text>
          <Text style={styles.subtitle}>Começa por Você.</Text>
          <TextInput
            placeholder="Login"
            placeholderTextColor="#fff"
            style={[styles.input, loginError && styles.errorInput]}
            value={login}
            onChangeText={text => {
              setLogin(text);
              setLoginError(false);
            }}
          />
          {loginError && <Text style={styles.errorText}>Campo obrigatório</Text>}
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#fff"
            style={[styles.input, senhaError && styles.errorInput]}
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
          <Text style={styles.botaocadastro} onPress={() => navigation.navigate('TeladeCadastro')}>Não Possui Cadastro?</Text>
        </View>
      </LinearGradient>
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
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(1,1,1,0.4)',
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'rgba(1,1,1,0.4)',
    marginBottom: 20,
  },
  botaocadastro: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(1,1,1,0.4)',
    marginTop: 9,
  },
  buttonEntrar: {
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(1,1,1,0.4)',
    position: 'absolute',
    top: '20%',
    left: '50%',
    marginTop: -100,
    marginLeft: -100,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: imageWidth / 2,
    resizeMode: 'cover',
  },
  Textobranco: {
    color: '#FFFFFF',
  },
});

export default TeladeLogin;
