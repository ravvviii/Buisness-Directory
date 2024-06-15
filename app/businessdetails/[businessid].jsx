import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import About from '../../components/BusinessDetail/About';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import Intro from '../../components/BusinessDetail/Intro';
import Review from '../../components/BusinessDetail/Review';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';


export default function BusinessDetails() {
  const { businessid } = useLocalSearchParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBusinessDetailsByID = async () => {
    try {
      const docRef = doc(db, 'BuisnessList', businessid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBusiness({id: docSnap.id , ...docSnap.data()});
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (businessid) {
      getBusinessDetailsByID();
    }
  }, [businessid]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Intro */}
        <Intro business={business} />

        {/* Action Buttons */}
        <ActionButton business={business} />

        {/* About Section */}
        <About business={business} />

        {/* Review Section */}
        <Review business={business} />


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    paddingBottom: 20, // Add some padding to the bottom to ensure all content can be scrolled
  },
});
