import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Button title='Agro' onPress={() => navigation.navigate('Agro')} />
        <Button title='Report' onPress={() => navigation.navigate('Report')} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home