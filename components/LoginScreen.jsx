import { Colors } from '@/constants/Colors';
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
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/login.png')} style={styles.image} />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.mainText}>
          Your Ultimate
          <Text style={styles.highlightedText}>Community Business Directory</Text>
          App
        </Text>

        <Text style={{
          fontSize:15,
          fontFamily:'outfit'  ,
          textAlign:  'center',
          marginVertical:15,
          color:Colors.GREY
          
          }}>
          Find your favorite buisness near you and post your own buisness
        </Text>

        <TouchableOpacity style={{
          backgroundColor:Colors.PRIMARY,
          padding:16,
          borderRadius:99,

        }}
        onPress={onPress}
        >
          <Text style={{
            textAlign:'center',
            color:'#fff',
            fontFamily:'outfit'
          }}>
            Let's Get Started
          </Text>
        </TouchableOpacity>
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
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    width: '100%',
    paddingVertical: 20,
  },
  image: {
    width: 220,
    height: 420,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#000',
  },
  subContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-20
  },
  mainText: {
    fontSize: 30,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  highlightedText: {
    color: Colors.PRIMARY,
  },
});
