import { Stack } from 'expo-router';
import { Tabs } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
   <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}

      />
      <Tabs.Screen
        name="details"
        options={{
          title: 'Detalles',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="square.fill" color={color} />,
          }}
      />

    <Tabs.Screen
        name="testeState"
        options={{
          title: 'testeState',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          }}
      />


    </Tabs>

    
  );
  
}
