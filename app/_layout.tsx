import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Appearance } from 'react-native';

import { Colors } from '@/constants/theme';
import { useTheme } from '@react-navigation/native';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.
  light;

  return (
      <Stack screenOptions={{ headerStyle: {backgroundColor: theme.headerBackground}, headerTintColor: theme.text, 
      headerShadowVisible: false}}>
        <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
        <Stack.Screen name="books" options={{ headerShown: true, title: 'Books', headerTitle: 'Books Avaliable' }} />
        <Stack.Screen name="contact" options={{ headerShown: true, title: 'Login', headerTitle: 'Login Page' }} />
        <Stack.Screen name="+not-found" options={{headerShown: false}}/>
      </Stack>
  );
}
