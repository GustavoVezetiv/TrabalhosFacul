import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './button';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';

const PlaceholderImage = require('@/assets/images/tharg.png');


export default function Index() {

    const [SelectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            alert('You did not select any image.');
        }



    }

    const onReset = () => {
      setShowAppOptions(false);
    }
    const onAddSticker = () => {
      
    }
    const onSaveImageAsync = async () => {
      
    }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={SelectedImage} />
        </View>
        {showAppOptions ? (
            <View style={styles.optionsContainer}>
              <View style={styles.optionsRow}>
                <IconButton icon="refresh" label="Reset" onPress={ onReset } />
                  <CircleButton onPress={onAddSticker} />
                <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
              </View>
            </View>
        ) : (

        <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync}/>
        <Button label="Use esta foto" onPress={() => setShowAppOptions(true)}/>

        </View>
        )}
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
  },
  optionsContainer:{
    position: 'absolute',
    bottom: 0,

  },

  optionsRow:{
    alignItems: 'center',
    flexDirection: 'row',
  }


  
});


