import React, { useState, useEffect, useMemo, useContext } from 'react'; 
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Button,
  ScrollView,
} from 'react-native';
import AuthContext, { AuthProvider } from './contexto';
import InputFocus from './InputFocus';

const AppContent = () => {
  const { user, login, logout } = useContext(AuthContext);

  const [liked, setLiked] = useState(false);
  const [mensagem, setMensagem] = useState('Carregando...');
  const [numero, setNumero] = useState(100000000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMensagem('Dados carregados com sucesso!');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const numeroFormatado = useMemo(() => {
    console.log('Calculando...');
    let total = 0;
    for (let i = 0; i < numero; i++) {
      total += i;
    }
    return total.toLocaleString();
  }, [numero]);

  const mudaLike = () => {
    setLiked(!liked);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.useState}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>Exemplo de useState</Text>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          {liked ? 'Você curtiu!' : 'Você não curtiu!'}
        </Text>
        <TouchableOpacity onPress={mudaLike}>
          <Image
            source={
              liked
                ? require('./assets/likeada.png')
                : require('./assets/like.png')
            }
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.context}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>Exemplo de Context</Text>
        {user ? (
          <>
            <Text style={{ fontSize: 20 }}>Bem-vindo, {user.name}!</Text>
            <Button title="Sair" onPress={logout} />
          </>
        ) : (
          <Button title="Entrar como João" onPress={() => login('João')} />
        )}
      </View>

      <View style={styles.ref}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>Exemplo de Ref</Text>
        <InputFocus />
      </View>

      <View style={styles.effect}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>Exemplo de useEffect</Text>
        <Text style={styles.text}>{mensagem}</Text>
      </View>

      <View style={styles.performance}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>Exemplo de performance</Text>
        <Text style={styles.text}>Soma de 0 até {numero.toLocaleString()}:</Text>
        <Text style={styles.text}>{numeroFormatado}</Text>
        <Button
          title="Mudar número"
          onPress={() => setNumero(numero + 1000000)}
          color="#FF00FF"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0033', 
    padding: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 15,
    tintColor: '#FF00FF', 
    shadowColor: '#FF00FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  useState: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 0, 255, 0.15)', 
    padding: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FF00FF',
    shadowColor: '#FF00FF',
    shadowOpacity: 0.8,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
  },
  context: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 255, 255, 0.15)', 
    padding: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#00FFFF',
    shadowColor: '#00FFFF',
    shadowOpacity: 0.8,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
  },
  ref: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 0, 0.15)', 
    padding: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOpacity: 0.8,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
  },
  effect: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 255, 0, 0.15)', 
    padding: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#00FF00',
    shadowColor: '#00FF00',
    shadowOpacity: 0.8,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
  },
  performance: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 0, 255, 0.25)', 
    padding: 25,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#FF00FF',
    shadowColor: '#FF00FF',
    shadowOpacity: 0.9,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
  },
  inputContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 3,
    borderColor: '#FF00FF',
    backgroundColor: '#1A0033',
    color: '#FF99FF',
    width: 220,
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 30,
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 18,
    shadowColor: '#FF00FF',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  text: {
    fontSize: 22,
    color: '#FF99FF',
    textAlign: 'center',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    textShadowColor: '#FF00FF',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
  },
});

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
