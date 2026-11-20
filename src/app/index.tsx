import { Link } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { Gumb } from '@/components/gumb';
import { KarticaNaloge } from '@/components/kartica-naloge';
import { barve, pisava, polmeri, razmiki } from '@/theme';
import {
  jeVeljavenCas,
  Naloga,
  normalizirajCas,
  prestejOpravljene,
  razvrstiPoCasu,
  ustvariId,
} from '@/utils/pomozne-funkcije';

export default function ZacetniZaslon() {
  const [naloge, setNaloge] = useState<Naloga[]>([
    { id: '1', ime: 'Predavanja', cas: '08:00', opravljeno: true },
    { id: '2', ime: 'Trening', cas: '17:30', opravljeno: false },
    { id: '3', ime: 'Domača naloga', cas: '19:00', opravljeno: false },
  ]);
  const [novoIme, setNovoIme] = useState('');
  const [novCas, setNovCas] = useState('');

  const lahkoDodam = novoIme.trim() !== '' && jeVeljavenCas(novCas);

  const dodaj = () => {
    if (!lahkoDodam) return;
    setNaloge((trenutne) => [
      ...trenutne,
      { id: ustvariId(), ime: novoIme.trim(), cas: normalizirajCas(novCas), opravljeno: false },
    ]);
    setNovoIme('');
    setNovCas('');
  };

  const prepni = (id: string) => {
    setNaloge((trenutne) =>
      trenutne.map((naloga) =>
        naloga.id === id ? { ...naloga, opravljeno: !naloga.opravljeno } : naloga,
      ),
    );
  };

  const odstrani = (id: string) => {
    setNaloge((trenutne) => trenutne.filter((naloga) => naloga.id !== id));
  };

  return (
    <View style={styles.zaslon}>
      <Text style={styles.naslov}>Današnji načrt</Text>
      <Text style={styles.povzetek}>
        Opravljeno: {prestejOpravljene(naloge)} / {naloge.length}
      </Text>

      <View style={styles.vnos}>
        <TextInput
          style={[styles.polje, styles.poljeIme]}
          value={novoIme}
          onChangeText={setNovoIme}
          placeholder="Nova naloga ..."
          placeholderTextColor={barve.besediloSekundarno}
        />
        <TextInput
          style={[styles.polje, styles.poljeCas]}
          value={novCas}
          onChangeText={setNovCas}
          placeholder="HH:MM"
          placeholderTextColor={barve.besediloSekundarno}
          keyboardType="numbers-and-punctuation"
          maxLength={5}
          onSubmitEditing={dodaj}
        />
      </View>
      <Gumb naslov="Dodaj nalogo" onPress={dodaj} onemogocen={!lahkoDodam} />

      <FlatList
        style={styles.seznamOkvir}
        data={razvrstiPoCasu(naloge)}
        keyExtractor={(naloga) => naloga.id}
        renderItem={({ item }) => (
          <KarticaNaloge
            ime={item.ime}
            cas={item.cas}
            opravljeno={item.opravljeno}
            onPrepni={() => prepni(item.id)}
            onOdstrani={() => odstrani(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.prazno}>Za danes nimaš nalog.</Text>}
      />

      <Link href="/o-aplikaciji" style={styles.povezava}>
        O aplikaciji
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  zaslon: {
    flex: 1,
    padding: razmiki.m,
  },
  naslov: {
    fontSize: pisava.naslov,
    fontWeight: '800',
    color: barve.besedilo,
  },
  povzetek: {
    fontSize: pisava.besedilo,
    color: barve.besediloSekundarno,
    marginTop: razmiki.xs,
    marginBottom: razmiki.m,
  },
  vnos: {
    flexDirection: 'row',
    gap: razmiki.s,
    marginBottom: razmiki.s,
  },
  polje: {
    backgroundColor: barve.povrsina,
    borderWidth: 1,
    borderColor: barve.obroba,
    borderRadius: polmeri.m,
    paddingHorizontal: razmiki.m,
    paddingVertical: razmiki.s + 4,
    fontSize: pisava.besedilo,
    color: barve.besedilo,
  },
  poljeIme: {
    flex: 1,
  },
  poljeCas: {
    width: 90,
    textAlign: 'center',
  },
  seznamOkvir: {
    marginTop: razmiki.m,
  },
  prazno: {
    textAlign: 'center',
    color: barve.besediloSekundarno,
    marginTop: razmiki.l,
  },
  povezava: {
    textAlign: 'center',
    color: barve.primarna,
    fontSize: pisava.besedilo,
    fontWeight: '600',
    paddingVertical: razmiki.m,
  },
});
