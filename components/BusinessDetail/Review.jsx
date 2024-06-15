import { useUser } from '@clerk/clerk-expo';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Image, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';

export default function Review({ business }) {

    const [rating, setRating] = useState(4);
    const [userInput, setUserInput] = useState('');
    const { user } = useUser();

    const onSubmit = async () => {
        const docRef = doc(db, 'BuisnessList', business.id);
        await updateDoc(docRef, {
            reviews: arrayUnion({
                rating: rating,
                comment: userInput,
                userName: user?.fullName,
                userImage: user?.imageUrl,
                userEmail: user?.primaryEmailAddress?.emailAddress
            })
        });

        ToastAndroid.show("Comment added Successfully!", ToastAndroid.BOTTOM);
        setUserInput(''); // Clear input after submission
    };

    return (
        <View style={{
            padding: 8,
            backgroundColor: "#FFF",
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 20
            }}>Review</Text>
            <View>
                <Rating
                    imageSize={30}
                    showRating={false}
                    onFinishRating={(rating) => setRating(rating)}
                    style={{ paddingVertical: 10 }}
                />
                <TextInput
                    onChangeText={(value) => setUserInput(value)}
                    placeholder='Write your comment'
                    value={userInput} // Bind value to state
                    numberOfLines={4}
                    style={{
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 10,
                        borderColor: Colors.GREY,
                        textAlignVertical: 'top',
                    }}
                />
                <TouchableOpacity
                    disabled={!userInput}
                    onPress={onSubmit}
                    style={{
                        padding: 10,
                        backgroundColor: userInput ? Colors.PRIMARY : Colors.GREY,
                        borderRadius: 9,
                        marginTop: 10
                    }}>
                    <Text style={{
                        fontFamily: 'outfit',
                        color: "#FFF",
                        textAlign: "center"
                    }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Display comments */}
            <View style={{ marginTop: 20 }}>
                {business.reviews.map((item, index) => (
                    <View key={index} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10,
                        gap:10,
                        borderWidth:1,
                        borderColor:Colors.GREY,
                        borderRadius:12
                    }}>
                        <Image
                            source={{ uri: item.userImage }}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                marginRight: 5,
                                marginLeft:5
                            }}
                        />
                        <View style={{ display:'flex',
                        gap:5


                         }}>
                            <Text style={{ fontFamily: 'outfit',
                                fontFamily:'outfit-medium'
                             }}>
                                {item.userName}</Text>
                            <Rating
                            imageSize={20}
                            ratingCount={item.rating}
                            style={{alignItems:"flex-start"}}
                            />

                            <Text style={{ fontFamily: 'outfit' }}>
                                {item.comment}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}
