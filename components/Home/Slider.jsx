import { collection, getDocs, query } from 'firebase/firestore'; // Add getDocs import
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Text, View } from 'react-native';
import { db } from '../../configs/FirebaseConfig';

export default function Slider() {

    const [sliderList, setSliderList] = useState([])
  // Define the GetSliderList function before useEffect
  const GetSliderList = async () => {
    setSliderList([])
    try {
      const q = query(collection(db, 'Slider'));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // console.log('No matching documents.');
        Alert.alert('No matching documents.')
        return;
      }
      
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
        setSliderList(perv=>[...perv, doc.data()]);
      });
    } catch (error) {
      // console.error('Error fetching documents: ', error);
      Alert.alert('Error fetching documents:')
    }
  };

  // useEffect to call GetSliderList once the component mounts
  useEffect(() => {
    GetSliderList();
  }, []);

  return (
    <View>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,
        paddingLeft:20,
        paddingTop:20,
        marginBottom:5
      }}>#Special for you </Text>


      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={sliderList}
      style={{
        paddingLeft:20,

      }}
      renderItem={({item, index})=>(
        <Image
        source={{uri:item.imageUrl}}
        style={{
            width:280,
            height:150,
            borderRadius:15,
            marginRight:15

        }}
        
        />
      )}
      />

    </View>
  );
}
