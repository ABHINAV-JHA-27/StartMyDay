import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import DetailPage from './src/Screens/DetailPage/DetailPage';
import Navigation from './src/Navigation/Navigation';


export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
