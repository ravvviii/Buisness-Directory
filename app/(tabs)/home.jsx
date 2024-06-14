import React from 'react'
import { ScrollView, View } from 'react-native'
import Category from '../../components/Home/Category'
import Header from '../../components/Home/Header'
import PopularBuisness from '../../components/Home/PopularBuisness'
import Slider from '../../components/Home/Slider'

const home = () => {
  return (
  
      <ScrollView>
      {/* Header */}
      <Header/>

      {/* Slider */}
      <Slider/>

      {/* Category */}
      <Category/>

      {/* Popular Business List */}
      <PopularBuisness/>
      <View style={{
        height:50
      }}>

      </View>
      </ScrollView>
    
  )
}

export default home