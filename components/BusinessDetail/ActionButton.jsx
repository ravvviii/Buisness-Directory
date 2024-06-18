import React from 'react';
import { FlatList, Image, Linking, Share, Text, TouchableOpacity, View } from 'react-native';

export default function ActionButton({ business }) {
  // Define the action buttons menu
  const actionButtonMenu = [
    {
      id: 1,
      name: 'Call',
      icon: require("../../assets/images/imaggee/call.png"),
      url: 'tel:' + business?.Contact
    },
    {
      id: 2,
      name: 'Location',
      icon: require("../../assets/images/imaggee/pin.png"),
      url: 'https://www.google.com/maps/search/?api=1&query=' + business?.Address
    },
    {
      id: 3,
      name: 'Web',
      icon: require("../../assets/images/imaggee/web.png"),
      url: business?.Website || '' // Add business website URL here
    },
    {
      id: 4,
      name: 'Share',
      icon: require("../../assets/images/imaggee/share.png"),
      url: '' // Placeholder URL for share action
    },
  ];

  // Handle button press events
  const onPressHandle = (item) => {
    if (item.name === 'Share') {
      // Define share functionality here
      Share.share({
        message: business?.Name + "\n Address: " + business.Address + " \n Find more details onn buisness-directory app made from 💗 by Ravvviii "
      })
      return;
    }

    // Open the URL for the pressed button
    Linking.openURL(item.url);
  };

  return (
    <View style={{
      borderColor: "#fff",
      backgroundColor: "#FFF",
      padding: 20,
    }}>
      <FlatList
        numColumns={4}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={actionButtonMenu}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPressHandle(item)}
          >
            <Image source={item?.icon}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text style={{
              fontFamily: 'outfit-medium',
              textAlign: 'center',
              marginTop: 4
            }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
