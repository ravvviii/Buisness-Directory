import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import BusinessListCard from './BusinessListCard'

export default function ExplorebusinessList({businessList}) {
  return (
    <ScrollView>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={businessList}
      renderItem={({item, index})=>(
        <BusinessListCard business={item}
        key={index} />
      )}
      />

      {/* <View style={{
        height:100
      }}>

      </View> */}
    </ScrollView>
  )
}