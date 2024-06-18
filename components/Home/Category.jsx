import { useRouter } from 'expo-router';
import { collection, getDocs, query } from 'firebase/firestore'; // Import necessary Firestore functions
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { db } from '../../configs/FirebaseConfig'; // Import the Firestore database instance
import { Colors } from '../../constants/Colors';
import CategoryItem from './CategoryItem';

export default function Category({explore=false,onCategorySelect}) {
    const [categoryList, setCategoryList] = useState([])
    const router = useRouter();

    useEffect(() => {
        GetCategoryList();
    }, []);

    const GetCategoryList = async () => {
        setCategoryList([])
        try {
            const q = query(collection(db, 'Category')); // Query the 'Category' collection in the Firestore database
            const querySnapshot = await getDocs(q); // Retrieve all documents in the 'Category' collection

            querySnapshot.forEach((doc) => {
                // console.log(doc.data());
                setCategoryList(prev=>[...prev, doc.data()])
            });
        } catch (error) {
            // console.error('Error fetching category documents: ', error);
            Alert.alert('Error fetching category documents:')
        }
    }

    const onCategoryPressHandler= (item)=>{
        if(!explore){
            router.push('/buisnesslist/'+item.name)
        }
        else{

                onCategorySelect(item.name)
        }
    }

    return (
        <View>

        {!explore &&
            <View style={{
                padding: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
            }}>


                <Text style={{
                    paddingLeft: 20,
                    fontSize: 20,
                    fontFamily: 'outfit-bold',
                }}>Category</Text>


                <Text style={{
                    color: Colors.PRIMARY,
                    fontFamily: 'outfit-medium'
                }}>View All</Text>


            </View>
            }

            <FlatList
            data={categoryList}
            horizontal={true}
            style={{
                marginLeft:20
            }}
            renderItem={({item, index})=>(
            <CategoryItem category = {item} 
            key={index}
            onCategoryPress={(category)=>onCategoryPressHandler(item )}
            />
            // 
            )}
            />
        </View>
    );
}
