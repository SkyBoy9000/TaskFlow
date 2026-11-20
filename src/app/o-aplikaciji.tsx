import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Gumb } from '@/components/gumb';
import { barve, pisava, polmeri, razmiki } from '@/theme';

export default function OAplikaciji() {
  const router = useRouter();
  const [prikaziAvtorje, setPrikaziAvtorje] = useState(false);

  return (
    <View style={styles.zaslon}>
      <View style={styles.kartica}>
        <Text style={styles.naslov}>TaskFlow</Text>
        <Text style={styles.besedilo}>
          Aplikacija za dijake in študente, ki želijo imeti organiziran dan. Naloge se lepo
          povežejo v dnevni načrt, urnik pa lahko prilagajaš sproti.
        </Text>
        {prikaziAvtorje && (
          <Text style={styles.avtorji}>Avtorja: Amadej Javornik, Marko Adamović (4. TRB)</Text>
        )}
      </View>

      <View style={styles.gumbi}>
        <Gumb
          naslov={prikaziAvtorje ? 'Skrij avtorja' : 'Pokaži avtorja'}
          onPress={() => setPrikaziAvtorje((trenutno) => !trenutno)}
        />
        <Gumb naslov="Nazaj na načrt" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  zaslon: {
    flex: 1,
    padding: razmiki.m,
    gap: razmiki.m,
  },
  kartica: {
    backgroundColor: barve.povrsina,
    borderWidth: 1,
    borderColor: barve.obroba,
    borderRadius: polmeri.l,
    padding: razmiki.l,
    gap: razmiki.s,
  },
  naslov: {
    fontSize: pisava.naslov,
    fontWeight: '800',
    color: barve.primarna,
  },
  besedilo: {
    fontSize: pisava.besedilo,
    color: barve.besedilo,
    lineHeight: 24,
  },
  avtorji: {
    fontSize: pisava.besedilo,
    color: barve.besediloSekundarno,
    marginTop: razmiki.s,
  },
  gumbi: {
    gap: razmiki.s,
  },
});
