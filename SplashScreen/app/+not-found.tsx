import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';



export default function NotFoundScreen() {
  return (
    <div>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <h1>Content not found</h1>
    </div>
  );
}


