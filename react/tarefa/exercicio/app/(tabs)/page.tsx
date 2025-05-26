import { Image } from 'expo-image';
import { Alert, Platform, StyleSheet, Text, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { State } from 'react-native-gesture-handler';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [largura, setLargura] = useState('');
  const [altura, setAltura] = useState('');

  function calcularAreaTriangulo(base: string, altura: string) {
    const baseNumero = parseFloat(base);
    const alturaNumero = parseFloat(altura);
    
    if (isNaN(baseNumero) || isNaN(alturaNumero)) {
      return 'Valores inválidos';
    }
    
    const area = (baseNumero * alturaNumero);
    return area.toFixed(2);
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ola, Tudo bem? Vem sempre por aqui? 😁</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">pagina testeeee: Experimente</ThemedText>
        <Text style={{fontSize: 36, color: 'white'}}>
          Atividade de medir área do triângulo
        </Text>
        <Text style={{color: 'white'}}>
          Para isso, digite os valores da base e altura do triângulo.        
        </Text>
        <TextInput 
          style={{width: '100%', backgroundColor: 'white', borderWidth: 1, borderColor: 'black', marginBottom: '10%'}}
          value={largura}
          placeholder='Insira o valor da Base'
          onChangeText={(text) => setLargura(text)}
          keyboardType="numeric"
        />
        <TextInput 
          style={{width: '100%', backgroundColor: 'white', borderWidth: 1, borderColor: 'black', marginBottom: '10%'}} 
          value={altura}
          placeholder='Insira o valor da Altura'
          onChangeText={(text) => setAltura(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={() => {
          Alert.alert('Resultado', `A área do triângulo é ${calcularAreaTriangulo(largura, altura)} M2 quadrados`)
        }}>
          <Text style={{fontSize: 36, color: 'white'}}>
            Calcular
          </Text>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
