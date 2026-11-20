import { Pressable, StyleSheet, Text } from 'react-native';

import { barve, pisava, polmeri, razmiki } from '@/theme';

type GumbProps = {
  naslov: string;
  onPress: () => void;
  onemogocen?: boolean;
};

export function Gumb({ naslov, onPress, onemogocen = false }: GumbProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={onemogocen}
      style={({ pressed }) => [
        styles.gumb,
        pressed && styles.gumbPritisnjen,
        onemogocen && styles.gumbOnemogocen,
      ]}>
      <Text style={styles.besedilo}>{naslov}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  gumb: {
    backgroundColor: barve.primarna,
    paddingVertical: razmiki.s + 4,
    paddingHorizontal: razmiki.m,
    borderRadius: polmeri.m,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gumbPritisnjen: {
    opacity: 0.85,
  },
  gumbOnemogocen: {
    opacity: 0.4,
  },
  besedilo: {
    color: barve.bela,
    fontSize: pisava.besedilo,
    fontWeight: '700',
  },
});
