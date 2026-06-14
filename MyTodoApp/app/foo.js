import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Foo() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Foo Screen</Text>
      <Button 
        title="GO BACK" 
        onPress={() => router.back()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});