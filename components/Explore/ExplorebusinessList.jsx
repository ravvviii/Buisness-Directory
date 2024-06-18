import React from 'react';
import { FlatList } from 'react-native';
import BusinessListCard from './BusinessListCard';

export default function ExploreBusinessList({ businessList }) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={businessList}
      renderItem={({ item, index }) => (
        <BusinessListCard business={item} key={index} />
      )}
    />
  );
}
