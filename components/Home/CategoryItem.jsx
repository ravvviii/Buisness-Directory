import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function CategoryItem({category,onCategoryPress}) {
  return (
    <TouchableOpacity
    onPress={()=> onCategoryPress(category)}
    >

      <View style={{
      padding:15,
      backgroundColor:Colors.ICON_BG,
      borderRadius:99,
      marginRight:15 

        
      }}>

     <Image  
     source={{uri:category.icon}}
     style={{
       width:40,        
       height:40,
       
       }}
       />
       </View>
       <Text style={{
        fontSize:15,
        fontFamily:'outfit-medium',
        textAlign:'center',
        marginTop:5
       }}>{category.name}</Text>
    </TouchableOpacity>
  )
}