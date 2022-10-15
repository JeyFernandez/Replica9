import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import Index from './component/Index'


export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
