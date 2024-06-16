import { Ionicons } from '@expo/vector-icons';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import ExplorebusinessList from '../../components/Explore/ExplorebusinessList';
import Category from '../../components/Home/Category';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';

export default function Explore() {

      const [businessList, setBusinessList] = useState([]);

  const GetBusinessByCategory = async (category) => {
    setBusinessList([])
    try {
      const q = query(
        collection(db, 'BuisnessList'),
        where("Category", "==", category)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setBusinessList(prev=>[...prev, {id:doc.id, ...doc.data()}])
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  return (
    <View style={{ padding: 27 }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 25
      }}> Explore More</Text>

      {/* Search Bar */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 8,
        borderColor: Colors.PRIMARY,
        borderWidth: 1
      }}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder='Search...'
          style={{
            fontFamily: 'outfit',
            fontSize: 16
          }}
        />
      </View>

      {/* Category */}
      <Category
        explore={true}
        onCategorySelect={(category) => GetBusinessByCategory(category)}
      />

      {/* BusinessList */}
      <ExplorebusinessList businessList={businessList}/>
    </View>
  );
}
