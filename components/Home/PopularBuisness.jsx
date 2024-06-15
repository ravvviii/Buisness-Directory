import { collection, getDocs, limit, query } from 'firebase/firestore'; // Assuming you are using Firestore
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';
 // Update the path to your Firestore config
import { db } from '../../configs/FirebaseConfig';
import PopularBuisnessCard from './PopularBuisnessCard';
export default function PopularBusiness() {




  const [BuisnessList, setBuisnessList] = useState([])
  const GetBusinessList = async () => {
    setBuisnessList([])
    try {
      const q = query(collection(db, 'BuisnessList'), limit(10));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setBuisnessList(prev=>[...prev, doc.data()])
      });
    } catch (error) {
      console.error("Error fetching business list: ", error);
    }
  };


  useEffect(() => {
    GetBusinessList();
  }, []);

  return (
    <View>
      <View style={{
        paddingLeft: 20,
        marginBottom:10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
        <Text style={{
          paddingLeft: 20,
          fontSize: 20,
          fontFamily: 'outfit-bold',
        }}>Popular Business</Text>

        <Text style={{
          color: Colors.PRIMARY,
          fontFamily: 'outfit-medium'
        }}>View All</Text>
      </View>


      <FlatList
      horizontal={true}
      data={BuisnessList}
      renderItem={({item, index})=>(
        <PopularBuisnessCard
        key={index}
        buisness={item}
        
        />
      )}
      />
    </View>
  );
}
