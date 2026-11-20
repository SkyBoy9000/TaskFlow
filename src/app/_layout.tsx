import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { barve } from '@/theme';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: barve.primarna },
          headerTintColor: barve.bela,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: barve.ozadje },
        }}>
        <Stack.Screen name="index" options={{ title: 'TaskFlow' }} />
        <Stack.Screen name="o-aplikaciji" options={{ title: 'O aplikaciji' }} />
      </Stack>
    </>
  );
}
