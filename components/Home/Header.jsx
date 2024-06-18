import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function Header() {
  const { user } = useUser();

  return (
    <View style={{
      padding: 20,
      paddingTop: 40,
      backgroundColor: Colors.PRIMARY,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      }}>
        <Image source={{ uri: user?.imageUrl }}
          style={{
            width: 45,
            height: 45,
            borderRadius: 99
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{
            color: '#fff'
          }}>Welcome,</Text>
          <Text style={{
            fontSize: 19,
            fontFamily: 'outfit-medium',
            color: '#fff'
          }}>{user?.fullName}</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 8
      }}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} style={{ marginRight: 10 }} />
        <TextInput
          placeholder='Search...'
          style={{
            fontFamily: 'outfit',
            fontSize: 16,
            flex: 1
          }}
        />
      </View>
    </View>
  );
}
