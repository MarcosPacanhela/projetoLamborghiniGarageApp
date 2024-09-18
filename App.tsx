
import { StyleSheet, Text, View } from 'react-native';
import GarageView from './src/views/GarageView';

export default function App() {
  return (
    <View style={styles.container}>
      <GarageView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
