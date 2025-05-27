import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
    imgSource: ImageSourcePropType;
    selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
    return (
        <Image 
            source={imageSource}
            style={styles.image}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 160,
        boxShadow: '0px 0px 25px #80ed99',
        borderWidth: 5,
        borderColor: '#a7c957',
    },
});
