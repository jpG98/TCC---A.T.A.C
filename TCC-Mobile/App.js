import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
    <View style={styles.container}>
      <LinearGradient
        colors={['#77B28C','#F9E9C1']}
        style={styles.background}>
        <View style={styles.overlay}>
          
          <Text style={styles.title}>Mude o Mundo</Text>
          <TextInput
            placeholder="Login"
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
            style={[styles.input, senhaError && styles.errorInput]}
            secureTextEntry={true}
            value={senha}
            onChangeText={text => {
              setSenha(text);
              setSenhaError(false);
            }}
          />
          {senhaError && <Text style={styles.errorText}>Campo obrigatório</Text>}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={styles.circle}>
        <Image
          source={require('./sua-imagem.png')} // Substitua 'sua-imagem.png' pelo caminho da sua imagem
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
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
    backgroundColor: '#2980b9',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.3)', // Cor do círculo com opacidade de 30%
    position: 'absolute',
    top: '50%', // Posiciona o círculo no meio verticalmente
    left: '50%', // Posiciona o círculo no meio horizontalmente
    marginTop: -100, // Ajusta a margem superior para centralizar
    marginLeft: -100, // Ajusta a margem esquerda para centralizar
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    resizeMode: 'cover',
  },
});

export default LoginScreen;
