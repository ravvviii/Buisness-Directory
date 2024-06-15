import { useLocalSearchParams, useNavigation } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import BuisnessListCard from '../../components/BuisnessList/BuisnessListCard';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';

export default function BuisnessListByCategory() {
    const navigation = useNavigation();
    const { category } = useLocalSearchParams();

    const [businessList, setBusinessList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchBusinessList = useCallback(async () => {
        setLoading(true);
        if (category) {
            navigation.setOptions({
                headerShown: true,
                headerTitle: category,
            });
            const q = query(
                collection(db, 'BuisnessList'),
                where("Category", "==", category)
            );
            const querySnapshot = await getDocs(q);
            const businesses = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBusinessList(businesses);
        }
        setLoading(false);
    }, [category, navigation]);

    useEffect(() => {
        fetchBusinessList();
    }, [fetchBusinessList]);

    const handleRefresh = () => {
        fetchBusinessList();
    };

    return (
        <View style={{ flex: 1 }}>
            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={Colors.PRIMARY} />
                </View>
            ) : businessList.length > 0 ? (
                <FlatList
                    data={businessList}
                    renderItem={({ item }) => <BuisnessListCard business={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    onRefresh={handleRefresh}
                    refreshing={loading}
                />
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'outfit-bold',
                        color: Colors.GREY,
                        textAlign: 'center'
                    }}>No Businesses Found</Text>
                </View>
            )}
        </View>
    );
}
