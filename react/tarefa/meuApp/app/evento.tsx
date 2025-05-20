import { Image } from 'expo-image';
import { ImageViewer } from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View } from 'react-native';
import Button from './button'; // Adicionar esta linha
import {useState} from 'react';

const PlaceholderImage = require('@/assets/images/tharg.png');


export default function Index() {

    const [SelectedImage, setSelectedImage] = useState<string | undefined>(undefined);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          quality: 1,
        });
    
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
          console.log(result);
        } else {
          alert('You did not select any image.');
        }
      }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer ImgSource={PlaceholderImage} SelectedImage={SelectedImage} style={styles.image} />
        <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync}/>
        <Button label="Use esta foto"/>

        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',

  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 150,
    marginLeft: "auto",
    marginRight: "auto",

 
    
  },
  footerContainer: {
    flex:1/3,
    alignItems: 'center',
  }
  
});


