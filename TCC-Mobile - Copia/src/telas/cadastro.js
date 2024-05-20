const TeladeCadastro = () => {
  // Componente da tela de cadastro
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Cadastro</Text>
      {/* Conteúdo da tela de cadastro */}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TeladeLogin">
        <Stack.Screen name="TeladeLogin" component={TeladeLogin} options={{ headerShown: false }} />
        <Stack.Screen name="TeladeCadastro" component={TeladeCadastro} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(1,1,1,0.8)',
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'rgba(1,1,1,0.8)',
    marginBottom: 20,
  },
  botaocadastro: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(1,1,1,0.8)',
    marginTop: 9,
  },
  buttonEntrar: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(1,1,1,0.8)',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  image: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: imageWidth / 2,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default App;