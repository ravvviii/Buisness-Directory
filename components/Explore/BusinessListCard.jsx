import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function BusinessListCard({business}) {
       const router = useRouter();
  return (
    <TouchableOpacity 
    onPress={()=>router.push('/businessdetails/'+business.id)}
    style={{
        backgroundColor:"#FFF",
        borderRadius:15,
        marginTop:10,
        // padding:5
    }}>
      <Image source={{uri:business.imageUrl}}
      style={{
        width:'100%',
        height:150,
        borderTopLeftRadius:15,
        borderTopRightRadius:15
      }}
      />
    <View style={{
        padding:10,

    }}> 
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20


        }}>{business?.Name}</Text>
        <Text style={{
            fontFamily:'outfit-medium',
            color:Colors.GREY


        }}>{business?.Address}</Text>
    </View>

    </TouchableOpacity>
  )
}