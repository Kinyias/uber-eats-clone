import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import './ignoreWarning';
export default function App() {
  return <RootNavigation />;
}
