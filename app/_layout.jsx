import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import * as SecureStore from "expo-secure-store";
import { Text } from "react-native";
import LoginScreen from '../components/LoginScreen';

const tokenCache = {
  async getToken(key) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      console.error("Error getting token:", err);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return await SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error("Error saving token:", err);
      return;
    }
  },
};

export default function RootLayout() {
  // Load fonts using useFonts hook
  const [loaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf')
  });

  // Handle font loading error
  if (!loaded) {
    return <Text>Loading...</Text>; // Placeholder for loading state
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        {/* Your navigation stack for signed-in users */}
        {/* Example:
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        */}
      </SignedIn>
      
      <SignedOut>
        {/* Render the login screen component */}
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
