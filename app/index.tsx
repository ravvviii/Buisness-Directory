import { Redirect } from "expo-router";
import { LogBox } from 'react-native';



export default function Index() {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation']);
  LogBox.ignoreLogs([
    'The navigation state parsed from the URL contains routes not present in the root navigator',
  ]);
  
  return <Redirect href={'/home'} />
}
