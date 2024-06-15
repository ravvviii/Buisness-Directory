import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function BuisnessListCard({ business }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push('/businessdetails/'+business.id)}
     
      style={{
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: 'row',
        gap: 10,
      }}
    >
      <Image
        source={{ uri: business.imageUrl }}
        style={{
          width: 120,
          height: 120,
          borderRadius: 15,
        }}
      />
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>
          {business.Name}
        </Text>
        <Text style={{ fontFamily: 'outfit', color: Colors.GREY, fontSize: 15 }}>
          {business.Address}
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
          <Image
            source={require('../../assets/images/star.png')}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ fontFamily: 'outfit' }}>4.5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
