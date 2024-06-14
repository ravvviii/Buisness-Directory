import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '../../constants/Colors';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.PRIMARY
    }}>
      <Tabs.Screen name='home'
      options={{
        tabBarLabel:'Home',
        tabBarIcon:({color})=><Ionicons name="home" size={25} color={color}
         />

      }}
      />
      <Tabs.Screen name='explore'
      options={{
        tabBarLabel:'Explore',
        tabBarIcon:({color})=><Ionicons name="search" size={25} color={color}
         />

      }}
      />
      <Tabs.Screen name='profile'
      options={{
        tabBarLabel:'Profile',
        tabBarIcon:({color})=><Ionicons name="people-circle" size={25} color={color}
         />

      }}
      />
    </Tabs>
  )
}