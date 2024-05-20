import { StyleSheet } from "react-native";

const css = StyleSheet.create({
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
  export {css}