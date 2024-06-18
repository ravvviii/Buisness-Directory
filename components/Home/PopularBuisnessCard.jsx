import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function PopularBuisnessCard({ buisness }) {
  const router = useRouter()

  return (
    <TouchableOpacity
      onPress={() => router.push('/businessdetails/' + buisness.id)}
      style={{
        marginLeft: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 220,  // Adjust the width to fit the layout
      }}>
      <Image
        source={{ uri: buisness?.imageUrl }}
        style={{
          width: 200,
          height: 130,
          borderRadius: 15
        }}
      />

      <View style={{
        marginTop: 7,
        gap: 5
      }}>

        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 17,
        }}>
          {buisness.Name}
        </Text>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 13,
          color: Colors.GREY,
          flexWrap: 'wrap',  // Ensure text wraps
        }}>
          {buisness.Address}
        </Text>

        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>

          <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5
          }}>
            <Image
              source={require('../../assets/images/star.png')}
              style={{
                width: 15,
                height: 15
              }}
            />

            <Text style={{
              fontFamily: 'outfit'
            }}>4.5</Text>
          </View>
          <Text style={{
            fontFamily: 'outfit',
            backgroundColor: Colors.PRIMARY,
            color: '#fff',
            padding: 3,
            margin: 2,
            fontSize: 10,
            borderRadius: 5
          }}>{buisness.Category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
