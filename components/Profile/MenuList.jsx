import { useAuth } from '@clerk/clerk-expo';
import React from 'react';
import { FlatList, Image, Linking, Share, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function MenuList() {
    const { signOut } = useAuth();

    const menuList = [
        // {
        //     id: '1',
        //     name: 'Add Business',
        //     icon: require('../../assets/images/imaggee/placeholder.png'),
        //     path: ''
        // },
        // {
        //     id: '2',
        //     name: 'My Business',
        //     icon: require('../../assets/images/imaggee/my_b.png'),
        //     path: ''
        // },
        {
            id: '3',
            name: 'Share App',
            icon: require('../../assets/images/imaggee/share_1.png'),
            path: 'share'
        },
        {
            id: '4',
            name: 'Logout',
            icon: require('../../assets/images/imaggee/logout.png'),
            path: 'logout'
        },
    ];

    const handlePresss = () => {
        Linking.openURL('https://www.linkedin.com/in/ravi-shankar-singh-ravvviii/');
    };


    const handlePress = (path) => {
        if (path === 'logout') {
            signOut();
            return;
        }
        if (path === 'share') {
            Share.share(
                {
                    message:`Download the Business Directary app from the link below`
                }
            )
                
            return;
        }
        // Add navigation or other functionality based on the path here if needed
    };

    return (
        <View style={{ marginTop: 50 }}>
            <FlatList
                data={menuList}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={{  
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 10,
                            margin: 5,
                            backgroundColor: '#FFF',
                            borderRadius: 15,
                            borderWidth: 2,
                            borderColor: Colors.PRIMARY,
                        }}
                        onPress={() => handlePress(item.path)}
                    >
                        <Image
                            source={item.icon}
                            style={{ 
                                width: 50, 
                                height: 50, 
                                marginRight: 10 
                            }}
                        />
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 15,
                            flexShrink: 1,
                            flexWrap: 'wrap',
                        }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

            <Text style={{
                fontSize: 20,
                fontFamily: 'outfit-bold',
                textAlign: "center",
                marginTop: 100,
                color: Colors.PRIMARY,
            }}
            onPress={handlePresss}
            >Developed with 💖 by RAVVVIII </Text>
        </View>
    );
}
