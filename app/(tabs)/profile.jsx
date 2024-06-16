import React from 'react'
import { Text, View } from 'react-native'
import MenuList from '../../components/Profile/MenuList'
import USerIntro from '../../components/Profile/USerIntro'

export default function profile() {
  return (
    <View style={{
      padding:27
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35
      }}>
        Profile
      </Text>
      {/* USer Info */}

      <USerIntro/>

      {/* Menu List */}
      <MenuList/>
      
    </View>
  )
}