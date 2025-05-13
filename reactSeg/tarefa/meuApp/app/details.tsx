import { Image } from 'expo-image';
import { Alert, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { State } from 'react-native-gesture-handler';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function DetailsScreen() {
    const [largura, setLargura] = useState('');
    const [altura, setAltura] = useState('');
  
    function calcularAreaTriangulo(base: string, altura: string) {
      const baseNumero = parseFloat(base);
      const alturaNumero = parseFloat(altura);
      
      const area = (baseNumero * alturaNumero);
      return area.toFixed(0.2);
    }
    return (
        <View style={style.container}>
            <Text>Details</Text>
            <Text style={{color: 'black',         
            fontSize: 26,
            justifyContent: 'center'}}>
            Atividade, calculo area do triangulo</Text>
            <Text style={{color: 'black'}}>
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
          <Text style={{fontSize: 36, color: 'black'}}>
            Calcular
          </Text>
        </TouchableOpacity>

        </View>

        
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});