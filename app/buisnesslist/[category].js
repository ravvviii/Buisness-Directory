import { useLocalSearchParams, useNavigation } from 'expo-router';
import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { db } from '../../configs/FirebaseConfig';

export default function BuisnessListByCategory() {


    const navigation = useNavigation()
    const {category} = useLocalSearchParams();
    useEffect(()=>{
            navigation.setOptions({
                headerShown:true,
                headerTitle:category


            })
            getBuisnessList();
    },[]);



    // Use to get buisness list by category 
    const getBuisnessList = async()=>{
        const q = query(collection(db), 'BuisnessList' , where("category",'==', category))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
        })

    }
  return (
    <View>
      <Text>{category}</Text>
    </View>
  )
}