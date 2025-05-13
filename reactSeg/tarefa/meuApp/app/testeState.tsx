import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

type BlinkProps = {
  text: string;
};


const Blink = (props: BlinkProps) => {
  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 1000);

    return () => clearInterval(toggle);
  });
  if (!isShowingText) {
    return null;
  }

  return <Text>{props.text}</Text>;
};

const BlinkApp = () => {
  return (
    <View style={{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        }}>
      <Blink text="Brilha Brilha Estrelinha" />
      <Blink text="Quero ver você brilhar" />
      <Blink text="Lá no alto, lá no céu" />
      <Blink text="Num desenho de cordel" />
    </View>
    
  );
};

export default BlinkApp;


