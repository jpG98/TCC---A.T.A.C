import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageWidth = windowWidth * 0.5; // Defina a largura da imagem como metade da largura da tela
const imageHeight = windowHeight * 0.3; // Defina a altura da imagem como metade da altura da tela

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeError, setNomeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);

  const handleCadastro = () => {
    if (!nome.trim()) {
      setNomeError(true);
      return;
    }
    if (!email.trim()) {
      setEmailError(true);
      return;
    }
    if (!senha.trim()) {
      setSenhaError(true);
      return;
    }
    // Aqui você pode adicionar a lógica de cadastro
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <LinearGradient
        colors={['#77B28C', '#F9E9C1']}
        style={styles.background}>
        <View style={styles.overlay}>

          <Text style={styles.title}>Crie uma Conta.</Text>

          <TextInput
            placeholder="Nome"
            style={[styles.input, nomeError && styles.errorInput]}
            value={nome}
            onChangeText={text => {
              setNome(text);
              setNomeError(false);
            }}
          />
          {nomeError && <Text style={styles.errorText}>Campo obrigatório</Text>}
          <TextInput
            placeholder="Email"
            style={[styles.input, emailError && styles.errorInput]}
            value={email}
            onChangeText={text => {
              setEmail(text);
              setEmailError(false);
            }}
          />
          {emailError && <Text style={styles.errorText}>Campo obrigatório</Text>}
          <TextInput
            placeholder="Senha"
            style={[styles.input, senhaError && styles.errorInput]}
            secureTextEntry={true}
            value={senha}
            onChangeText={text => {
              setSenha(text);
              setSenhaError(false);
            }}
          />
          {senhaError && <Text style={styles.errorText}>Campo obrigatório</Text>}
          <TouchableOpacity style={styles.buttonCadastro} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

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
    backgroundColor: 'rgba(0,0,0,0.0)', // Adiciona uma opacidade ao fundo
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(1,1,1,0.4)',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(1,1,1,0.4)',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(1,1,1,0.4)',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonCadastro: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgba(1,1,1,0.4)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgba(1,1,1,0.4)',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroScreen;