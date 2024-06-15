import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';


export default function Intro({business}) {

    const router = useRouter()
  return (
    <View>
        <View style={{
                position:'absolute',
                zIndex:10,
                display:'flex',
                flexDirection:'row',
                justifyContent:"space-between",
                width:'100%',
                padding:10,
                paddingTop:40
        }}>

            <TouchableOpacity onPress={()=>router.back()}>

        <Ionicons name="arrow-back-circle" size={40} color="black" />
            </TouchableOpacity>


        <Ionicons name="heart-outline" size={40} color="black" />

        </View>
        <Image
        source={{
            uri:business?.imageUrl
        }}
        style={{
                    width:'100%',
                    height:340
        }}
        />

        <View style={{
            padding:20,
            marginTop:-20,
            backgroundColor:"#fff",
            borderTopLeftRadius:20,
            borderTopRightRadius:75,
            borderColor:Colors.PRIMARY,
            
        }}>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:26
            }}>{business.Name}</Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:18
            }}>{business.Address}</Text>
        </View>


    </View>
  )
}