import { Colors } from '@/constants/Colors'; // Importing Colors from your constants file
import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from "expo-web-browser";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useWarmUpBrowser } from "./../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
       
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/loginpageimage.jpg')} style={styles.image} />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.mainText}>
          Direct Connect with 
          <Text style={styles.highlightedText}> Farmer </Text>
          App
        </Text>

        <Text style={styles.subText}>
          Find your favorite business near you and post your own business
        </Text>

       
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>
            Login 
            
          </Text>
        </TouchableOpacity>

        <Text style={{
          fontSize: 16,
          fontFamily: 'outfit',
          textAlign: 'center',
          marginVertical: 15,
          color: Colors.GREY,
          // marginTop:-2
        }}>
          A <Text style={{color:'red'}}>ravvviii</Text> product
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 20,
  },
  image: {
        width: 220,
    height: 380, // Adjusted height to be proportional and fit the screen better
    borderRadius: 20,
  },
  subContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  mainText: {
    fontSize: 24,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  highlightedText: {
    color: Colors.PRIMARY,
  },
  subText: {
    fontSize: 16,
    fontFamily: 'outfit',
    textAlign: 'center',
    marginVertical: 15,
    color: Colors.GREY,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 99,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'outfit',
    fontSize: 16,
  },
});

